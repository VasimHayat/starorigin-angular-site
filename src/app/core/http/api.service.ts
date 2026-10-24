import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { APP_ENV } from '../config/app-env.token';

type Params = Record<string, string | number | boolean | readonly (string | number | boolean)[]>;

/**
 * Thin wrapper over HttpClient used by every data service.
 *
 * - Builds URLs from `apiBaseUrl`, so services only know resource paths ('jobs', 'jobs/123').
 * - Optional in-memory caching for read-mostly content (services, offices, team…).
 * - In development the mock-backend interceptor answers these calls from /public/mock-api.
 *   Switching to a real backend needs no service changes — only environment config.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly env = inject(APP_ENV);
  private readonly cache = new Map<string, Observable<unknown>>();

  url(path: string): string {
    return `${this.env.apiBaseUrl}/${path.replace(/^\/+/, '')}`;
  }

  get<T>(path: string, options: { params?: Params; cache?: boolean } = {}): Observable<T> {
    const params = options.params ? new HttpParams({ fromObject: options.params }) : undefined;
    const key = `${path}?${params?.toString() ?? ''}`;
    if (options.cache && this.cache.has(key)) {
      return this.cache.get(key) as Observable<T>;
    }
    const request$ = this.http.get<T>(this.url(path), { params });
    if (!options.cache) return request$;

    const cached$ = request$.pipe(
      // Drop failed requests from the cache so the next subscriber retries.
      catchError((err) => {
        this.cache.delete(key);
        return throwError(() => err);
      }),
      shareReplay({ bufferSize: 1, refCount: false }),
    );
    this.cache.set(key, cached$);
    return cached$;
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(this.url(path), body);
  }

  /** Converts a plain payload into multipart FormData (Files kept as files, arrays repeated). */
  toFormData(payload: object): FormData {
    const data = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      if (value === undefined || value === null) continue;
      if (value instanceof File) data.append(key, value, value.name);
      else if (Array.isArray(value)) value.forEach((v) => data.append(key, String(v)));
      else data.append(key, String(value));
    }
    return data;
  }
}
