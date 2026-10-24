import { Card, FunnelStep, IconName, SampleLabel, Stat } from './common.model';
import { ContentPage } from './content.model';

/* ----------------------------- Services ----------------------------- */

export interface ServiceSummary {
  slug: string;
  name: string;
  /** One-line value proposition used on cards and menus. */
  summary: string;
  /** Short menu description. */
  menuNote: string;
  icon: IconName;
  order: number;
}

/** Full service page = summary fields + a content page body. */
export interface ServiceOffering extends ServiceSummary, ContentPage {}

/* ------------------------------- Jobs ------------------------------- */

export type EmploymentType = 'Full-time' | 'Contract';

export interface Job {
  id: string;
  title: string;
  /** Client descriptor — real client names stay confidential. */
  client: string;
  location: string;
  type: EmploymentType;
  experience: string;
  level: string;
  function: string;
  isNew?: boolean;
  /** ISO date. */
  postedAt: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  sample?: SampleLabel;
}

export interface JobFilters {
  query: string;
  types: string[];
  locations: string[];
  functions: string[];
  chip: 'all' | 'new' | string;
}

/* ------------------------- People & places -------------------------- */

export interface Office {
  id: string;
  city: string;
  /** Short code shown on cards, e.g. "IN · HQ". */
  code: string;
  entity: string;
  timezone: string;
  address: string;
  phone: string;
  tel: string;
  email: string;
  focus?: string;
  isHq?: boolean;
  /** Opening hours in local time (24h "HH:mm"), Mon–Sat. */
  hours: { open: string; close: string; sample?: SampleLabel };
  sample?: SampleLabel;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  linkedinUrl?: string;
  focus?: string;
  featured?: boolean;
  sample?: SampleLabel;
}

/* ------------------------------ Proof ------------------------------- */

export interface Testimonial {
  id: string;
  kpi: string;
  kpiNote: string;
  quote: string;
  author: string;
  organisation: string;
  initials: string;
  sample?: SampleLabel;
}

export interface CaseStudy {
  id: string;
  kpi: string;
  title: string;
  industry: string;
  services: string[];
  /** Filter categories, e.g. ['executive-search', 'banking-tech']. */
  categories: string[];
  challenge: string;
  approach: string;
  result: string;
  sample?: SampleLabel;
}

export interface Industry {
  id: string;
  name: string;
  icon: IconName;
  text: string;
  roles: string[];
  highlight?: boolean;
  sample?: SampleLabel;
}

/* ----------------------------- Insights ----------------------------- */

export type InsightCategory = 'Hiring Trends' | 'Career Advice' | 'Employers';

export interface ArticleSummary {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  /** ISO date. */
  publishedAt: string;
  readMinutes: number;
  author: string;
  /** Two accent colours for the generated thumbnail. */
  thumb: { c1: string; c2: string };
  featured?: boolean;
  /** "Coming soon" placeholder (not linked). */
  comingSoon?: boolean;
  sample?: SampleLabel;
}

export interface ArticleSection {
  id: string;
  heading: string;
  /** Shorter label for the table of contents (defaults to heading). */
  tocLabel?: string;
  /** Trusted CMS HTML. */
  html: string;
}

export interface Article extends ArticleSummary {
  lead: string;
  sections: ArticleSection[];
  related: string[];
}

/* ------------------------------- Legal ------------------------------ */

export interface LegalPage {
  slug: string;
  title: string;
  /** ISO date. */
  updatedAt: string;
  intro: string;
  sections: ArticleSection[];
}

/* ---------------------------- Home page ----------------------------- */

export interface HomeContent {
  heroChips: { hire: string[]; job: string[] };
  clientLogos: { name: string; logoUrl?: string }[];
  clientLogosSample?: SampleLabel;
  stats: Stat[];
  featuredServices: {
    executiveSearch: Card & { viz: { value: string; label: string }[] };
    rpo: Card & { funnel: FunnelStep[] };
  };
}

export type { ContentPage };
