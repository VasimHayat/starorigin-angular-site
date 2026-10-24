import { ContentPage, SectionHeading } from '../../core/models';

/** pages/industries.json: a ContentPage plus the heading for the industry grid (cards come from GET /industries). */
export interface IndustriesContent extends ContentPage {
  sectorsHeading: SectionHeading;
}
