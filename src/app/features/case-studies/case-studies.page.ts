import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TabsModule } from 'primeng/tabs';
import { Testimonial } from '../../core/models';
import { PagesService, ProofService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { CASE_FILTERS, CaseFilter, CaseStudiesContent, CaseStudyItem } from './case-studies.types';

/** Case studies: hero + filterable case grid (GET /case-studies) + testimonials (GET /testimonials) + CTA. */
@Component({
  selector: 'app-case-studies-page',
  imports: [RouterLink, TabsModule, PageHero, CtaBand, SectionHeading, Icon, SampleTag, Reveal, Spotlight, PageSkeleton, PageError],
  templateUrl: './case-studies.page.html',
  styleUrl: './case-studies.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CaseStudiesPage {
  private readonly seo = inject(SeoService);
  private readonly proof = inject(ProofService);

  protected readonly state = toSignal(toLoadable(inject(PagesService).getPage<CaseStudiesContent>('case-studies')), {
    initialValue: LOADING,
  });
  protected readonly page = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });

  protected readonly cases = toSignal(this.proof.caseStudies().pipe(map((items) => items as CaseStudyItem[])), {
    initialValue: [] as CaseStudyItem[],
  });
  protected readonly testimonials = toSignal(this.proof.testimonials(), { initialValue: [] as Testimonial[] });

  protected readonly filters = CASE_FILTERS;
  protected readonly filter = signal<CaseFilter>('all');
  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? this.cases() : this.cases().filter((c) => c.categories.includes(f));
  });
  protected readonly countLabel = computed(() => {
    const n = this.visible().length;
    return `${n} case ${n === 1 ? 'study' : 'studies'}`;
  });

  constructor() {
    this.seo.set(
      { title: 'Case studies', description: 'How StarOrigin engagements unfold — the challenge, our approach and what changed.' },
      '/case-studies',
    );
    effect(() => {
      const p = this.page();
      if (p) this.seo.set(p.seo, '/case-studies');
    });
  }

  protected setFilter(v: string | number | undefined): void {
    if (typeof v === 'string') this.filter.set(v as CaseFilter);
  }
}
