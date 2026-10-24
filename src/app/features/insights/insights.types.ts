import { Article, ArticleSection, ArticleSummary, Card, ContentPage, CtaBand, Headline, LegalPage, SectionHeading, Seo } from '../../core/models';

/*
 * Optional, feature-local extensions of the core Article / LegalPage contracts.
 * The mock JSON (and a future CMS) may include these fields; every page falls back gracefully without them.
 */

/** Prose section (core ArticleSection, incl. optional tocLabel). */
export type ProseSection = ArticleSection;

export interface ArticleSummaryExtras extends ArticleSummary {
  /** Longer excerpt used on the featured card of the list page. */
  featuredExcerpt?: string;
}

export interface ArticleDocument extends Article {
  sections: ProseSection[];
  seo?: Seo;
  /** Hero headline split for the gradient phrase; defaults to the title. */
  headline?: Headline;
  /** Short label for the breadcrumb trail. */
  breadcrumb?: string;
  /** Desk/role shown under the author name. */
  authorRole?: string;
  authorLogo?: string;
  /** Trusted HTML shown before the first section (no heading, not in the TOC). */
  intro?: string;
  /** Promo card under the share box. */
  aside?: Card;
  cta?: CtaBand;
}

export interface LegalDocument extends LegalPage {
  sections: ProseSection[];
  seo?: Seo;
  headline?: Headline;
  /** Trusted HTML for the draft/review notice in the hero. */
  draftNotice?: string;
}

/** pages/insights.json — the list page copy. */
export interface InsightsPageContent extends ContentPage {
  browse: SectionHeading;
  newsletter: {
    eyebrow: string;
    title: string;
    text: string;
    interests: string[];
    success: string;
  };
}
