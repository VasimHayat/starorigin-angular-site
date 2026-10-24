import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Job } from '../../core/models';
import { JobsService, OfficesService, PagesService, ProofService, ServiceCatalogService, TeamService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { ChecklistCard } from '../../shared/ui/checklist/checklist-card';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Funnel } from '../../shared/ui/funnel/funnel';
import { Globe } from '../../shared/ui/globe/globe';
import { Icon } from '../../shared/ui/icon/icon';
import { JobRow } from '../../shared/ui/job-row/job-row';
import { MemberCard } from '../../shared/ui/member-card/member-card';
import { OfficeCard } from '../../shared/ui/office-card/office-card';
import { ProcessSteps } from '../../shared/ui/process/process-steps';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { StatRow } from '../../shared/ui/stat-row/stat-row';
import { HOME_COPY } from './home.copy';

type Mode = 'hire' | 'job';

@Component({
  selector: 'app-home-page',
  imports: [
    FormsModule,
    RouterLink,
    Globe,
    Icon,
    StatRow,
    SectionHeading,
    Funnel,
    ProcessSteps,
    ChecklistCard,
    JobRow,
    MemberCard,
    OfficeCard,
    CtaBand,
    SampleTag,
    Reveal,
    Spotlight,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  private readonly router = inject(Router);
  protected readonly copy = HOME_COPY;

  protected readonly content = toSignal(inject(PagesService).home());
  protected readonly jobs = toSignal(inject(JobsService).list(), { initialValue: [] as Job[] });
  protected readonly testimonials = toSignal(inject(ProofService).testimonials(), { initialValue: [] });
  protected readonly team = toSignal(inject(TeamService).list(), { initialValue: [] });
  protected readonly offices = toSignal(inject(OfficesService).list(), { initialValue: [] });

  // Hero intent switcher
  protected readonly mode = signal<Mode>('hire');
  protected readonly query = signal('');
  protected readonly chips = computed(() => this.content()?.heroChips[this.mode()] ?? []);

  // Jobs preview (top 6, filtered by chip + search)
  protected readonly jobChip = signal('all');
  protected readonly jobQuery = signal('');
  protected readonly filteredJobs = computed(() => JobsService.filter(this.jobs(), { query: this.jobQuery(), chip: this.jobChip() }));
  protected readonly jobChips = [
    { value: 'all', label: 'All roles' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Consultant', label: 'Consultant' },
    { value: 'Manager', label: 'Manager' },
    { value: 'new', label: 'New this week' },
  ];

  protected readonly featuredTeam = computed(() => this.team().slice(0, 4));

  /** Bento: Executive Search + RPO are featured tiles; the rest are small tiles. */
  private readonly services = toSignal(inject(ServiceCatalogService).list(), { initialValue: [] });
  protected readonly smallServices = computed(() =>
    this.services().filter((s) => s.slug !== 'executive-search' && s.slug !== 'rpo'),
  );

  constructor() {
    const seo = inject(SeoService);
    seo.set(HOME_COPY.seo, '/');
    seo.setJsonLd(HOME_COPY.organizationLd, 'org');
  }

  protected submitIntent(): void {
    const q = this.query().trim();
    if (this.mode() === 'job') this.router.navigate(['/jobs'], { queryParams: q ? { q } : {} });
    else this.router.navigate(['/hire'], { queryParams: q ? { role: q } : {} });
  }

}
