import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { APP_ENV } from '../../core/config/app-env.token';
import { ArticleSummary } from '../../core/models';
import { NotifyService } from '../../core/notify/notify.service';
import { SeoService } from '../../core/seo/seo.service';
import { InsightsService } from '../../core/services';
import { Spotlight } from '../../shared/directives/spotlight';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Headline } from '../../shared/ui/headline/headline';
import { Icon } from '../../shared/ui/icon/icon';
import { PostCard } from '../../shared/ui/post-card/post-card';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { Toc, TocItem } from '../../shared/ui/toc/toc';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { ProseSections } from '../../shared/ui/prose-sections/prose-sections';
import { ArticleDocument } from './insights.types';

/** /insights/:slug — long-form article with sticky TOC, share tools and related posts. */
@Component({
  selector: 'app-article-page',
  imports: [RouterLink, DatePipe, Headline, Icon, PostCard, CtaBand, Toc, Spotlight, ProseSections, PageSkeleton, PageError],
  templateUrl: './article.page.html',
  styleUrl: './article.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticlePage {
  /** Bound from the :slug route param. */
  readonly slug = input.required<string>();

  private readonly insights = inject(InsightsService);
  private readonly seo = inject(SeoService);
  private readonly notify = inject(NotifyService);
  private readonly env = inject(APP_ENV);

  protected readonly state = toSignal(
    toObservable(this.slug).pipe(switchMap((slug) => toLoadable(this.insights.getBySlug(slug)))),
    { initialValue: LOADING },
  );

  protected readonly article = computed(() => {
    const s = this.state();
    return s.status === 'success' ? (s.data as ArticleDocument) : null;
  });

  protected readonly notFound = computed(() => {
    const s = this.state();
    return s.status === 'error' && s.notFound;
  });

  private readonly all = toSignal(this.insights.list(), { initialValue: [] as ArticleSummary[] });

  protected readonly related = computed(() => {
    const a = this.article();
    if (!a) return [];
    const bySlug = new Map(this.all().map((p) => [p.slug, p]));
    return a.related.map((s) => bySlug.get(s)).filter((p): p is ArticleSummary => !!p).slice(0, 2);
  });

  protected readonly toc = computed<TocItem[]>(
    () => this.article()?.sections.map((s) => ({ id: s.id, label: s.tocLabel ?? s.heading })) ?? [],
  );

  protected readonly path = computed(() => `/insights/${this.slug()}`);
  protected readonly shareUrl = computed(() => this.env.siteUrl + this.path());
  protected readonly linkedInUrl = computed(
    () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl())}`,
  );

  constructor() {
    inject(DestroyRef).onDestroy(() => this.seo.setJsonLd(null));
    effect(() => {
      if (this.state().status === 'error') {
        this.seo.setJsonLd(null);
        this.seo.set({ title: 'Insight not found', description: 'This article has moved or never existed.' }, this.path());
      }
    });
    effect(() => {
      const a = this.article();
      if (!a) return;
      const description = a.seo?.description ?? a.excerpt;
      this.seo.set({ title: a.seo?.title ?? a.title, description }, this.path());
      this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        description,
        articleSection: a.category,
        datePublished: a.publishedAt,
        dateModified: a.publishedAt,
        author: { '@type': 'Organization', name: a.author },
        publisher: {
          '@type': 'Organization',
          name: 'StarOrigin',
          ...(a.authorLogo ? { logo: { '@type': 'ImageObject', url: a.authorLogo } } : {}),
        },
        mainEntityOfPage: this.shareUrl(),
      });
    });
  }

  protected async copyLink(): Promise<void> {
    const url = this.shareUrl();
    let copied = false;
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
    } catch {
      copied = this.legacyCopy(url);
    }
    if (copied) this.notify.success('The article link is on your clipboard.', 'Link copied');
    else this.notify.error(`Copy this link instead: ${url}`, 'Couldn’t copy');
  }

  /** Fallback for browsers/iframes where the async Clipboard API is blocked. */
  private legacyCopy(text: string): boolean {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.className = 'sr-only';
    document.body.appendChild(ta);
    ta.select();
    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      ta.remove();
    }
  }
}
