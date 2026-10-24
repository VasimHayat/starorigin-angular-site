import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError, toArray, firstValueFrom } from 'rxjs';
import { toLoadable } from './loadable';

describe('toLoadable', () => {
  it('emits loading, then success with data', async () => {
    const states = await firstValueFrom(toLoadable(of(42)).pipe(toArray()));
    expect(states).toEqual([{ status: 'loading' }, { status: 'success', data: 42 }]);
  });

  it('flags 404 responses as notFound', async () => {
    const states = await firstValueFrom(toLoadable(throwError(() => new HttpErrorResponse({ status: 404 }))).pipe(toArray()));
    expect(states[1]).toMatchObject({ status: 'error', notFound: true });
  });

  it('treats other failures as a generic error', async () => {
    const states = await firstValueFrom(toLoadable(throwError(() => new HttpErrorResponse({ status: 500 }))).pipe(toArray()));
    expect(states[1]).toMatchObject({ status: 'error', notFound: false });
  });
});
