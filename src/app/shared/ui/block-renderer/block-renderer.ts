import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentBlock } from '../../../core/models';
import { SectionHeading } from '../section-heading/section-heading';
import { BlockView } from './block-view';

/**
 * Renders a page body from typed content blocks (see core/models/content.model.ts):
 * each block becomes a <section> with an optional heading, and <app-block-view> draws the body.
 */
@Component({
  selector: 'app-block-renderer',
  imports: [SectionHeading, BlockView],
  templateUrl: './block-renderer.html',
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockRenderer {
  readonly blocks = input.required<ContentBlock[]>();
}
