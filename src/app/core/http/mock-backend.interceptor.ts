import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, delay, map, of, switchMap, throwError, timer } from 'rxjs';
import { APP_ENV } from '../config/app-env.token';

/**
 * Collections whose items are large documents stored one file per item:
 *   GET /<collection>/<key> → /mock-api/<collection>/<key>.json
 * All other collections keep every item in a single array file.
 */
const PER_ITEM_COLLECTIONS = new Set(['pages', 'insights', 'legal']);

/**
 * Mock backend for development and the pre-API launch.
 *
 * Convention (mirrors a typical REST API):
 *   GET  {apiBaseUrl}/<collection>          → /mock-api/<collection>.json
 *   GET  {apiBaseUrl}/<collection>/<key>    → per-item file (see above) or the item in <collection>.json
 *                                              whose `id` or `slug` === key (404 otherwise)
 *   POST {apiBaseUrl}/<anything>            → 201 { id, status: 'received', receivedAt }
 *
 * Remove it from app.config (or set `useMockApi: false`) when the real API is live.
 */
export const mockBackendInterceptor: HttpInterceptorFn = (req, next) => {
  const env = inject(APP_ENV);
  const prefix = `${env.apiBaseUrl}/`;
  if (!env.useMockApi || !req.url.startsWith(prefix)) return next(req);

  const segments = req.url.slice(prefix.length).split('?')[0].split('/').filter(Boolean);
  const latency = env.mockLatencyMs;
  const notFound = () => new HttpErrorResponse({ status: 404, statusText: 'Not Found', url: req.url });

  if (req.method === 'POST' || req.method === 'PUT') {
    const body = { id: crypto.randomUUID(), status: 'received', receivedAt: new Date().toISOString() };
    if (!env.production) console.info(`[mock-api] ${req.method} /${segments.join('/')}`, req.body);
    return of(new HttpResponse({ status: 201, body })).pipe(delay(latency));
  }

  if (req.method !== 'GET' || segments.length === 0 || segments.length > 2) {
    return throwError(notFound);
  }

  const [collection, key] = segments;
  const perItem = key !== undefined && PER_ITEM_COLLECTIONS.has(collection);
  // Query params are ignored by the static files; services filter client-side in mock mode.
  const fileReq = req.clone({
    url: perItem ? `${env.mockApiRoot}/${collection}/${key}.json` : `${env.mockApiRoot}/${collection}.json`,
  });

  return timer(latency).pipe(
    switchMap(() => next(fileReq)),
    // A missing file can come back as index.html (JSON parse error with status 200) — report it as 404.
    catchError((err: HttpErrorResponse) => throwError(() => (err.status === 200 || err.status === 404 ? notFound() : err))),
    map((event) => {
      if (!(event instanceof HttpResponse)) return event;
      // Dev servers may answer unknown paths with index.html; treat non-JSON as a 404.
      if (typeof event.body !== 'object' || event.body === null) throw notFound();
      if (perItem || key === undefined) return event;
      const items = Array.isArray(event.body) ? (event.body as { id?: string; slug?: string }[]) : [];
      const item = items.find((i) => i.id === key || i.slug === key);
      if (!item) throw notFound();
      return event.clone({ body: item });
    }),
  );
};
