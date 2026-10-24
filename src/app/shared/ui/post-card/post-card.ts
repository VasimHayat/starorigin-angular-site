import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleSummary } from '../../../core/models';
import { SampleTag } from '../sample-tag/sample-tag';

/** Insight/article card with generated gradient thumbnail. "Coming soon" items render unlinked. */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink, DatePipe, SampleTag, NgTemplateOutlet],
  template: `
    @let a = article();
    <ng-template #body>
      <div class="thumb" [style.--c1]="a.thumb.c1" [style.--c2]="a.thumb.c2"><span>{{ a.category }}</span></div>
      <h3>{{ a.title }} <app-sample-tag [label]="a.sample" /></h3>
      @if (showExcerpt()) {<p>{{ a.excerpt }}</p>}
      <span class="pm">
        @if (a.comingSoon) {Coming soon} @else {{{ a.readMinutes }} min read · {{ a.publishedAt | date: 'd MMM y' }}}
      </span>
    </ng-template>
    @if (a.comingSoon) {
      <div class="post"><ng-container *ngTemplateOutlet="body" /></div>
    } @else {
      <a class="post" [routerLink]="['/insights', a.slug]"><ng-container *ngTemplateOutlet="body" /></a>
    }
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  readonly article = input.required<ArticleSummary>();
  readonly showExcerpt = input(true);
}
