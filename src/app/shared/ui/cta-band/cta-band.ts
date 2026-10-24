import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CtaBand as CtaBandModel } from '../../../core/models';
import { Reveal } from '../../directives/reveal';
import { CtaButton } from '../cta-button/cta-button';
import { Headline } from '../headline/headline';

/** Closing aurora call-to-action panel used at the end of most pages. */
@Component({
  selector: 'app-cta-band',
  imports: [Headline, CtaButton, Reveal],
  template: `
    @let b = band();
    <div class="cta">
      <div class="wrap">
        <div class="cta-box" appReveal>
          @if (b.eyebrow) {<span class="tag">{{ b.eyebrow }}</span>}
          <h2><app-headline [value]="b" /></h2>
          <p>{{ b.text }}</p>
          <div class="btn-row">@for (c of b.ctas; track c.label) {<app-cta-button [cta]="c" />}</div>
        </div>
      </div>
    </div>
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBand {
  readonly band = input.required<CtaBandModel>();
}
