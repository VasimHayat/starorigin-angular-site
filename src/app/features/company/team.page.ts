import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TeamMember } from '../../core/models';
import { TeamService } from '../../core/services';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { CtaButton } from '../../shared/ui/cta-button/cta-button';
import { Icon } from '../../shared/ui/icon/icon';
import { MemberCard } from '../../shared/ui/member-card/member-card';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { loadCompanyPage } from './company-page';
import { TeamPageContent } from './company.types';

/** Team: leadership feature for the featured member, full team grid, "Join us" strip and CTA. */
@Component({
  selector: 'app-team-page',
  imports: [
    RouterLink,
    PageHero,
    BlockRenderer,
    CtaBand,
    CtaButton,
    MemberCard,
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

          @if (leader(); as m) {
            <section class="tight" aria-labelledby="leader-name">
              <div class="wrap">
                <div appSpotlight appReveal class="highlight split feature">
                  <app-member-card class="feature-photo" [member]="m" />
                  <div class="feature-body">
                    <span class="tag">{{ p.leadership.eyebrow }}</span>
                    <h2 id="leader-name">{{ m.name }}</h2>
                    <p class="role">{{ m.role }}</p>
                    <p class="muted bio">{{ p.leadership.text }}</p>
                    @if (m.focus) {
                      <p class="muted focus">Focus: {{ m.focus }} <app-sample-tag [label]="m.sample" /></p>
                    }
                    <div class="btn-row">
                      @for (c of p.leadership.ctas; track c.label) {<app-cta-button [cta]="c" />}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }

          <app-block-renderer [blocks]="p.blocks" />

          <section>
            <div class="wrap">
              <app-section-heading [heading]="p.teamHeading" />
              <div class="team">
                @for (m of team(); track m.id; let i = $index) {
                  <app-member-card appReveal [revealDelay]="i" [member]="m" />
                }
              </div>
            </div>
          </section>

          <section class="flush-top">
            <div class="wrap">
              <div appSpotlight appReveal class="card join">
                <div class="join-copy">
                  <span class="ic"><app-icon [name]="p.joinUs.icon" /></span>
                  <div>
                    <h3>{{ p.joinUs.title }}</h3>
                    <p>{{ p.joinUs.text }}</p>
                  </div>
                </div>
                <a class="btn btn-ghost" [routerLink]="p.joinUs.link.url">{{ p.joinUs.link.label }} <app-icon name="arrow" /></a>
              </div>
            </div>
          </section>

          @if (p.cta) { <app-cta-band [band]="p.cta" /> }
        }
      }
    }
  `,
  styleUrl: './team.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeamPage {
  protected readonly vm = loadCompanyPage<TeamPageContent>('team');
  protected readonly team = toSignal(inject(TeamService).list(), { initialValue: [] as TeamMember[] });
  protected readonly leader = computed(() => this.team().find((m) => m.featured) ?? null);
}
