/** Name of an icon in the shared registry (core/icons/icon-registry.ts). */
export type IconName = string;

/**
 * Marks placeholder content that still needs real data from StarOrigin.
 * The value is the label shown in the UI badge, e.g. "sample", "confirm", "illustrative".
 */
export type SampleLabel = string;

export interface Link {
  label: string;
  /** Internal route ('/jobs') or absolute URL. */
  url: string;
  external?: boolean;
  /** Query params for internal routes, e.g. { service: 'rpo' } → /hire?service=rpo. */
  queryParams?: Record<string, string>;
}

export type CtaVariant = 'glow' | 'primary' | 'ghost';

export interface Cta extends Link {
  variant?: CtaVariant;
  icon?: IconName;
}

/** Headline with an optional gradient-highlighted phrase: "{title} <highlight> {titleAfter}". */
export interface Headline {
  title: string;
  highlight?: string;
  titleAfter?: string;
}

export interface SectionHeading extends Headline {
  eyebrow?: string;
  lead?: string;
  align?: 'left' | 'center';
  sample?: SampleLabel;
  /** Optional link shown on the right of the heading row. */
  link?: Link;
}

export interface Stat {
  value: string;
  /** Smaller unit after the value, e.g. "h" in "72h". */
  unit?: string;
  label: string;
  highlight?: boolean;
  sample?: SampleLabel;
}

export interface Card {
  icon?: IconName;
  eyebrow?: string;
  title: string;
  text?: string;
  tags?: string[];
  link?: Link;
  sample?: SampleLabel;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  /** Step number/key or a time label such as "Week 1". */
  key?: string;
  title: string;
  text: string;
  meta?: string;
  sample?: SampleLabel;
}

export interface FunnelStep {
  label: string;
  value: number;
  /** Bar width 0–100. */
  pct: number;
}

export interface Seo {
  title: string;
  description: string;
}

export interface SubmissionReceipt {
  id: string;
  status: 'received';
  receivedAt: string;
}
