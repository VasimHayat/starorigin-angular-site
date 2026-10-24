import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FunnelStep } from '../../../core/models';
import { Reveal } from '../../directives/reveal';

/** Horizontal funnel bars (e.g. Sourced → Hired). Bars animate in when scrolled into view. */
@Component({
  selector: 'app-funnel',
  hostDirectives: [Reveal],
  template: `
    <div class="pipeline">
      @for (s of steps(); track s.label) {
        <div class="pipe">
          {{ s.label }}<span class="bar"><i [style.--w]="s.pct + '%'"></i></span><em>{{ s.value }}</em>
        </div>
      }
    </div>
  `,
  styles: `:host { display: block; margin-top: auto; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Funnel {
  readonly steps = input.required<FunnelStep[]>();
}
