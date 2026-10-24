import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading as SectionHeadingModel } from '../../../core/models';
import { Headline } from '../headline/headline';
import { Icon } from '../icon/icon';
import { SampleTag } from '../sample-tag/sample-tag';

/** Section eyebrow + h2 (with gradient phrase) + lead, optionally with a link on the right. */
@Component({
  selector: 'app-section-heading',
  imports: [Headline, SampleTag, RouterLink, Icon, NgTemplateOutlet],
  template: `
    @let h = heading();
    @if (h.link) {
      <div class="sec-row">
        <ng-container [ngTemplateOutlet]="head" />
        <a [routerLink]="h.link.url" class="link">{{ h.link.label }} <app-icon name="arrow" /></a>
      </div>
    } @else {
      <ng-container [ngTemplateOutlet]="head" />
    }
    <ng-template #head>
      <div class="sec-head" [class.center]="h.align === 'center'">
        @if (h.eyebrow) {<span class="tag">{{ h.eyebrow }}</span>}
        <h2><app-headline [value]="h" /></h2>
        @if (h.lead || h.sample) {<p>{{ h.lead }} <app-sample-tag [label]="h.sample" /></p>}
      </div>
    </ng-template>
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly heading = input.required<SectionHeadingModel>();
}
