import { CaseStudy, ContentPage, Link, SectionHeading } from '../../core/models';

/** case-studies.json items carry a KPI sub-line and a link to the related service page. */
export interface CaseStudyItem extends CaseStudy {
  kpiNote?: string;
  link?: Link;
}

/** pages/case-studies.json: hero + headings for the bespoke sections + CTA. */
export interface CaseStudiesContent extends ContentPage {
  casesHeading: SectionHeading;
  testimonialsHeading: SectionHeading;
}

export type CaseFilter = 'all' | 'executive-search' | 'bulk' | 'rpo' | 'banking-tech';

export const CASE_FILTERS: { value: CaseFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'executive-search', label: 'Executive Search' },
  { value: 'bulk', label: 'Bulk' },
  { value: 'rpo', label: 'RPO' },
  { value: 'banking-tech', label: 'Banking tech' },
];
