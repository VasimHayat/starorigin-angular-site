import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, startWith } from 'rxjs';

/** UI-friendly async state for any request: drives skeletons, content and error/not-found states. */
export type Loadable<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; notFound: boolean; error: unknown };

export const LOADING = { status: 'loading' } as const;

/** Wraps an Observable into a Loadable stream (use with toSignal + switchMap). */
export function toLoadable<T>(source$: Observable<T>): Observable<Loadable<T>> {
  return source$.pipe(
    map((data) => ({ status: 'success', data }) as const),
    startWith(LOADING),
    catchError((error: unknown) =>
      of({ status: 'error', notFound: error instanceof HttpErrorResponse && error.status === 404, error } as const),
    ),
  );
}
