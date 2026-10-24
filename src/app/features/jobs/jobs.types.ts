import { Job } from '../../core/models';

/** Facet options for the job board (value = what JobsService.filter matches on). */
export interface FacetOption {
  value: string;
  label: string;
}

export const TYPE_FACETS: FacetOption[] = [
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Contract', label: 'Contract' },
];

export const LOCATION_FACETS: FacetOption[] = [
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Nagpur', label: 'Nagpur' },
  { value: 'Dallas', label: 'Dallas, TX' },
];

export const FUNCTION_FACETS: FacetOption[] = [
  { value: 'Banking Tech', label: 'Banking Tech' },
  { value: 'IT & Software', label: 'IT & Software' },
  { value: 'HR', label: 'HR' },
];

export const QUICK_CHIPS: FacetOption[] = [
  { value: 'all', label: 'All roles' },
  { value: 'new', label: 'New this week' },
  { value: 'Consultant', label: 'Consultant' },
  { value: 'Manager', label: 'Manager' },
];

export const EXPERIENCE_OPTIONS = ['0–2 years', '2–4 years', '4–7 years', '7–10 years', '10+ years'];
export const NOTICE_OPTIONS = ['Immediate', '15 days', '30 days', '60 days', '90 days'];
export const ALERT_FUNCTIONS = ['All functions', 'Banking Tech', 'IT & Software', 'HR'];

/** "Today", "Yesterday", "3 days ago" … relative to now. */
export function postedLabel(job: Pick<Job, 'postedAt'>, now = Date.now()): string {
  const days = Math.max(0, Math.floor((now - new Date(job.postedAt + 'T00:00:00').getTime()) / 86_400_000));
  if (days === 0) return 'Posted today';
  if (days === 1) return 'Posted yesterday';
  if (days < 30) return `Posted ${days} days ago`;
  return 'Posted ' + new Date(job.postedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
