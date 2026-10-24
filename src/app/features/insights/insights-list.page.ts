import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { ArticleSummary, InsightCategory } from '../../core/models';
import { NotifyService } from '../../core/notify/notify.service';
import { SeoService } from '../../core/seo/seo.service';
import { InsightsService, LeadsService, PagesService } from '../../core/services';
import { Reveal } from '../../shared/directives/reveal';
import { FormField } from '../../shared/forms/form-field';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PostCard } from '../../shared/ui/post-card/post-card';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageSkeleton } from '../../shared/ui/state/page-states';
import { ArticleSummaryExtras, InsightsPageContent } from './insights.types';

type Filter = 'all' | InsightCategory;

/** /insights — featured article, category filter, post grid, newsletter and CTA. */
@Component({
  selector: 'app-insights-list-page',
  imports: [
    RouterLink, DatePipe, ReactiveFormsModule, TabsModule, CheckboxModule, InputTextModule, SelectModule,
    PageHero, PostCard, SectionHeading, CtaBand, Icon, FormField, Reveal, PageSkeleton,
  ],
  templateUrl: './insights-list.page.html',
  styleUrl: './insights-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsightsListPage {
  private readonly pages = inject(PagesService);
  private readonly insights = inject(InsightsService);
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);
  private readonly seo = inject(SeoService);

  protected readonly page = toSignal(this.pages.getPage<InsightsPageContent>('insights'));
  protected readonly posts = toSignal(this.insights.list(), { initialValue: [] as ArticleSummaryExtras[] });

  protected readonly filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'Hiring Trends', label: 'Hiring Trends' },
    { value: 'Career Advice', label: 'Career Advice' },
    { value: 'Employers', label: 'Employers' },
  ];
  protected readonly filter = signal<Filter>('all');

  protected readonly featured = computed<ArticleSummaryExtras | undefined>(() =>
    this.posts().find((p) => p.featured && !p.comingSoon),
  );

  protected readonly visible = computed<ArticleSummary[]>(() => {
    const f = this.filter();
    return this.posts().filter((p) => f === 'all' || p.category === f);
  });

  protected readonly countLabel = computed(() => {
    const n = this.visible().length;
    const f = this.filter();
    return `${n} ${n === 1 ? 'insight' : 'insights'}${f === 'all' ? '' : ` in ${f}`}`;
  });

  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    interest: ['All of the above'],
    consent: [false, Validators.requiredTrue],
  });
  protected readonly sending = signal(false);

  constructor() {
    effect(() => {
      const p = this.page();
      if (p) this.seo.set(p.seo, '/insights');
    });
  }

  protected setFilter(value: string | number | undefined): void {
    if (this.filters.some((f) => f.value === value)) this.filter.set(value as Filter);
  }

  protected subscribe(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, interest } = this.form.getRawValue();
    this.sending.set(true);
    this.leads
      .subscribe({ email, topic: 'hiring-insights', keywords: interest })
      .pipe(finalize(() => this.sending.set(false)))
      .subscribe({
        next: () => {
          this.notify.success(this.page()?.newsletter.success ?? 'You’re subscribed.', 'Subscribed');
          this.form.reset();
        },
        error: () => this.notify.error(),
      });
  }
}
