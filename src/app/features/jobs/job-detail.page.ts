import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { APP_ENV } from '../../core/config/app-env.token';
import { Job } from '../../core/models';
import { JobsService } from '../../core/services';
import { NotifyService } from '../../core/notify/notify.service';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Icon } from '../../shared/ui/icon/icon';
import { JobRow } from '../../shared/ui/job-row/job-row';
import { ProcessSteps } from '../../shared/ui/process/process-steps';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { LOADING, toLoadable } from '../../shared/util/loadable';
import { ApplyForm } from './components/apply-form';
import { postedLabel } from './jobs.types';

const HIRING_PROCESS = [
  { title: 'Application review', text: 'A recruiter reviews your CV against the requirements above.' },
  { title: 'Recruiter screening call', text: 'A short call on your experience, expectations and notice period — and your questions about the role.' },
  { title: 'Client interviews', text: 'Usually technical and managerial rounds. We brief you before each one and share feedback after.' },
  { title: 'Offer & joining', text: 'We support offer discussions, background verification and your first weeks in the role.' },
];

/** One job: GET /jobs/:id → hero, description, sticky apply form, share card and similar roles. */
@Component({
  selector: 'app-job-detail-page',
  imports: [RouterLink, Icon, JobRow, ProcessSteps, SampleTag, PageSkeleton, PageError, Reveal, ApplyForm],
  templateUrl: './job-detail.page.html',
  styleUrl: './job-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class JobDetailPage {
  /** Bound from the :id route param. */
  readonly id = input.required<string>();

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly notify = inject(NotifyService);
  private readonly env = inject(APP_ENV);

  protected readonly process = HIRING_PROCESS;

  protected readonly state = toSignal(
    toObservable(this.id).pipe(switchMap((id) => toLoadable(this.jobsService.getById(id)))),
    { initialValue: LOADING },
  );
  protected readonly job = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });
  protected readonly notFound = computed(() => {
    const s = this.state();
    return s.status === 'error' && s.notFound;
  });

  private readonly all = toSignal(this.jobsService.list(), { initialValue: [] as Job[] });
  protected readonly similar = computed(() => {
    const j = this.job();
    if (!j) return [];
    const others = this.all().filter((x) => x.id !== j.id);
    const same = others.filter((x) => x.function === j.function);
    return (same.length ? same : others).slice(0, 3);
  });

  protected readonly posted = computed(() => {
    const j = this.job();
    return j ? postedLabel(j) : '';
  });
  protected readonly shareUrl = computed(() => `${this.env.siteUrl}/jobs/${this.id()}`);
  protected readonly linkedInHref = computed(
    () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl())}`,
  );
  protected readonly whatsAppHref = computed(() => {
    const j = this.job();
    return `https://wa.me/?text=${encodeURIComponent(`${j?.title ?? 'Job'} — ${this.shareUrl()}`)}`;
  });

  constructor() {
    inject(DestroyRef).onDestroy(() => this.seo.setJsonLd(null));
    effect(() => {
      const j = this.job();
      if (!j) return;
      this.seo.set({ title: `${j.title} — ${j.location} | Jobs`, description: j.summary }, `/jobs/${j.id}`);
      this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: j.title,
        description: j.summary,
        datePosted: j.postedAt,
        employmentType: j.type === 'Contract' ? 'CONTRACTOR' : 'FULL_TIME',
        hiringOrganization: { '@type': 'Organization', name: 'StarOrigin', sameAs: this.env.siteUrl },
        jobLocation: j.location.split(' · ').map((city) => ({
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressLocality: city.split(',')[0].trim() },
        })),
      });
    });
  }

  protected async copyLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.shareUrl());
      this.notify.success('Link copied to your clipboard.', 'Copied');
    } catch {
      this.notify.error('Could not copy the link — please copy it from the address bar.', 'Not copied');
    }
  }
}
