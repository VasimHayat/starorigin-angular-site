import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { APP_ENV } from '../config/app-env.token';
import { mockBackendInterceptor } from './mock-backend.interceptor';

const tick = () => new Promise((r) => setTimeout(r));

describe('mockBackendInterceptor', () => {
  let http: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([mockBackendInterceptor])),
        provideHttpClientTesting(),
        {
          provide: APP_ENV,
          useValue: { production: false, apiBaseUrl: '/api', useMockApi: true, mockApiRoot: '/mock-api', mockLatencyMs: 0, siteUrl: '' },
        },
      ],
    });
    http = TestBed.inject(HttpClient);
    backend = TestBed.inject(HttpTestingController);
    vi.spyOn(console, 'info').mockImplementation(() => undefined);
  });

  afterEach(() => backend.verify());

  it('maps a collection GET to its JSON file', async () => {
    const result = firstValueFrom(http.get('/api/jobs'));
    await tick();
    backend.expectOne('/mock-api/jobs.json').flush([{ id: 'a' }]);
    expect(await result).toEqual([{ id: 'a' }]);
  });

  it('resolves an item by id or slug from the collection file', async () => {
    const result = firstValueFrom(http.get('/api/services/rpo'));
    await tick();
    backend.expectOne('/mock-api/services.json').flush([{ slug: 'executive-search' }, { slug: 'rpo', name: 'RPO' }]);
    expect(await result).toEqual({ slug: 'rpo', name: 'RPO' });
  });

  it('returns 404 when the item is missing', async () => {
    const result = firstValueFrom(http.get('/api/jobs/nope'));
    await tick();
    backend.expectOne('/mock-api/jobs.json').flush([{ id: 'a' }]);
    await expect(result).rejects.toMatchObject({ status: 404 });
  });

  it('serves per-item documents (pages, insights, legal) from their own file', async () => {
    const result = firstValueFrom(http.get('/api/legal/privacy'));
    await tick();
    backend.expectOne('/mock-api/legal/privacy.json').flush({ slug: 'privacy' });
    expect(await result).toEqual({ slug: 'privacy' });
  });

  it('acknowledges POSTs without hitting the network', async () => {
    const receipt = await firstValueFrom(http.post<{ status: string; id: string }>('/api/contact', { name: 'x' }));
    expect(receipt.status).toBe('received');
    expect(receipt.id).toBeTruthy();
  });

  it('leaves non-API requests untouched', async () => {
    const result = firstValueFrom(http.get('/assets/x.json'));
    backend.expectOne('/assets/x.json').flush({ ok: true });
    expect(await result).toEqual({ ok: true });
  });
});
