import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero as PageHeroModel } from '../../../core/models';
import { Reveal } from '../../directives/reveal';
import { Spotlight } from '../../directives/spotlight';
import { CtaButton } from '../cta-button/cta-button';
import { Funnel } from '../funnel/funnel';
import { Headline } from '../headline/headline';
import { InfoCard } from '../info-card/info-card';
import { SampleTag } from '../sample-tag/sample-tag';

/**
 * Inner-page hero: aurora, breadcrumbs, h1 with gradient phrase, lead, CTAs and an optional aside
 * (funnel / stats / card). Extra content can be projected below the CTAs (e.g. a search box).
 */
@Component({
  selector: 'app-page-hero',
  imports: [RouterLink, Headline, CtaButton, Funnel, InfoCard, SampleTag, Reveal, Spotlight],
  template: `
    @let h = hero();
    <section class="page-hero" [class.center]="h.align === 'center'">
      <div class="aurora soft" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="wrap" [class.split]="!!h.aside">
        <div>
          @if (h.breadcrumbs?.length) {
            <nav class="crumbs" aria-label="Breadcrumb">
              @for (c of h.breadcrumbs; track c.url; let last = $last) {
                @if (last) {<span aria-current="page">{{ c.label }}</span>} @else {<a [routerLink]="c.url">{{ c.label }}</a> /}
              }
            </nav>
          } @else if (h.eyebrow) {
            <span class="tag">{{ h.eyebrow }}</span>
          }
          <h1><app-headline [value]="h" /></h1>
          <p class="lead">{{ h.lead }}</p>
          @if (h.ctas?.length) {
            <div class="btn-row">@for (c of h.ctas; track c.label) {<app-cta-button [cta]="c" />}</div>
          }
          <ng-content />
        </div>
        @if (h.aside; as a) {
          @switch (a.type) {
            @case ('funnel') {
              <div appSpotlight appReveal class="card highlight">
                @if (a.eyebrow) {<span class="tag">{{ a.eyebrow }}</span>}
                @if (a.stats?.length) {
                  <div class="viz" style="margin-top: 8px">
                    @for (s of a.stats; track s.label) {<div><b>{{ s.value }}</b>{{ s.label }}</div>}
                  </div>
                }
                <app-funnel [steps]="a.steps" style="margin-top: 14px" />
                @if (a.note) {<p class="note">{{ a.note }} <app-sample-tag [label]="a.sample" /></p>}
              </div>
            }
            @case ('stats') {
              <div appSpotlight appReveal class="card highlight">
                @if (a.eyebrow) {<span class="tag">{{ a.eyebrow }}</span>}
                <div class="viz" style="margin-top: 8px">
                  @for (s of a.items; track s.label) {<div><b>{{ s.value }}{{ s.unit }}</b>{{ s.label }}</div>}
                </div>
                @if (a.note) {<p class="note">{{ a.note }} <app-sample-tag [label]="a.sample" /></p>}
              </div>
            }
            @case ('card') {
              <app-info-card appReveal [card]="a.card" />
            }
          }
        }
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .note { font-size: 13px; color: var(--dim); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHero {
  readonly hero = input.required<PageHeroModel>();
}
