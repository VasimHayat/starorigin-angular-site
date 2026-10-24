import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Visible marker for placeholder content that still needs real data (see content-checklist.md). */
@Component({
  selector: 'app-sample-tag',
  template: `@if (label()) {<span class="sample">{{ label() }}</span>}`,
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleTag {
  readonly label = input<string | undefined>();
}
