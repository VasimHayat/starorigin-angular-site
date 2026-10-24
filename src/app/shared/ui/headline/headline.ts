import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Headline as HeadlineModel } from '../../../core/models';

/** Renders "{title} <gradient>{highlight}</gradient> {titleAfter}" inside the host heading element. */
@Component({
  selector: 'app-headline',
  // Kept on one line so the text nodes carry exactly one space between parts.
  template: `@let v = value();{{ v.title }}@if (v.highlight) {{{ ' ' }}<span class="grad-text">{{ v.highlight }}</span>}@if (v.titleAfter) {{{ ' ' + v.titleAfter }}}`,
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Headline {
  readonly value = input.required<HeadlineModel>();
}
