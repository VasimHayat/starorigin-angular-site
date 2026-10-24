/* Payloads for every form on the site. Each maps 1:1 to a POST endpoint in LeadsService. */

export interface HireBrief {
  service: string;
  roleTitle: string;
  seniority: string;
  hires: string;
  locations: string;
  timeline: string;
  budget?: string;
  description?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface JobApplication {
  jobId: string;
  roleTitle: string;
  name: string;
  email: string;
  phone: string;
  currentLocation: string;
  experience: string;
  noticePeriod: string;
  linkedinUrl?: string;
  cv: File;
  consent: boolean;
}

export interface CvSubmission {
  name: string;
  email: string;
  phone: string;
  currentLocation: string;
  currentRole?: string;
  experience: string;
  linkedinUrl?: string;
  functions: string[];
  preferredLocations: string[];
  expectedRole?: string;
  noticePeriod: string;
  relocation: string;
  cv: File;
  consent: boolean;
}

export type ContactIntent = 'hire' | 'job' | 'partnership' | 'other';

export interface ContactMessage {
  intent: ContactIntent;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  consent: boolean;
}

export interface CareerApplication {
  role: string;
  name: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
  message?: string;
  consent: boolean;
}

export interface NewsletterSignup {
  email: string;
  topic?: 'hiring-insights' | 'job-alerts';
  keywords?: string;
}
