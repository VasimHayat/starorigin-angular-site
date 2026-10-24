import { ChangeDetectionStrategy, Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioCardOption {
  value: string;
  label: string;
  description?: string;
}

let nextId = 0;

/** Large selectable cards backed by native radios (keyboard + screen-reader friendly). Works with formControlName. */
@Component({
  selector: 'app-radio-cards',
  template: `
    <div class="radio-cards" role="radiogroup" [attr.aria-label]="ariaLabel()">
      @for (o of options(); track o.value) {
        <label>
          <input type="radio" [name]="name" [value]="o.value" [checked]="value() === o.value" [disabled]="disabled()" (change)="select(o.value)" (blur)="onTouched()" />
          <span>{{ o.label }}@if (o.description) {<small>{{ o.description }}</small>}</span>
        </label>
      }
    </div>
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioCards), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioCards implements ControlValueAccessor {
  readonly options = input.required<RadioCardOption[]>();
  readonly ariaLabel = input<string>();
  protected readonly name = `radio-cards-${nextId++}`;
  protected readonly value = signal<string | null>(null);
  protected readonly disabled = signal(false);

  private onChange: (v: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected select(v: string): void {
    this.value.set(v);
    this.onChange(v);
    this.onTouched();
  }

  writeValue(v: string | null): void {
    this.value.set(v);
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(d: boolean): void {
    this.disabled.set(d);
  }
}
