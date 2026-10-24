import { Card, ContentPage, Link, SectionHeading, Stat } from '../../core/models';
import { RadioCardOption } from '../../shared/forms/radio-cards';

/** /pages/submit-cv — a ContentPage plus the "why register" aside. */
export interface SubmitCvPageContent extends ContentPage {
  why: { badge: string; title: string; sub: string; items: string[] };
}

/** One guide tile on /career-resources. */
export interface GuideCard extends Card {
  points: string[];
  highlight?: boolean;
}

/** /pages/career-resources — a ContentPage plus the bespoke sections. */
export interface CareerResourcesContent extends ContentPage {
  featured: { thumbLabel: string; eyebrow: string; title: string; text: string; link: Link };
  guidesHeading: SectionHeading;
  guides: GuideCard[];
  factsHeading: SectionHeading;
  facts: Stat[];
  factsNote: string;
  checklist: SectionHeading & { items: string[] };
}

export const CV_EXPERIENCE = ['Fresher', '0–2 years', '2–4 years', '4–7 years', '7–10 years', '10–15 years', '15+ years'];
export const CV_NOTICE = ['Immediate', '15 days', '30 days', '60 days', '90 days'];

export const CV_FUNCTIONS = [
  { value: 'Banking Tech', label: 'Banking Tech' },
  { value: 'IT & Software', label: 'IT & Software' },
  { value: 'HR', label: 'HR' },
  { value: 'Finance & Accounts', label: 'Finance & Accounts' },
  { value: 'Sales & Marketing', label: 'Sales & Marketing' },
  { value: 'Operations', label: 'Operations' },
  { value: 'Leadership', label: 'Leadership / CXO' },
];

export const CV_LOCATIONS = [
  { value: 'Nagpur', label: 'Nagpur' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Dubai', label: 'Dubai / UAE' },
  { value: 'USA', label: 'USA' },
];

export const RELOCATION_OPTIONS: RadioCardOption[] = [
  { value: 'yes', label: 'Yes', description: 'Anywhere for the right role' },
  { value: 'india', label: 'Within India', description: 'Domestic moves only' },
  { value: 'no', label: 'No', description: 'Current city only' },
];
