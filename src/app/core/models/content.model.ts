import { Card, Cta, Faq, FunnelStep, Headline, Link, ProcessStep, SampleLabel, SectionHeading, Seo, Stat } from './common.model';

/* ---------------------------------------------------------------------------
 * Content blocks — a CMS-style, typed page body.
 * Pages are an ordered list of blocks rendered by <app-block-renderer>.
 * A headless CMS (Sanity/Payload/Strapi) can return exactly this shape.
 * ------------------------------------------------------------------------- */

interface BlockBase {
  /** Optional anchor id for in-page links (#process, #faq). */
  id?: string;
  heading?: SectionHeading;
  /** Tighter top padding when the block follows a related block. */
  tight?: boolean;
}

export interface CardsBlock extends BlockBase {
  type: 'cards';
  columns?: 2 | 3 | 4;
  items: Card[];
}

export interface ProcessBlock extends BlockBase {
  type: 'process';
  /** 'steps' = horizontal rail, 'timeline' = vertical timeline (split into two columns when long). */
  variant: 'steps' | 'timeline';
  items: ProcessStep[];
}

export interface ChecklistBlock extends BlockBase {
  type: 'checklist';
  /** Highlighted card with a check list, plus an optional side card. */
  badge?: string;
  title: string;
  sub?: string;
  items: string[];
  aside?: Card & { tagsTitle?: string };
}

export interface StatsBlock extends BlockBase {
  type: 'stats';
  items: Stat[];
}

export interface FaqBlock extends BlockBase {
  type: 'faq';
  items: Faq[];
}

export interface TableBlock extends BlockBase {
  type: 'table';
  columns: string[];
  rows: string[][];
  note?: string;
  sample?: SampleLabel;
}

export interface CompareBlock extends BlockBase {
  type: 'compare';
  them: { title: string; sub?: string; items: string[] };
  us: { badge?: string; title: string; sub?: string; items: string[] };
}

export interface TagsBlock extends BlockBase {
  type: 'tags';
  title?: string;
  text?: string;
  tags: string[];
}

export interface TabsBlock extends BlockBase {
  type: 'tabs';
  tabs: { label: string; blocks: ContentBlock[] }[];
}

export interface ProseBlock extends BlockBase {
  type: 'prose';
  /** Trusted, CMS-authored HTML (sanitised by Angular on render). */
  html: string;
}

export interface FunnelBlock extends BlockBase {
  type: 'funnel';
  title?: string;
  steps: FunnelStep[];
  note?: string;
  sample?: SampleLabel;
}

export interface LinksBlock extends BlockBase {
  type: 'links';
  /** Related pages shown as link cards. */
  items: Card[];
}

export type ContentBlock =
  | CardsBlock
  | ProcessBlock
  | ChecklistBlock
  | StatsBlock
  | FaqBlock
  | TableBlock
  | CompareBlock
  | TagsBlock
  | TabsBlock
  | ProseBlock
  | FunnelBlock
  | LinksBlock;

/* ---------------------------------------------------------------------------
 * Page hero + closing CTA band shared by every content page.
 * ------------------------------------------------------------------------- */

/** Optional visual on the right of a split hero. */
export type HeroAside =
  | { type: 'funnel'; eyebrow?: string; stats?: { value: string; label: string }[]; steps: FunnelStep[]; note?: string; sample?: SampleLabel }
  | { type: 'stats'; eyebrow?: string; items: Stat[]; note?: string; sample?: SampleLabel }
  | { type: 'card'; card: Card };

export interface PageHero extends Headline {
  eyebrow?: string;
  lead: string;
  breadcrumbs?: Link[];
  ctas?: Cta[];
  aside?: HeroAside;
  align?: 'left' | 'center';
}

export interface CtaBand extends Headline {
  eyebrow?: string;
  text: string;
  ctas: Cta[];
}

/** A generic content page delivered by the API (/pages/:slug, /services/:slug …). */
export interface ContentPage {
  slug: string;
  seo: Seo;
  hero: PageHero;
  blocks: ContentBlock[];
  cta?: CtaBand;
}
