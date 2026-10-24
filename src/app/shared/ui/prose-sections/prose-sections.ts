import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArticleSection } from '../../../core/models';
import { RouterLinks } from '../../directives/router-links';

/**
 * Long-form CMS prose: optional intro HTML, then one `<h2 id>` + HTML body per section.
 * The `id`s feed `<app-toc>` scroll-spy. Internal links inside the trusted HTML are routed
 * client-side (RouterLinks) instead of reloading the page. Used by articles and legal pages.
 */
@Component({
  selector: 'app-prose-sections',
  hostDirectives: [RouterLinks],
  template: `
    <article class="prose">
      @if (intro()) {<div class="prose" [innerHTML]="intro()"></div>}
      @for (s of sections(); track s.id) {
        <h2 [id]="s.id">{{ s.heading }}</h2>
        <div class="prose" [innerHTML]="s.html"></div>
      }
    </article>
  `,
  styles: `
    :host { display: block; min-width: 0; }
    article > h2:first-child { margin-top: 0; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProseSections {
  readonly intro = input<string>();
  readonly sections = input.required<ArticleSection[]>();
}
