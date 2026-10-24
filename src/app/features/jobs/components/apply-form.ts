import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { finalize } from 'rxjs';
import { Job } from '../../../core/models';
import { LeadsService } from '../../../core/services';
import { NotifyService } from '../../../core/notify/notify.service';
import { FileDrop, maxFileSize } from '../../../shared/forms/file-drop';
import { FormField } from '../../../shared/forms/form-field';
import { FormSuccess } from '../../../shared/forms/form-success';
import { Icon } from '../../../shared/ui/icon/icon';
import { EXPERIENCE_OPTIONS, NOTICE_OPTIONS } from '../jobs.types';

/** "Apply for this role" card: typed JobApplication form → LeadsService.applyForJob. */
@Component({
  selector: 'app-apply-form',
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, SelectModule, CheckboxModule, FormField, FileDrop, FormSuccess, Icon],
  template: `
    <div class="glass card">
      @if (done()) {
        <app-form-success
          title="Application received"
          text="Thanks — a recruiter will review your profile and get in touch if it's a match. Questions? Call +91 83810 84000."
        >
          <a routerLink="/jobs" class="btn btn-ghost btn-sm">More jobs</a>
        </app-form-success>
      } @else {
        <span class="tag">Apply</span>
        <h2 class="title">Apply for this role</h2>
        <form class="form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <app-form-field label="Applying for" for="aRole">
            <input pInputText id="aRole" [value]="job().title" readonly />
          </app-form-field>
          <app-form-field label="Full name" for="aName" required [control]="form.controls.name" [messages]="{ required: 'Please enter your name.' }">
            <input pInputText id="aName" formControlName="name" autocomplete="name" />
          </app-form-field>
          <app-form-field label="Email" for="aEmail" required [control]="form.controls.email" [messages]="{ required: 'Please enter a valid email.' }">
            <input pInputText id="aEmail" type="email" formControlName="email" autocomplete="email" />
          </app-form-field>
          <app-form-field label="Phone" for="aPhone" required [control]="form.controls.phone" [messages]="{ required: 'Please enter a valid phone number.', pattern: 'Please enter a valid phone number.' }">
            <input pInputText id="aPhone" type="tel" formControlName="phone" autocomplete="tel" placeholder="+91" />
          </app-form-field>
          <app-form-field label="Current location" for="aLoc" required [control]="form.controls.currentLocation" [messages]="{ required: 'Please enter your city.' }">
            <input pInputText id="aLoc" formControlName="currentLocation" autocomplete="address-level2" placeholder="City" />
          </app-form-field>
          <app-form-field label="Total experience" for="aExp" required [control]="form.controls.experience" [messages]="{ required: 'Please choose your experience.' }">
            <p-select inputId="aExp" formControlName="experience" [options]="experience" placeholder="Select" appendTo="body" />
          </app-form-field>
          <app-form-field label="Notice period" for="aNotice" required [control]="form.controls.noticePeriod" [messages]="{ required: 'Please choose your notice period.' }">
            <p-select inputId="aNotice" formControlName="noticePeriod" [options]="notice" placeholder="Select" appendTo="body" />
          </app-form-field>
          <app-form-field label="LinkedIn URL (optional)" for="aLi" [control]="form.controls.linkedinUrl" [messages]="{ pattern: 'Please enter a full URL (https://…).' }">
            <input pInputText id="aLi" type="url" formControlName="linkedinUrl" placeholder="https://linkedin.com/in/…" />
          </app-form-field>
          <app-form-field label="CV" required [control]="form.controls.cv" [messages]="{ required: 'Please attach your CV.' }">
            <app-file-drop formControlName="cv" label="Drop your CV" />
          </app-form-field>
          <app-form-field [control]="form.controls.consent" [messages]="{ required: 'Please give consent so we can process your application.' }">
            <div class="consent">
              <p-checkbox inputId="aConsent" formControlName="consent" [binary]="true" />
              <label for="aConsent">
                I agree that StarOrigin may process my details to assess me for this and similar roles, as described in the
                <a routerLink="/legal/candidate-data">candidate data notice</a>.
              </label>
            </div>
          </app-form-field>
          <button type="submit" class="btn btn-glow btn-block" [disabled]="sending()">
            {{ sending() ? 'Sending…' : 'Submit application' }} <app-icon name="arrow" />
          </button>
        </form>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .title { font-size: 24px; margin: 14px 0 20px; }
    .consent label { font-weight: 400; font-size: 13.5px; color: var(--muted); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyForm {
  readonly job = input.required<Job>();

  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);

  protected readonly experience = EXPERIENCE_OPTIONS;
  protected readonly notice = NOTICE_OPTIONS;
  protected readonly sending = signal(false);
  protected readonly done = signal(false);

  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s()-]{6,}$/)]],
    currentLocation: ['', Validators.required],
    experience: ['', Validators.required],
    noticePeriod: ['', Validators.required],
    linkedinUrl: ['', Validators.pattern(/^https?:\/\/\S+$/)],
    cv: this.fb.control<File | null>(null, [Validators.required, maxFileSize()]),
    consent: [false, Validators.requiredTrue],
  });

  constructor() {
    // Navigating between jobs reuses this component: start a fresh application.
    effect(() => {
      this.job();
      this.done.set(false);
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const j = this.job();
    this.sending.set(true);
    this.leads
      .applyForJob({ ...v, linkedinUrl: v.linkedinUrl || undefined, cv: v.cv as File, jobId: j.id, roleTitle: j.title })
      .pipe(finalize(() => this.sending.set(false)))
      .subscribe({
        next: () => {
          this.done.set(true);
          this.form.reset();
        },
        error: () => this.notify.error(),
      });
  }
}
