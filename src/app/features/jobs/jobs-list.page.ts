import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { finalize } from 'rxjs';
import { JobsService, LeadsService, PagesService } from '../../core/services';
import { NotifyService } from '../../core/notify/notify.service';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { FormField } from '../../shared/forms/form-field';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { JobRow } from '../../shared/ui/job-row/job-row';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PageSkeleton } from '../../shared/ui/state/page-states';
import { ALERT_FUNCTIONS, FUNCTION_FACETS, LOCATION_FACETS, QUICK_CHIPS, TYPE_FACETS } from './jobs.types';

const sameList = (a: readonly string[], b: readonly string[]) => a.length === b.length && a.every((v, i) => v === b[i]);

/** Job board: search + facets + quick chips, all signal-driven and mirrored to the query string. */
@Component({
  selector: 'app-jobs-list-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    SelectModule,
    FormField,
    PageHero,
    PageSkeleton,
    BlockRenderer,
    CtaBand,
    JobRow,
    Icon,
    Reveal,
  ],
  templateUrl: './jobs-list.page.html',
  styleUrl: './jobs-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class JobsListPage {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);
  private readonly seo = inject(SeoService);

  protected readonly page = toSignal(inject(PagesService).getPage('jobs'));
  protected readonly jobs = toSignal(inject(JobsService).list());

  protected readonly typeFacets = TYPE_FACETS;
  protected readonly locationFacets = LOCATION_FACETS;
  protected readonly functionFacets = FUNCTION_FACETS;
  protected readonly chips = QUICK_CHIPS;
  protected readonly alertFunctions = ALERT_FUNCTIONS;

  // Filter state (source of truth), synced both ways with ?q=&type=&loc=&fn=&chip=
  protected readonly query = signal('');
  protected readonly types = signal<string[]>([], { equal: sameList });
  protected readonly locations = signal<string[]>([], { equal: sameList });
  protected readonly functions = signal<string[]>([], { equal: sameList });
  protected readonly chip = signal('all');

  protected readonly results = computed(() =>
    JobsService.filter(this.jobs() ?? [], {
      query: this.query(),
      types: this.types(),
      locations: this.locations(),
      functions: this.functions(),
      chip: this.chip(),
    }),
  );
  protected readonly countLabel = computed(() => {
    const all = this.jobs();
    return all ? `${this.results().length} of ${all.length} roles` : 'Loading roles…';
  });
  protected readonly hasFilters = computed(
    () => !!this.query() || !!this.types().length || !!this.locations().length || !!this.functions().length || this.chip() !== 'all',
  );

  private readonly searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');
  private readonly focusRequested = signal(false);

  // Job alerts mini-form
  protected readonly alertForm = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    fn: ['All functions'],
  });
  protected readonly alertSending = signal(false);

  constructor() {
    // URL → state (initial load, back/forward, homepage ?q= links while already on /jobs)
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((p) => {
      this.query.set(p.get('q') ?? '');
      this.types.set(p.getAll('type'));
      this.locations.set(p.getAll('loc'));
      this.functions.set(p.getAll('fn'));
      this.chip.set(p.get('chip') ?? 'all');
      if (p.get('focus')) this.focusRequested.set(true);
    });

    // State → URL (replaceUrl so typing doesn't flood history)
    effect(() => {
      const queryParams = this.toParams();
      untracked(() => {
        const target = this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString();
        if (target !== this.router.url) this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
      });
    });

    // ?focus=1 → focus the search box once it is rendered
    effect(() => {
      const box = this.searchBox()?.nativeElement;
      if (!box || !this.focusRequested()) return;
      untracked(() => this.focusRequested.set(false));
      setTimeout(() => box.focus(), 150);
    });

    effect(() => {
      const p = this.page();
      if (p) this.seo.set(p.seo, '/jobs');
    });
  }

  private toParams(): Params {
    const q = this.query().trim();
    return {
      q: q || null,
      type: this.types().length ? this.types() : null,
      loc: this.locations().length ? this.locations() : null,
      fn: this.functions().length ? this.functions() : null,
      chip: this.chip() !== 'all' ? this.chip() : null,
    };
  }

  protected onSearch(e: Event): void {
    this.query.set((e.target as HTMLInputElement).value);
  }

  protected toggle(list: WritableSignal<string[]>, value: string, checked: boolean): void {
    list.update((cur) => (checked ? [...cur.filter((v) => v !== value), value] : cur.filter((v) => v !== value)));
  }

  protected clearAll(): void {
    this.query.set('');
    this.types.set([]);
    this.locations.set([]);
    this.functions.set([]);
    this.chip.set('all');
  }

  protected submitAlert(): void {
    if (this.alertForm.invalid) {
      this.alertForm.markAllAsTouched();
      return;
    }
    const { email, fn } = this.alertForm.getRawValue();
    this.alertSending.set(true);
    this.leads
      .subscribe({ email, topic: 'job-alerts', keywords: fn === 'All functions' ? undefined : fn })
      .pipe(finalize(() => this.alertSending.set(false)))
      .subscribe({
        next: () => {
          this.notify.success("Done — we'll email you when matching roles go live.", 'Alert created');
          this.alertForm.reset();
        },
        error: () => this.notify.error(),
      });
  }
}
