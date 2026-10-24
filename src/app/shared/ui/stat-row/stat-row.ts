import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Stat } from '../../../core/models';
import { Reveal } from '../../directives/reveal';
import { SampleTag } from '../sample-tag/sample-tag';

/** Row of glass stat tiles. Values are real text (good for SEO), not count-up animations. */
@Component({
  selector: 'app-stat-row',
  imports: [Reveal, SampleTag],
  template: `
    <div class="stat-row">
      @for (s of stats(); track s.label; let i = $index) {
        <div class="stat" appReveal [revealDelay]="i">
          <strong [class.grad-text]="s.highlight">{{ s.value }}@if (s.unit) {<small class="unit">{{ s.unit }}</small>}</strong>
          <span>{{ s.label }} <app-sample-tag [label]="s.sample" /></span>
        </div>
      }
    </div>
  `,
  styles: `.unit { font-size: 0.45em; color: var(--muted); }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatRow {
  readonly stats = input.required<Stat[]>();
}
