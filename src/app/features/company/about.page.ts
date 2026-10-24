import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TeamService } from '../../core/services';
import { Reveal } from '../../shared/directives/reveal';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { CtaButton } from '../../shared/ui/cta-button/cta-button';
import { MemberCard } from '../../shared/ui/member-card/member-card';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { loadCompanyPage } from './company-page';
import { AboutPageContent } from './company.types';

/** About: story, values, milestones, numbers and comparison from /pages/about, plus a leadership teaser from /team. */
@Component({
  selector: 'app-about-page',
  imports: [PageHero, BlockRenderer, CtaBand, CtaButton, MemberCard, PageSkeleton, PageError, Reveal],
  template: `
    @switch (vm.state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error [notFound]="vm.notFound()" /> }
      @case ('success') {
        @if (vm.page(); as p) {
          <app-page-hero [hero]="p.hero" />
          <app-block-renderer [blocks]="p.blocks" />

          @if (leader(); as m) {
            <section class="flush-top" aria-labelledby="leadership-title">
              <div class="wrap split">
                <app-member-card appReveal class="leader-photo" [member]="m" />
                <div>
                  <span class="tag">{{ p.leadership.eyebrow }}</span>
                  <h2 id="leadership-title" class="big-h2">{{ p.leadership.title }} <span class="grad-text">{{ m.name }}.</span></h2>
                  <p class="muted lead-p">{{ p.leadership.text }}</p>
                  <div class="btn-row">
                    @for (c of p.leadership.ctas; track c.label) {<app-cta-button [cta]="c" />}
                  </div>
                </div>
              </div>
            </section>
          }

          @if (p.cta) { <app-cta-band [band]="p.cta" /> }
        }
      }
    }
  `,
  styles: `
    :host { display: block; }
    .leader-photo { max-width: 420px; width: 100%; }
    .big-h2 { font-size: clamp(32px, 4vw, 52px); margin: 18px 0 20px; }
    .lead-p { font-size: 17px; margin-bottom: 28px; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPage {
  protected readonly vm = loadCompanyPage<AboutPageContent>('about');
  private readonly team = toSignal(inject(TeamService).list(), { initialValue: [] });
  protected readonly leader = computed(() => this.team().find((m) => m.featured) ?? this.team()[0] ?? null);
}
