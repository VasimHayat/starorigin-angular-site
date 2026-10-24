import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceSummary } from '../../../core/models';
import { Reveal } from '../../../shared/directives/reveal';
import { Spotlight } from '../../../shared/directives/spotlight';
import { Icon } from '../../../shared/ui/icon/icon';
import { FeaturedServiceTile } from '../services.types';

/** Bento grid of every service: featured tiles (xl / l) first, then one small tile per remaining service. */
@Component({
  selector: 'app-service-bento',
  imports: [RouterLink, Icon, Reveal, Spotlight],
  template: `
    <div class="bento">
      @for (t of featuredTiles(); track t.s.slug) {
        <a appSpotlight appReveal class="card" [class]="'card b-' + t.f.size" [routerLink]="['/services', t.s.slug]">
          <span class="ic"><app-icon [name]="t.s.icon" /></span>
          <h3>{{ t.s.name }}</h3>
          <p>{{ t.f.text ?? t.s.summary }}</p>
          @if (t.f.tags?.length) {
            <div class="mini-tags">@for (tag of t.f.tags; track tag) {<span>{{ tag }}</span>}</div>
          }
          @if (t.f.viz?.length) {
            <div class="viz">@for (v of t.f.viz; track v.label) {<div><b>{{ v.value }}</b>{{ v.label }}</div>}</div>
          } @else {
            <span class="link push">{{ t.f.linkLabel ?? 'Explore' }} <app-icon name="arrow" /></span>
          }
        </a>
      }
      @for (s of others(); track s.slug; let i = $index) {
        <a appSpotlight appReveal [revealDelay]="i" class="card b-m" [routerLink]="['/services', s.slug]">
          <span class="ic"><app-icon [name]="s.icon" /></span>
          <h3>{{ s.name }}</h3>
          <p class="grow">{{ s.summary }}</p>
          <span class="link">Explore <app-icon name="arrow" /></span>
        </a>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .push { margin-top: auto; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceBento {
  readonly services = input.required<ServiceSummary[]>();
  readonly featured = input<Record<string, FeaturedServiceTile>>({});

  protected readonly featuredTiles = computed(() => {
    const f = this.featured();
    return this.services()
      .filter((s) => f[s.slug])
      .map((s) => ({ s, f: f[s.slug] }))
      .sort((a, b) => (a.f.size === 'xl' ? -1 : 0) - (b.f.size === 'xl' ? -1 : 0));
  });

  protected readonly others = computed(() => this.services().filter((s) => !this.featured()[s.slug]));
}
