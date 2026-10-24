import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { finalize } from 'rxjs';
import { LeadsService, PagesService } from '../../core/services';
import { NotifyService } from '../../core/notify/notify.service';
import { SeoService } from '../../core/seo/seo.service';
import { Reveal } from '../../shared/directives/reveal';
import { FileDrop, maxFileSize } from '../../shared/forms/file-drop';
import { FormField } from '../../shared/forms/form-field';
import { FormSuccess } from '../../shared/forms/form-success';
import { RadioCards } from '../../shared/forms/radio-cards';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { ChecklistCard } from '../../shared/ui/checklist/checklist-card';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PageSkeleton } from '../../shared/ui/state/page-states';
import { CV_EXPERIENCE, CV_FUNCTIONS, CV_LOCATIONS, CV_NOTICE, RELOCATION_OPTIONS, SubmitCvPageContent } from './candidates.types';

/** General CV registration: two-step p-stepper form → LeadsService.submitCv. */
@Component({
  selector: 'app-submit-cv-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    StepperModule,
    InputTextModule,
    SelectModule,
    MultiSelectModule,
    CheckboxModule,
    FormField,
    FileDrop,
    RadioCards,
    FormSuccess,
    PageHero,
    PageSkeleton,
    BlockRenderer,
    ChecklistCard,
    CtaBand,
    Icon,
    Reveal,
  ],
  templateUrl: './submit-cv.page.html',
  styleUrl: './submit-cv.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SubmitCvPage {
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);

  protected readonly page = toSignal(inject(PagesService).getPage<SubmitCvPageContent>('submit-cv'));

  protected readonly experience = CV_EXPERIENCE;
  protected readonly notice = CV_NOTICE;
  protected readonly functionOptions = CV_FUNCTIONS;
  protected readonly locationOptions = CV_LOCATIONS;
  protected readonly relocation = RELOCATION_OPTIONS;

  protected readonly step = signal(1);
  protected readonly sending = signal(false);
  protected readonly done = signal(false);

  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly form = this.fb.group({
    about: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s()-]{6,}$/)]],
      currentLocation: ['', Validators.required],
      currentRole: ['', Validators.required],
      experience: ['', Validators.required],
      linkedinUrl: ['', Validators.pattern(/^https?:\/\/(www\.)?linkedin\.com\/.+/i)],
    }),
    prefs: this.fb.group({
      functions: this.fb.control<string[]>([]),
      preferredLocations: this.fb.control<string[]>([]),
      expectedRole: ['', Validators.required],
      noticePeriod: ['', Validators.required],
      relocation: ['', Validators.required],
      cv: this.fb.control<File | null>(null, [Validators.required, maxFileSize()]),
      consent: [false, Validators.requiredTrue],
    }),
  });
  protected readonly about = this.form.controls.about.controls;
  protected readonly prefs = this.form.controls.prefs.controls;

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const p = this.page();
      if (p) seo.set(p.seo, '/submit-cv');
    });
  }

  /** Step changes from the stepper header or the Back/Continue buttons; step 2 needs a valid step 1. */
  protected goTo(target: number | undefined): void {
    if (target === 2 && this.form.controls.about.invalid) {
      this.form.controls.about.markAllAsTouched();
      this.step.set(1);
      return;
    }
    this.step.set(target ?? 1);
  }

  protected submit(): void {
    if (this.form.controls.about.invalid) {
      this.goTo(2);
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { about, prefs } = this.form.getRawValue();
    this.sending.set(true);
    this.leads
      .submitCv({ ...about, ...prefs, linkedinUrl: about.linkedinUrl || undefined, cv: prefs.cv as File })
      .pipe(finalize(() => this.sending.set(false)))
      .subscribe({
        next: () => {
          this.done.set(true);
          this.form.reset();
          this.step.set(1);
        },
        error: () => this.notify.error(),
      });
  }
}
