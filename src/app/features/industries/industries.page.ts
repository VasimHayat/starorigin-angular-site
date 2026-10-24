import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Industry } from '../../core/models';
import { PagesService, ProofService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { IndustriesContent } from './industries.types';

/** Industries: hero + sector grid (GET /industries) + BFSI deep dive and services (page blocks) + CTA. */
@Component({
  selector: 'app-industries-page',
  imports: [NgTemplateOutlet, RouterLink, PageHero, BlockRenderer, CtaBand, SectionHeading, Icon, SampleTag, Reveal, Spotlight, PageSkeleton, PageError],
  template: `
    @switch (state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error /> }
      @case ('success') {
        @if (page(); as p) {
          <app-page-hero [hero]="p.hero" />

          <section class="tight" id="sectors">
            <div class="wrap">
              <app-section-heading [heading]="p.sectorsHeading" />
              <div class="grid g4">
                @for (ind of industries(); track ind.id; let i = $index) {
                  @if (ind.highlight) {
                    <a appSpotlight appReveal [revealDelay]="i" class="card highlight" routerLink="/industries" fragment="bfsi">
                      <ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: ind }" />
                      <span class="link">Deep dive <app-icon name="arrow" /></span>
                    </a>
                  } @else {
                    <div appSpotlight appReveal [revealDelay]="i" class="card">
                      <ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: ind }" />
                    </div>
                  }
                }
              </div>
            </div>
          </section>

          <app-block-renderer [blocks]="p.blocks" />
          @if (p.cta) { <app-cta-band [band]="p.cta" /> }
        }
      }
    }

    <ng-template #body let-ind>
      <span class="ic"><app-icon [name]="ind.icon" /></span>
      <h3>{{ ind.name }} <app-sample-tag [label]="ind.sample" /></h3>
      <p class="grow">{{ ind.text }}</p>
      <div class="mini-tags">@for (r of ind.roles; track r) {<span>{{ r }}</span>}</div>
    </ng-template>
  `,
  styles: `
    :host { display: block; }
    .card { height: 100%; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndustriesPage {
  private readonly seo = inject(SeoService);

  protected readonly state = toSignal(toLoadable(inject(PagesService).getPage<IndustriesContent>('industries')), {
    initialValue: LOADING,
  });
  protected readonly page = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });
  protected readonly industries = toSignal(inject(ProofService).industries(), { initialValue: [] as Industry[] });

  constructor() {
    this.seo.set(
      {
        title: 'Industries we recruit for',
        description: 'Sector-specialist recruitment across IT, BFSI and Oracle banking tech, manufacturing, healthcare, retail, engineering, telecom and logistics.',
      },
      '/industries',
    );
    effect(() => {
      const p = this.page();
      if (p) this.seo.set(p.seo, '/industries');
    });
  }
}
