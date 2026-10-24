import { ContentBlock, ContentPage, Cta, Faq, Link, SampleLabel, SectionHeading } from '../../core/models';

/* Feature-local extensions of ContentPage for the company pages (about, team, offices, careers, contact). */

/** Split teaser/feature that pairs a team member photo with copy. */
export interface LeadershipCopy {
  eyebrow: string;
  /** Headline before the member name, e.g. "Led by". */
  title?: string;
  text: string;
  ctas?: Cta[];
}

export interface AboutPageContent extends ContentPage {
  leadership: LeadershipCopy;
}

export interface TeamPageContent extends ContentPage {
  leadership: LeadershipCopy;
  teamHeading: SectionHeading;
  joinUs: { icon: string; title: string; text: string; link: Link };
}

export interface OfficesPageContent extends ContentPage {
  hoursNote: { text: string; sample?: SampleLabel };
  detailsHeading: SectionHeading;
  /** Region tag per office id, e.g. { nagpur: "India · HQ" }. */
  officeTags: Partial<Record<string, string>>;
}

export interface InternalRole {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  experience: string;
  /** Short monogram shown in the logo tile. */
  logo: string;
  sample?: SampleLabel;
}

export interface CareersPageContent extends ContentPage {
  heroNote: { text: string; link: Link };
  culture: { heading: SectionHeading; link: Link; items: { title: string; text: string }[] };
  roles: { heading: SectionHeading; items: InternalRole[]; footText: string; generalLabel: string };
  /** Blocks rendered after the open roles (hiring process). */
  blocksAfter: ContentBlock[];
  apply: { heading: SectionHeading; successTitle: string; successText: string };
}

export interface ContactPageContent extends ContentPage {
  intents: { value: string; label: string; description: string }[];
  intentHints: Partial<Record<string, { text: string; link: Link }>>;
  successTitle: string;
  successText: string;
  faq: { heading: SectionHeading; employers: Faq[]; candidates: Faq[] };
}

