import { Routes } from '@angular/router';

/**
 * Every page is lazy-loaded. Data-driven pages read their slug/id through component input binding
 * (withComponentInputBinding), e.g. ServiceDetailPage has `slug = input.required<string>()`.
 * Page titles/meta are set by SeoService from the loaded content; `title` here is the fallback.
 */
export const routes: Routes = [
  { path: '', title: 'StarOrigin — Recruitment & Staffing across India, UAE & USA', loadComponent: () => import('./features/home/home.page') },

  // Employers
  { path: 'services', title: 'Services', loadComponent: () => import('./features/services/services-list.page') },
  { path: 'services/:slug', loadComponent: () => import('./features/services/service-detail.page') },
  { path: 'industries', title: 'Industries', loadComponent: () => import('./features/industries/industries.page') },
  { path: 'case-studies', title: 'Case studies', loadComponent: () => import('./features/case-studies/case-studies.page') },
  { path: 'hire', title: 'Hire talent', loadComponent: () => import('./features/hire/hire.page') },

  // Candidates
  { path: 'jobs', title: 'Jobs', loadComponent: () => import('./features/jobs/jobs-list.page') },
  { path: 'jobs/:id', loadComponent: () => import('./features/jobs/job-detail.page') },
  { path: 'submit-cv', title: 'Submit your CV', loadComponent: () => import('./features/candidates/submit-cv.page') },
  { path: 'career-resources', title: 'Career resources', loadComponent: () => import('./features/candidates/career-resources.page') },

  // Company
  { path: 'about', title: 'About', loadComponent: () => import('./features/company/about.page') },
  { path: 'team', title: 'Team', loadComponent: () => import('./features/company/team.page') },
  { path: 'offices', title: 'Offices', loadComponent: () => import('./features/company/offices.page') },
  { path: 'careers', title: 'Careers', loadComponent: () => import('./features/company/careers.page') },
  { path: 'contact', title: 'Contact', loadComponent: () => import('./features/company/contact.page') },

  // Content
  { path: 'insights', title: 'Insights', loadComponent: () => import('./features/insights/insights-list.page') },
  { path: 'insights/:slug', loadComponent: () => import('./features/insights/article.page') },
  { path: 'legal/:slug', loadComponent: () => import('./features/legal/legal.page') },

  { path: '**', title: 'Page not found | StarOrigin', loadComponent: () => import('./features/not-found/not-found.page') },
];
