import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Inline SVG icon from the shared sprite. Decorative by default (aria-hidden);
 * pass `label` to make it meaningful to screen readers.
 *   <app-icon name="arrow" />   <app-icon name="in" label="LinkedIn" />
 */
@Component({
  selector: 'app-icon',
  template: `<svg [attr.aria-hidden]="label() ? null : 'true'" [attr.aria-label]="label() || null" [attr.role]="label() ? 'img' : null" focusable="false"><use [attr.href]="href()" /></svg>`,
  // Host is layout-transparent so design-system rules like `.btn svg { width: 18px }` size the icon.
  // :where() keeps the fallback size at zero specificity.
  styles: `
    :host { display: contents; }
    :where(svg) { width: 1.15em; height: 1.15em; flex: none; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<string>();
  readonly label = input<string>();
  protected readonly href = computed(() => `#i-${this.name()}`);
}
