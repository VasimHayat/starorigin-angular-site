import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ServiceCatalogService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';

/** One template for every service: hero + content blocks + CTA, all from GET /services/:slug. */
@Component({
  selector: 'app-service-detail-page',
  imports: [PageHero, BlockRenderer, CtaBand, PageSkeleton, PageError],
  template: `
    @switch (state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error [notFound]="notFound()" /> }
      @case ('success') {
        @if (page(); as p) {
          <app-page-hero [hero]="p.hero" />
          <app-block-renderer [blocks]="p.blocks" />
          @if (p.cta) { <app-cta-band [band]="p.cta" /> }
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServiceDetailPage {
  /** Bound from the :slug route param. */
  readonly slug = input.required<string>();

  private readonly catalog = inject(ServiceCatalogService);
  private readonly seo = inject(SeoService);

  protected readonly state = toSignal(
    toObservable(this.slug).pipe(switchMap((slug) => toLoadable(this.catalog.getBySlug(slug)))),
    { initialValue: LOADING },
  );

  protected readonly page = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });

  protected readonly notFound = computed(() => {
    const s = this.state();
    return s.status === 'error' && s.notFound;
  });

  constructor() {
    effect(() => {
      const p = this.page();
      if (!p) return;
      this.seo.set(p.seo, `/services/${p.slug}`);
      this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: p.name,
        description: p.seo.description,
        provider: { '@type': 'Organization', name: 'StarOrigin' },
        areaServed: ['IN', 'AE', 'US'],
      });
    });
  }
}
