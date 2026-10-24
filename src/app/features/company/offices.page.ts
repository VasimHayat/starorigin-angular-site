import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Office } from '../../core/models';
import { OfficesService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { OfficeCard } from '../../shared/ui/office-card/office-card';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { loadCompanyPage } from './company-page';
import { OfficesPageContent } from './company.types';
import { OfficeMap } from './components/office-map';

/** Offices: live office cards, per-office details with click-to-load maps, contact options and CTA. */
@Component({
  selector: 'app-offices-page',
  imports: [
    PageHero,
    BlockRenderer,
    CtaBand,
    OfficeCard,
    OfficeMap,
    SectionHeading,
    SampleTag,
    Icon,
    PageSkeleton,
    PageError,
    Reveal,
    Spotlight,
  ],
  template: `
    @switch (vm.state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error [notFound]="vm.notFound()" /> }
      @case ('success') {
        @if (vm.page(); as p) {
          <app-page-hero [hero]="p.hero" />

          <section class="tight">
            <div class="wrap">
              <div class="grid g4">
                @for (o of offices(); track o.id; let i = $index) {
                  <app-office-card appReveal [revealDelay]="i" [office]="o" [detailed]="true" />
                }
              </div>
              <p class="muted hours"><app-icon name="clock" />{{ p.hoursNote.text }} <app-sample-tag [label]="p.hoursNote.sample" /></p>
            </div>
          </section>

          <section>
            <div class="wrap">
              <app-section-heading [heading]="p.detailsHeading" />
              <div class="grid g2">
                @for (o of offices(); track o.id) {
                  <article appSpotlight appReveal class="card" [id]="o.id">
                    <span class="tag">{{ p.officeTags[o.id] ?? o.code }}</span>
                    <h3>{{ o.city }}</h3>
                    <p><b class="entity">{{ o.entity }}</b><br />{{ o.address }}</p>
                    @if (o.focus) {<p>Focus: {{ o.focus }} <app-sample-tag [label]="o.sample" /></p>}
                    <p><a class="link" [href]="'tel:' + o.tel"><app-icon name="phone" />{{ o.phone }}</a></p>
                    <app-office-map [address]="o.address" [label]="o.city + ' office'" />
                  </article>
                }
              </div>
            </div>
          </section>

          <app-block-renderer [blocks]="p.blocks" />
          @if (p.cta) { <app-cta-band [band]="p.cta" /> }
        }
      }
    }
  `,
  styles: `
    :host { display: block; }
    .hours { font-size: 14px; margin-top: 20px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .hours app-icon { width: 16px; height: 16px; color: var(--teal); }
    .entity { color: var(--text); }
    .link app-icon { width: 16px; height: 16px; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OfficesPage {
  protected readonly vm = loadCompanyPage<OfficesPageContent>('offices');
  protected readonly offices = toSignal(inject(OfficesService).list(), { initialValue: [] as Office[] });

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const list = this.offices();
      if (!list.length) return;
      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@graph': list.map((o) => ({
          '@type': 'LocalBusiness',
          name: `${o.entity} (${o.city})`,
          address: o.address,
          telephone: o.tel,
          email: o.email,
        })),
      });
    });
  }
}
