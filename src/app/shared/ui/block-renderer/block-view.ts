import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ContentBlock } from '../../../core/models';
import { Reveal } from '../../directives/reveal';
import { RouterLinks } from '../../directives/router-links';
import { Spotlight } from '../../directives/spotlight';
import { ChecklistCard } from '../checklist/checklist-card';
import { FaqAccordion } from '../faq-accordion/faq-accordion';
import { Funnel } from '../funnel/funnel';
import { InfoCard } from '../info-card/info-card';
import { ProcessSteps } from '../process/process-steps';
import { SampleTag } from '../sample-tag/sample-tag';
import { StatRow } from '../stat-row/stat-row';

/**
 * Body of one content block. Adding a block type = extend the ContentBlock union + add one @case.
 * Tabs render their nested blocks recursively with this same component.
 */
@Component({
  selector: 'app-block-view',
  imports: [TabsModule, InfoCard, ProcessSteps, ChecklistCard, StatRow, FaqAccordion, Funnel, SampleTag, Reveal, Spotlight, RouterLinks],
  templateUrl: './block-view.html',
  styles: `
    :host { display: block; }
    .table-card { padding: 8px 18px; overflow-x: auto; }
    .table-note { margin-top: 12px; font-size: 13px; color: var(--dim); }
    .nested { display: grid; gap: 24px; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockView {
  readonly block = input.required<ContentBlock>();
}
