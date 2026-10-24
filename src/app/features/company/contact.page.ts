import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';
import { CONTACT } from '../../core/layout/navigation';
import { ContactIntent, ContactMessage, Office } from '../../core/models';
import { NotifyService } from '../../core/notify/notify.service';
import { LeadsService, OfficesService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { FormField } from '../../shared/forms/form-field';
import { FormSuccess } from '../../shared/forms/form-success';
import { RadioCards } from '../../shared/forms/radio-cards';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { FaqAccordion } from '../../shared/ui/faq-accordion/faq-accordion';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { PageError, PageSkeleton } from '../../shared/ui/state/page-states';
import { ClockService } from '../../shared/util/clock.service';
import { loadCompanyPage } from './company-page';
import { ContactPageContent } from './company.types';

/** Contact: intent selector + message form, direct channels, compact office list and an audience-tabbed FAQ. */
@Component({
  selector: 'app-contact-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    TextareaModule,
    CheckboxModule,
    TabsModule,
    PageHero,
    CtaBand,
    SectionHeading,
    FaqAccordion,
    Icon,
    FormField,
    FormSuccess,
    RadioCards,
    PageSkeleton,
    PageError,
  ],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage {
  protected readonly vm = loadCompanyPage<ContactPageContent>('contact');
  protected readonly contact = CONTACT;
  protected readonly clock = inject(ClockService);
  protected readonly offices = toSignal(inject(OfficesService).list(), { initialValue: [] as Office[] });
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);
  private readonly router = inject(Router);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    intent: ['' as ContactIntent | '', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s()-]{6,}$/)]],
    company: [''],
    message: ['', Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly faqTab = signal<'employers' | 'candidates'>('employers');

  private readonly intent = toSignal(this.form.controls.intent.valueChanges, { initialValue: '' as ContactIntent | '' });
  protected readonly hint = computed(() => {
    const p = this.vm.page();
    const i = this.intent();
    return p && i ? (p.intentHints[i] ?? null) : null;
  });

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const p = this.vm.page();
      if (!p) return;
      const strip = (html: string) => html.replace(/<[^>]+>/g, '');
      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [...p.faq.employers, ...p.faq.candidates].map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) },
        })),
      });
    });
  }

  protected timeIn(o: Office): string {
    return this.clock.timeIn(o.timezone, this.clock.now());
  }

  protected isOpen(o: Office): boolean {
    return this.clock.isOpen(o.timezone, o.hours.open, o.hours.close, this.clock.now());
  }


  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload: ContactMessage = {
      ...v,
      intent: v.intent as ContactIntent,
      company: v.company || undefined,
    };
    this.submitting.set(true);
    this.leads
      .sendContactMessage(payload)
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
