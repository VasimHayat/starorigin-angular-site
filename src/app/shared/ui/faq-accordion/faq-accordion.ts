import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Faq } from '../../../core/models';
import { RouterLinks } from '../../directives/router-links';

/**
 * FAQ list on PrimeNG Accordion (keyboard + ARIA handled by PrimeNG). First item open by default.
 * Answers are CMS HTML; internal links in them route client-side (RouterLinks).
 */
@Component({
  selector: 'app-faq-accordion',
  imports: [AccordionModule],
  hostDirectives: [RouterLinks],
  template: `
    <p-accordion [value]="openFirst() ? 0 : null">
      @for (f of items(); track f.question; let i = $index) {
        <p-accordion-panel [value]="i">
          <p-accordion-header>{{ f.question }}</p-accordion-header>
          <p-accordion-content><p [innerHTML]="f.answer"></p></p-accordion-content>
        </p-accordion-panel>
      }
    </p-accordion>
  `,
  styles: `
    :host { display: block; }
    p ::ng-deep a { color: var(--teal); text-decoration: underline; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAccordion {
  readonly items = input.required<Faq[]>();
  readonly openFirst = input(true);
}
