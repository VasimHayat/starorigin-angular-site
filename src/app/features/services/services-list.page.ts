import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { forkJoin } from 'rxjs';
import { PagesService, ServiceCatalogService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { ServiceBento } from './components/service-bento';
import { ServicesOverviewPage } from './services.types';

/** /services — hero, stats, bento of every service (GET /services), then model comparison, TaaS, FAQ and CTA. */
@Component({
  selector: 'app-services-list-page',
  imports: [PageHero, BlockRenderer, CtaBand, SectionHeading, ServiceBento, PageSkeleton, PageError],
  template: `
    @switch (state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error [notFound]="notFound()" /> }
      @case ('success') {
        @if (data(); as d) {
          <app-page-hero [hero]="d.page.hero" />
          <app-block-renderer [blocks]="before()" />
          <section [attr.id]="d.page.bento.id ?? null" class="flush-top">
            <div class="wrap">
              <app-section-heading [heading]="d.page.bento.heading" />
              <app-service-bento [services]="d.services" [featured]="d.page.bento.featured" />
            </div>
          </section>
          <app-block-renderer [blocks]="after()" />
          @if (d.page.cta) { <app-cta-band [band]="d.page.cta" /> }
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesListPage {
  private readonly seo = inject(SeoService);

  protected readonly state = toSignal(
    toLoadable(
      forkJoin({
        page: inject(PagesService).getPage<ServicesOverviewPage>('services'),
        services: inject(ServiceCatalogService).list(),
      }),
    ),
    { initialValue: LOADING },
  );

  protected readonly data = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });

  protected readonly notFound = computed(() => {
    const s = this.state();
    return s.status === 'error' && s.notFound;
  });

  private readonly split = computed(() => this.data()?.page.bento.after ?? 0);
  protected readonly before = computed(() => this.data()?.page.blocks.slice(0, this.split()) ?? []);
  protected readonly after = computed(() => this.data()?.page.blocks.slice(this.split()) ?? []);

  constructor() {
    effect(() => {
      const d = this.data();
      if (!d) return;
      this.seo.set(d.page.seo, '/services');
      const faq = d.page.blocks.find((b) => b.type === 'faq');
      this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'StarOrigin hiring & staffing services',
        itemListElement: d.services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          description: s.summary,
          url: `/services/${s.slug}`,
        })),
      });
      if (faq?.type === 'faq') {
        this.seo.setJsonLd(
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.items.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') },
            })),
          },
          'faq',
        );
      }
    });
  }
}
