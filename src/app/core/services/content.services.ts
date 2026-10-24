import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../http/api.service';
import {
  Article,
  ArticleSummary,
  CaseStudy,
  ContentPage,
  HomeContent,
  Industry,
  LegalPage,
  Office,
  ServiceOffering,
  ServiceSummary,
  TeamMember,
  Testimonial,
} from '../models';

/*
 * Read-only content services. Each maps to one REST resource so the backend/CMS can
 * implement them independently. All list endpoints are cached for the session.
 */

/** GET /services, GET /services/:slug */
@Injectable({ providedIn: 'root' })
export class ServiceCatalogService {
  private readonly api = inject(ApiService);

  list(): Observable<ServiceSummary[]> {
    return this.api
      .get<ServiceSummary[]>('services', { cache: true })
      .pipe(map((items) => [...items].sort((a, b) => a.order - b.order)));
  }

  getBySlug(slug: string): Observable<ServiceOffering> {
    return this.api.get<ServiceOffering>(`services/${encodeURIComponent(slug)}`, { cache: true });
  }
}

/** GET /pages/:slug — generic content pages (about, industries, careers…) and GET /home. */
@Injectable({ providedIn: 'root' })
export class PagesService {
  private readonly api = inject(ApiService);

  getPage<T extends ContentPage = ContentPage>(slug: string): Observable<T> {
    return this.api.get<T>(`pages/${encodeURIComponent(slug)}`, { cache: true });
  }

  home(): Observable<HomeContent> {
    return this.api.get<HomeContent>('home', { cache: true });
  }
}

/** GET /offices */
@Injectable({ providedIn: 'root' })
export class OfficesService {
  private readonly api = inject(ApiService);
  list(): Observable<Office[]> {
    return this.api.get<Office[]>('offices', { cache: true });
  }
}

/** GET /team */
@Injectable({ providedIn: 'root' })
export class TeamService {
  private readonly api = inject(ApiService);
  list(): Observable<TeamMember[]> {
    return this.api.get<TeamMember[]>('team', { cache: true });
  }
}

/** GET /testimonials, GET /case-studies, GET /industries */
@Injectable({ providedIn: 'root' })
export class ProofService {
  private readonly api = inject(ApiService);
  testimonials(): Observable<Testimonial[]> {
    return this.api.get<Testimonial[]>('testimonials', { cache: true });
  }
  caseStudies(): Observable<CaseStudy[]> {
    return this.api.get<CaseStudy[]>('case-studies', { cache: true });
  }
  industries(): Observable<Industry[]> {
    return this.api.get<Industry[]>('industries', { cache: true });
  }
}

/** GET /insights, GET /insights/:slug */
@Injectable({ providedIn: 'root' })
export class InsightsService {
  private readonly api = inject(ApiService);
  list(): Observable<ArticleSummary[]> {
    return this.api.get<ArticleSummary[]>('insights', { cache: true });
  }
  getBySlug(slug: string): Observable<Article> {
    return this.api.get<Article>(`insights/${encodeURIComponent(slug)}`, { cache: true });
  }
}

/** GET /legal/:slug */
@Injectable({ providedIn: 'root' })
export class LegalService {
  private readonly api = inject(ApiService);
  getBySlug(slug: string): Observable<LegalPage> {
    return this.api.get<LegalPage>(`legal/${encodeURIComponent(slug)}`, { cache: true });
  }
}
