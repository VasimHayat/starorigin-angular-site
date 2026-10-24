import { IconName, Link } from '../models';

/** Static site navigation. Service links are added at runtime from ServiceCatalogService. */

export interface NavItem extends Link {
  icon?: IconName;
  note?: string;
}

export interface NavMenu {
  label: string;
  url: string;
  /** Matches router "active" state for this top-level item. */
  activeMatch: string[];
  items?: NavItem[];
  /** Employers menu: prepend the service catalogue. */
  includeServices?: boolean;
  twoColumns?: boolean;
}

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Employers',
    url: '/services',
    activeMatch: ['/services', '/industries', '/case-studies', '/hire'],
    includeServices: true,
    twoColumns: true,
    items: [
      { label: 'Industries', url: '/industries', icon: 'target', note: 'Sectors we specialise in' },
      { label: 'Case studies', url: '/case-studies', icon: 'chart', note: 'Outcomes for clients' },
    ],
  },
  {
    label: 'Candidates',
    url: '/jobs',
    activeMatch: ['/jobs', '/submit-cv', '/career-resources'],
    items: [
      { label: 'Browse jobs', url: '/jobs', icon: 'search', note: 'Live roles, filter instantly' },
      { label: 'Submit your CV', url: '/submit-cv', icon: 'upload', note: 'Get matched to new openings' },
      { label: 'Career resources', url: '/career-resources', icon: 'book', note: 'Interview & CV guides' },
    ],
  },
  {
    label: 'About',
    url: '/about',
    activeMatch: ['/about', '/team', '/offices', '/careers'],
    items: [
      { label: 'Our story', url: '/about', icon: 'heart', note: 'Mission, values, milestones' },
      { label: 'Team', url: '/team', icon: 'users', note: 'The people behind every hire' },
      { label: 'Offices', url: '/offices', icon: 'globe', note: 'India · UAE · USA' },
      { label: 'Careers at StarOrigin', url: '/careers', icon: 'zap', note: 'Join our team' },
    ],
  },
  { label: 'Insights', url: '/insights', activeMatch: ['/insights'] },
  { label: 'Contact', url: '/contact', activeMatch: ['/contact'] },
];

export const FOOTER_NAV: { title: string; links: Link[] }[] = [
  {
    title: 'Candidates',
    links: [
      { label: 'Browse jobs', url: '/jobs' },
      { label: 'Submit your CV', url: '/submit-cv' },
      { label: 'Career resources', url: '/career-resources' },
      { label: 'FAQ', url: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', url: '/about' },
      { label: 'Team', url: '/team' },
      { label: 'Offices', url: '/offices' },
      { label: 'Careers', url: '/careers' },
      { label: 'Insights', url: '/insights' },
      { label: 'Contact', url: '/contact' },
    ],
  },
];

export const LEGAL_NAV: Link[] = [
  { label: 'Privacy', url: '/legal/privacy' },
  { label: 'Terms', url: '/legal/terms' },
  { label: 'Cookies', url: '/legal/cookies' },
  { label: 'Candidate data notice', url: '/legal/candidate-data' },
];

export const CONTACT = {
  phone: '+91 83810 84000',
  tel: '+918381084000',
  usPhone: '+1 (467) 420 8880',
  usTel: '+14674208880',
  email: 'hello@starorigin.in',
  whatsapp: 'https://wa.me/918381084000',
  linkedin: 'https://www.linkedin.com/company/starorigin-business-solutions/',
  facebook: 'https://www.facebook.com/starorigin.in',
  instagram: 'https://www.instagram.com/staroriginbs.in/',
  logo: 'https://starorigin.in/wp-content/uploads/2022/03/logo-small.webp',
} as const;
