import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { AbstractControl } from '@angular/forms';
import { EMPTY, switchMap } from 'rxjs';

/**
 * Label + projected control + hint + validation message.
 * The error shows once the control is touched (or the form was submitted and marked all touched).
 *   <app-form-field label="Work email" [control]="form.controls.email" for="email" required>
 *     <input pInputText id="email" formControlName="email" />
 *   </app-form-field>
 */
@Component({
  selector: 'app-form-field',
  template: `
    <div class="field" [class.invalid]="showError()">
      @if (label()) {
        <label [attr.for]="for() || null">{{ label() }}@if (required()) {<span class="req"> *</span>}</label>
      }
      <ng-content />
      @if (hint() && !showError()) {<span class="hint">{{ hint() }}</span>}
      @if (showError()) {<span class="err" role="alert">{{ message() }}</span>}
    </div>
  `,
  styles: `
    :host { display: block; }
    .field.invalid .err { display: block; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormField {
  readonly label = input<string>();
  readonly for = input<string>();
  readonly hint = input<string>();
  readonly required = input(false, { transform: (v: boolean | '') => v === '' || v });
  readonly control = input<AbstractControl | null>(null);
  /** Custom messages per validator key; falls back to sensible defaults. */
  readonly messages = input<Record<string, string>>({});

  private readonly tick = signal(0);

  constructor() {
    // Re-evaluate on any control event: value, status, touched (incl. markAllAsTouched), pristine.
    toObservable(this.control)
      .pipe(
        switchMap((c) => (c ? c.events : EMPTY)),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.tick.update((n) => n + 1));
  }

  protected readonly showError = computed(() => {
    this.tick();
    const c = this.control();
    return !!c && c.invalid && (c.touched || c.dirty);
  });

  protected readonly message = computed(() => {
    this.tick();
    const errors = this.control()?.errors ?? {};
    const key = Object.keys(errors)[0];
    const custom = this.messages();
    if (key && custom[key]) return custom[key];
    switch (key) {
      case 'required':
        return 'This field is required.';
      case 'requiredTrue':
        return 'Please confirm to continue.';
      case 'email':
        return 'Enter a valid email address.';
      case 'pattern':
        return 'Please check the format.';
      case 'minlength':
        return `Please enter at least ${errors['minlength'].requiredLength} characters.`;
      case 'maxFileSize':
        return 'File is over 5 MB — please upload a smaller file.';
      default:
        return 'Please check this field.';
    }
  });
}
