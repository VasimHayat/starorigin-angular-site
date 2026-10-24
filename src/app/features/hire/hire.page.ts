import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { TextareaModule } from 'primeng/textarea';
import { CardsBlock, ContentBlock, HireBrief, ProcessBlock } from '../../core/models';
import { CONTACT } from '../../core/layout/navigation';
import { NotifyService } from '../../core/notify/notify.service';
import { LeadsService, PagesService, ServiceCatalogService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { Spotlight } from '../../shared/directives/spotlight';
import { FormField } from '../../shared/forms/form-field';
import { FormSuccess } from '../../shared/forms/form-success';
import { RadioCardOption, RadioCards } from '../../shared/forms/radio-cards';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { ProcessSteps } from '../../shared/ui/process/process-steps';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { LOADING, toLoadable } from '../../shared/util/loadable';

const NOT_SURE = 'not-sure';

/** Employer hiring brief: 3-step form (Role → Details → Contact) with a sticky "what happens next" aside. */
@Component({
  selector: 'app-hire-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    StepperModule,
    SelectModule,
    InputTextModule,
    TextareaModule,
    CheckboxModule,
    FormField,
    FormSuccess,
    RadioCards,
    PageHero,
    BlockRenderer,
    ProcessSteps,
    Icon,
    Reveal,
    Spotlight,
    PageSkeleton,
    PageError,
  ],
  templateUrl: './hire.page.html',
  styleUrl: './hire.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HirePage {
  /** ?service= query param (service slug). */
  readonly service = input<string>();
  /** ?role= query param (role title). */
  readonly role = input<string>();

  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly contact = CONTACT;

  protected readonly state = toSignal(toLoadable(inject(PagesService).getPage('hire')), { initialValue: LOADING });
  protected readonly page = computed(() => {
    const s = this.state();
    return s.status === 'success' ? s.data : null;
  });
  private readonly blocks = computed<ContentBlock[]>(() => this.page()?.blocks ?? []);
  protected readonly nextSteps = computed(() => this.blocks().find((b): b is ProcessBlock => b.type === 'process' && b.id === 'next'));
  protected readonly trust = computed(() => this.blocks().find((b): b is CardsBlock => b.type === 'cards' && b.id === 'trust'));
  protected readonly reassurance = computed(() => this.blocks().filter((b) => b.id === 'reassurance'));

  private readonly services = toSignal(inject(ServiceCatalogService).list(), { initialValue: [] });
  protected readonly serviceOptions = computed(() => [
    ...this.services().map((s) => ({ value: s.slug, label: s.name })),
    { value: NOT_SURE, label: 'Not sure yet — advise me' },
  ]);

  protected readonly seniorityOptions = [
    'Entry / associate',
    'Specialist / consultant',
    'Manager',
    'Senior manager / head of function',
    'Director / VP',
    'CXO / board',
  ];
  protected readonly hiresOptions = ['1', '2–5', '6–20', '21–100', '100+'];
  protected readonly timelineOptions: RadioCardOption[] = [
    { value: 'asap', label: 'ASAP', description: 'Urgent, already open' },
    { value: '1-month', label: 'Within 1 month', description: 'Start shortlisting now' },
    { value: '1-3-months', label: '1–3 months', description: 'Planned hiring' },
    { value: 'exploring', label: 'Exploring', description: 'Market view first' },
  ];

  protected readonly form = this.fb.group({
    role: this.fb.group({
      service: ['', Validators.required],
      roleTitle: ['', Validators.required],
      seniority: ['', Validators.required],
      hires: ['', Validators.required],
    }),
    details: this.fb.group({
      locations: ['', Validators.required],
      timeline: ['', Validators.required],
      budget: [''],
      description: [''],
    }),
    contact: this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+()\d\s-]{7,}$/)]],
      consent: [false, Validators.requiredTrue],
    }),
  });
  protected readonly c = {
    role: this.form.controls.role.controls,
    details: this.form.controls.details.controls,
    contact: this.form.controls.contact.controls,
  };

  /** Active stepper panel (1–3). */
  protected readonly step = signal(1);
  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);

  constructor() {
    this.seo.set(
      {
        title: 'Hire talent — share a hiring brief',
        description: 'Tell us who you need in three short steps. A StarOrigin practice head replies within one business day.',
      },
      '/hire',
    );
    effect(() => {
      const p = this.page();
      if (p) this.seo.set(p.seo, '/hire');
    });

    // Prefill from ?service= and ?role= (e.g. links from service pages and job search).
    effect(() => {
      const service = this.service();
      const role = this.role();
      untracked(() => {
        if (service) this.c.role.service.setValue(service);
        if (role) this.c.role.roleTitle.setValue(role);
      });
    });
  }

  /** Advance only when the current step's group is valid; otherwise reveal its errors. */
  protected next(group: FormGroup, to: number): void {
    if (group.invalid) {
      group.markAllAsTouched();
      return;
    }
    this.step.set(to);
  }

  protected back(to: number): void {
    this.step.set(to);
  }

  protected submit(): void {
    if (this.sending()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      // Jump back to the first step with a problem.
      if (this.form.controls.role.invalid) this.step.set(1);
      else if (this.form.controls.details.invalid) this.step.set(2);
      return;
    }
    const { role, details, contact } = this.form.getRawValue();
    const brief: HireBrief = {
      ...role,
      ...details,
      ...contact,
      budget: details.budget || undefined,
      description: details.description || undefined,
    };
    this.sending.set(true);
    this.leads
      .submitHireBrief(brief)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.sending.set(false);
          this.submitted.set(true);
        },
        error: () => {
          this.sending.set(false);
          this.notify.error();
        },
      });
  }
}
