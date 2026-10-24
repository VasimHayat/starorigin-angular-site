import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/** Highlighted card with a check list. `muted` renders the "them" side of a comparison. */
@Component({
  selector: 'app-checklist-card',
  imports: [Icon],
  template: `
    <div class="cmp h-full" [class.highlight]="!muted()" [class.them]="muted()">
      @if (badge()) {<span class="badge">{{ badge() }}</span>}
      <h3>{{ title() }}</h3>
      @if (sub()) {<p class="sub">{{ sub() }}</p>}
      <ul class="checks" [class.off]="muted()">
        @for (item of items(); track item) {
          <li><app-icon [name]="muted() ? 'minus' : 'check'" />{{ item }}</li>
        }
      </ul>
    </div>
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistCard {
  readonly title = input.required<string>();
  readonly items = input.required<string[]>();
  readonly sub = input<string>();
  readonly badge = input<string>();
  readonly muted = input(false);
}
