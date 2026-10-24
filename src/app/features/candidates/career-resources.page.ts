import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PagesService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageSkeleton } from '../../shared/ui/state/page-states';
import { CareerResourcesContent } from './candidates.types';

/** Candidate guides: featured article, guide tiles, recruiter facts and an interactive CV checklist. */
@Component({
  selector: 'app-career-resources-page',
  imports: [RouterLink, PageHero, PageSkeleton, SectionHeading, CtaBand, Icon, SampleTag, Reveal, Spotlight],
  templateUrl: './career-resources.page.html',
  styleUrl: './career-resources.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CareerResourcesPage {
  protected readonly page = toSignal(inject(PagesService).getPage<CareerResourcesContent>('career-resources'));

  /** Indexes of ticked checklist items. */
  protected readonly ticked = signal<ReadonlySet<number>>(new Set());
  protected readonly total = computed(() => this.page()?.checklist.items.length ?? 8);
  protected readonly doneCount = computed(() => this.ticked().size);
  protected readonly pct = computed(() => Math.round((this.doneCount() / this.total()) * 100));
  protected readonly allDone = computed(() => this.doneCount() === this.total());

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const p = this.page();
      if (p) seo.set(p.seo, '/career-resources');
    });
  }

  protected toggle(i: number, checked: boolean): void {
    this.ticked.update((s) => {
      const next = new Set(s);
      if (checked) next.add(i);
      else next.delete(i);
      return next;
    });
  }

  protected reset(): void {
    this.ticked.set(new Set());
  }
}
