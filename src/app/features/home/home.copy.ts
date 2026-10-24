import { CtaBand, ProcessStep, SectionHeading, Seo } from '../../core/models';

/**
 * Homepage marketing copy. Data that changes often (stats, chips, logos, jobs, team, offices,
 * testimonials) comes from the API; stable headline copy lives here with the page.
 */
export const HOME_COPY = {
  seo: {
    title: 'StarOrigin — Recruitment & Staffing across India, UAE & USA',
    description:
      'StarOrigin connects ambitious companies with proven people — from CXO search to volume hiring — across India, the UAE and the US.',
  } satisfies Seo,

  organizationLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StarOrigin',
    url: 'https://starorigin.in',
    logo: 'https://starorigin.in/wp-content/uploads/2022/03/logo-small.webp',
    email: 'hello@starorigin.in',
    telephone: '+91-8381084000',
    sameAs: [
      'https://www.linkedin.com/company/starorigin-business-solutions/',
      'https://www.facebook.com/starorigin.in',
      'https://www.instagram.com/staroriginbs.in/',
    ],
  },

  hero: {
    status: 'Hiring now',
    regions: 'India · UAE · USA',
    title: "Talent for what's",
    highlight: 'next.',
    lead: 'From CXO search to scale-up hiring, StarOrigin blends a deep talent network with human judgement to put proven people in your team — faster.',
    modes: {
      hire: { tab: "I'm hiring", placeholder: 'e.g. 5 Oracle FLEXCUBE consultants in Bangalore', button: 'Get a plan' },
      job: { tab: "I'm job hunting", placeholder: 'Job title, skill or city', button: 'Find roles' },
    },
    hud: [
      { icon: 'users', title: 'Shortlist ready', text: '6 vetted · 72h', tone: 'teal' },
      { icon: 'check', title: 'Offer accepted', text: 'Flexcube PM · Bangalore', tone: 'lime' },
      { icon: 'lock', title: 'Confidential CXO search', text: 'In progress · Dubai', tone: 'violet' },
    ],
  },

  services: {
    eyebrow: 'For employers',
    title: 'Every way you hire,',
    highlight: 'one partner.',
    lead: 'Leadership search, scale-up teams and flexible talent — under a single point of accountability.',
    link: { label: 'All services', url: '/services' },
  } satisfies SectionHeading,

  processHeading: { eyebrow: 'How it works', title: 'Brief to first day,', highlight: 'in four moves.', align: 'center' } satisfies SectionHeading,
  process: [
    { title: 'Understand', text: 'Goals, culture and the competencies the role truly needs.', meta: '// Day 0–1' },
    { title: 'Source', text: 'Market mapping, our 8,000+ network and targeted headhunting.', meta: '// Day 1–3' },
    { title: 'Assess', text: 'Structured interviews, skill checks and verification.', meta: '// Day 3–7' },
    { title: 'Deliver', text: 'Interviews, offer negotiation and onboarding follow-through.', meta: '// Week 2+' },
  ] satisfies ProcessStep[],

  why: {
    statement: { before: 'Outsource your HR to', highlight: 'humans,', after: 'not software.' },
    them: {
      title: 'Job boards & software-only hiring',
      sub: 'Keyword matching at scale.',
      items: [
        'Hundreds of unfiltered CVs to review',
        'No read on culture, motivation or fit',
        'Passive top talent never applies',
        'You handle negotiation and drop-offs',
      ],
    },
    us: {
      badge: 'StarOrigin',
      title: 'A dedicated practice head',
      sub: 'Human judgement, backed by data.',
      items: [
        'A short, vetted shortlist — not a pile',
        'Every candidate interviewed for fit and intent',
        'Direct headhunting reaches passive leaders',
        'We manage offers, counter-offers and joining',
      ],
    },
  },

  jobsHeading: {
    eyebrow: 'For candidates',
    title: 'Find your next move.',
    lead: 'Live roles with leading employers. Filter instantly, apply in under a minute.',
    link: { label: 'All jobs', url: '/jobs' },
  } satisfies SectionHeading,

  outcomesHeading: {
    eyebrow: 'Outcomes',
    title: 'Results, not résumés.',
    lead: 'What clients see when the right people arrive.',
    sample: 'Sample — replace with approved quotes',
    link: { label: 'Case studies', url: '/case-studies' },
  } satisfies SectionHeading,

  teamHeading: { eyebrow: 'The people', title: 'Humans behind every hire.', link: { label: 'Meet the team', url: '/team' } } satisfies SectionHeading,

  officesHeading: {
    eyebrow: 'Global network',
    title: 'Always on,',
    highlight: 'across time zones.',
    link: { label: 'All offices', url: '/offices' },
  } satisfies SectionHeading,

  cta: {
    eyebrow: 'Start a search',
    title: 'Build the team',
    highlight: "you'll need next.",
    text: 'Tell us what you’re hiring for. A practice head replies within one business day with a tailored plan.',
    ctas: [
      { label: 'Book a consultation', url: '/hire', variant: 'glow' },
      { label: '+91 83810 84000', url: 'tel:+918381084000', variant: 'ghost' },
    ],
  } satisfies CtaBand,
};
