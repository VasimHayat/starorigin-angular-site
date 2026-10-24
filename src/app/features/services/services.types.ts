import { ContentPage, SectionHeading, ServiceSummary } from '../../core/models';

/** Extra presentation data for a featured bento tile (keyed by service slug). */
export interface FeaturedServiceTile {
  size: 'xl' | 'l';
  /** Longer card text than the catalogue summary. */
  text?: string;
  tags?: string[];
  viz?: { value: string; label: string }[];
  linkLabel?: string;
}

/** GET /pages/services: a ContentPage plus the bento section that lists the catalogue. */
export interface ServicesOverviewPage extends ContentPage {
  bento: {
    /** Number of leading blocks rendered before the bento. */
    after: number;
    id?: string;
    heading: SectionHeading;
    featured: Record<string, FeaturedServiceTile>;
  };
}

export interface ServicesOverviewData {
  page: ServicesOverviewPage;
  services: ServiceSummary[];
}
