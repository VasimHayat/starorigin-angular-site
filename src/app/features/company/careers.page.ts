import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CareerApplication } from '../../core/models';
import { NotifyService } from '../../core/notify/notify.service';
import { LeadsService } from '../../core/services';
import { Reveal } from '../../shared/directives/reveal';
import { FormField } from '../../shared/forms/form-field';
import { FormSuccess } from '../../shared/forms/form-success';
import { BlockRenderer } from '../../shared/ui/block-renderer/block-renderer';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SampleTag } from '../../shared/ui/sample-tag/sample-tag';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { loadCompanyPage } from './company-page';
import { CareersPageContent, InternalRole } from './company.types';

/** Careers at StarOrigin: perks, culture, internal roles (click to preselect), hiring process and application form. */
@Component({
  selector: 'app-careers-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    SelectModule,
    TextareaModule,
    CheckboxModule,
    PageHero,
    BlockRenderer,
    CtaBand,
    SectionHeading,
    SampleTag,
    Icon,
    FormField,
    FormSuccess,
    PageSkeleton,
    PageError,
    Reveal,
  ],
  templateUrl: './careers.page.html',
  styleUrl: './careers.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CareersPage {
  protected readonly vm = loadCompanyPage<CareersPageContent>('careers');
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);
  private readonly applySection = viewChild<ElementRef<HTMLElement>>('apply');

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s()-]{6,}$/)]],
    role: ['', Validators.required],
    linkedinUrl: ['', Validators.pattern(/^https?:\/\/\S+$/)],
    message: ['', Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);

  /** Select options: every internal role plus a general application. */
  protected readonly roleOptions = computed(() => {
    const p = this.vm.page();
    if (!p) return [];
    return [...p.roles.items.map((r) => this.roleLabel(r)), p.roles.generalLabel].map((label) => ({ label, value: label }));
  });

  protected roleLabel(r: InternalRole): string {
    return `${r.title} — ${r.location}`;
  }

  /** Preselect a role in the form and bring the form into view. */
  protected pickRole(label: string): void {
    this.form.controls.role.setValue(label);
    this.submitted.set(false);
    const el = this.applySection()?.nativeElement;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    el.querySelector<HTMLInputElement>('#cName')?.focus({ preventScroll: true });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload: CareerApplication = { ...v, linkedinUrl: v.linkedinUrl || undefined };
    this.submitting.set(true);
    this.leads
      .applyForCareer(payload)
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () => {
          this.submitted.set(true);
          this.form.reset();
        },
        error: () => this.notify.error(),
      });
  }
}
