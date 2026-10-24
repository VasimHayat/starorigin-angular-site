import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/models';
import { Spotlight } from '../../directives/spotlight';
import { Icon } from '../icon/icon';
import { SampleTag } from '../sample-tag/sample-tag';

/** Glass card with icon, title, text, tags and optional link (whole card clickable when linked). */
@Component({
  selector: 'app-info-card',
  imports: [RouterLink, Icon, SampleTag, Spotlight, NgTemplateOutlet],
  template: `
    @let c = card();
    <ng-template #body>
      @if (c.icon) {<span class="ic"><app-icon [name]="c.icon" /></span>}
      @if (c.eyebrow) {<span class="tag">{{ c.eyebrow }}</span>}
      <h3>{{ c.title }} <app-sample-tag [label]="c.sample" /></h3>
      @if (c.text) {<p class="grow">{{ c.text }}</p>}
      @if (c.tags?.length) {
        <div class="mini-tags">@for (t of c.tags; track t) {<span>{{ t }}</span>}</div>
      }
      @if (c.link) {<span class="link">{{ c.link.label }} <app-icon name="arrow" /></span>}
    </ng-template>
    @if (c.link && internal()) {
      <a appSpotlight class="card h-full" [routerLink]="c.link.url" [queryParams]="c.link.queryParams"><ng-container *ngTemplateOutlet="body" /></a>
    } @else if (c.link) {
      <a appSpotlight class="card h-full" [href]="c.link.url"><ng-container *ngTemplateOutlet="body" /></a>
    } @else {
      <div appSpotlight class="card h-full"><ng-container *ngTemplateOutlet="body" /></div>
    }
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCard {
  readonly card = input.required<Card>();
  protected readonly internal = computed(() => this.card().link?.url.startsWith('/') ?? false);
}
