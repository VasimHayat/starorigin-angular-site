import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import {
  CareerApplication,
  ContactMessage,
  CvSubmission,
  HireBrief,
  JobApplication,
  NewsletterSignup,
  SubmissionReceipt,
} from '../models';

/**
 * Every form submission on the site. One method per endpoint; payloads with files
 * are sent as multipart/form-data, the rest as JSON.
 */
@Injectable({ providedIn: 'root' })
export class LeadsService {
  private readonly api = inject(ApiService);

  /** POST /leads/hire — employer hiring brief. */
  submitHireBrief(brief: HireBrief): Observable<SubmissionReceipt> {
    return this.api.post('leads/hire', brief);
  }

  /** POST /applications — application for a specific job (multipart, includes CV). */
  applyForJob(application: JobApplication): Observable<SubmissionReceipt> {
    return this.api.post('applications', this.api.toFormData(application));
  }

  /** POST /candidates — general CV registration (multipart). */
  submitCv(submission: CvSubmission): Observable<SubmissionReceipt> {
    return this.api.post('candidates', this.api.toFormData(submission));
  }

  /** POST /contact */
  sendContactMessage(message: ContactMessage): Observable<SubmissionReceipt> {
    return this.api.post('contact', message);
  }

  /** POST /careers/applications — applications to work at StarOrigin. */
  applyForCareer(application: CareerApplication): Observable<SubmissionReceipt> {
    return this.api.post('careers/applications', application);
  }

  /** POST /subscriptions — newsletter and job alerts. */
  subscribe(signup: NewsletterSignup): Observable<SubmissionReceipt> {
    return this.api.post('subscriptions', signup);
  }
}
