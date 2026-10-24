import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ProcessStep } from '../../../core/models';
import { Reveal } from '../../directives/reveal';
import { SampleTag } from '../sample-tag/sample-tag';

/**
 * Process visual. variant="steps" → horizontal rail with numbered tiles;
 * variant="timeline" → vertical timeline, split into two columns when there are more than 5 steps.
 */
@Component({
  selector: 'app-process-steps',
  imports: [Reveal, SampleTag],
  template: `
    @if (variant() === 'steps') {
      <div class="steps" appReveal>
        <div class="rail"><i></i></div>
        @for (s of steps(); track s.title; let i = $index) {
          <div class="step">
            <div class="n">{{ s.key ?? pad(i + 1) }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }} <app-sample-tag [label]="s.sample" /></p>
            @if (s.meta) {<div class="meta">{{ s.meta }}</div>}
          </div>
        }
      </div>
    } @else {
      <div class="split" style="align-items: start">
        @for (col of columns(); track $index) {
          <div class="vtl">
            @for (s of col; track s.title; let i = $index) {
              <div class="vi" appReveal [revealDelay]="i">
                <span class="k">{{ s.key }}</span>
                <h3>{{ s.title }} <app-sample-tag [label]="s.sample" /></h3>
                <p>{{ s.text }}</p>
                @if (s.meta) {<div class="meta">{{ s.meta }}</div>}
              </div>
            }
          </div>
        }
      </div>
    }
  `,
  styles: `
    :host { display: block; }
    .vtl .meta { margin-top: 8px; font: 500 12px/1 var(--mono); color: var(--dim); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSteps {
  readonly steps = input.required<ProcessStep[]>();
  readonly variant = input<'steps' | 'timeline'>('steps');

  protected readonly columns = computed(() => {
    const s = this.steps().map((step, i) => ({ ...step, key: step.key ?? this.pad(i + 1) }));
    if (s.length <= 5) return [s];
    const half = Math.ceil(s.length / 2);
    return [s.slice(0, half), s.slice(half)];
  });

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
