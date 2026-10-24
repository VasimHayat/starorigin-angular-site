import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { SeoService } from '../../core/seo/seo.service';
import { LegalService } from '../../core/services';
import { Headline } from '../../shared/ui/headline/headline';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { Toc, TocItem } from '../../shared/ui/toc/toc';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { ProseSections } from '../../shared/ui/prose-sections/prose-sections';
import { LegalDocument } from '../insights/insights.types';

const LEGAL_PAGES = [
  { slug: 'privacy', label: 'Privacy policy' },
  { slug: 'terms', label: 'Terms of use' },
  { slug: 'cookies', label: 'Cookie policy' },
  { slug: 'candidate-data', label: 'Candidate data notice' },
] as const;

const DEFAULT_NOTICE = '<strong>Draft template</strong> — to be reviewed and approved by legal counsel before publishing.';

/** /legal/:slug — privacy, terms, cookies and candidate-data notices from GET /legal/:slug. */
@Component({
  selector: 'app-legal-page',
  imports: [RouterLink, DatePipe, Headline, Toc, ProseSections, PageSkeleton, PageError],
  template: `
    @switch (state().status) {
      @case ('loading') { <app-page-skeleton /> }
      @case ('error') { <app-page-error [notFound]="notFound()" /> }
      @case ('success') {
        @if (doc(); as d) {
          <section class="page-hero compact">
            <div class="aurora soft" aria-hidden="true"><i></i><i></i><i></i></div>
            <div class="wrap">
              <nav class="crumbs" aria-label="Breadcrumb">
                <a routerLink="/">Home</a> / <span>Legal</span> / <span aria-current="page">{{ d.title }}</span>
              </nav>
              <h1><app-headline [value]="d.headline ?? { title: d.title }" /></h1>
              <p class="lead">Last updated: <time [attr.datetime]="d.updatedAt">{{ d.updatedAt | date: 'd MMMM y' }}</time></p>
              <div class="prose legal-note">
                <p class="callout" role="note" [innerHTML]="d.draftNotice ?? defaultNotice"></p>
              </div>
            </div>
          </section>

          <section class="flush-top">
            <div class="wrap layout-aside">
              <app-prose-sections [intro]="d.intro" [sections]="d.sections" />
              <aside class="sticky tools" aria-label="Policy navigation">
                <app-toc [items]="toc()" />
                <nav class="glass toc" aria-label="Legal pages">
                  <h4>Legal</h4>
                  <ol>
                    @for (l of legalPages; track l.slug) {
                      <li>
                        <a [routerLink]="['/legal', l.slug]" [class.active]="l.slug === d.slug"
                          [attr.aria-current]="l.slug === d.slug ? 'page' : null">{{ l.label }}</a>
                      </li>
                    }
                  </ol>
                </nav>
              </aside>
            </div>
          </section>
        }
      }
    }
  `,
  styles: `
    :host { display: block; }
    .page-hero.compact { padding-bottom: 40px; }
    .page-hero.compact h1 { font-size: clamp(38px, 5vw, 64px); }
    .legal-note { max-width: 720px; margin-top: 24px; }
    .tools { display: grid; gap: 16px; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LegalPageComponent {
  /** Bound from the :slug route param. */
  readonly slug = input.required<string>();

  private readonly legal = inject(LegalService);
  private readonly seo = inject(SeoService);

  protected readonly legalPages = LEGAL_PAGES;
  protected readonly defaultNotice = DEFAULT_NOTICE;

  protected readonly state = toSignal(
    toObservable(this.slug).pipe(switchMap((slug) => toLoadable(this.legal.getBySlug(slug)))),
    { initialValue: LOADING },
  );

  protected readonly doc = computed(() => {
    const s = this.state();
    return s.status === 'success' ? (s.data as LegalDocument) : null;
  });

  protected readonly notFound = computed(() => {
    const s = this.state();
    return s.status === 'error' && s.notFound;
  });

  protected readonly toc = computed<TocItem[]>(
    () => this.doc()?.sections.map((s) => ({ id: s.id, label: s.tocLabel ?? s.heading.replace(/^\d+\.\s*/, '') })) ?? [],
  );

  constructor() {
    effect(() => {
      if (this.state().status === 'error') {
        this.seo.set({ title: 'Page not found', description: 'This legal page has moved or never existed.' }, `/legal/${this.slug()}`);
        this.seo.setJsonLd(null);
      }
    });
    effect(() => {
      const d = this.doc();
      if (!d) return;
      this.seo.set(d.seo ?? { title: d.title, description: `${d.title} for StarOrigin.` }, `/legal/${d.slug}`);
      this.seo.setJsonLd(null);
    });
  }
}
