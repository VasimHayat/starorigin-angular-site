import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, input, signal, viewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { Icon } from '../ui/icon/icon';

export const MAX_CV_BYTES = 5 * 1024 * 1024;

/** Validator: rejects files larger than `max` bytes. */
export function maxFileSize(max = MAX_CV_BYTES) {
  return (c: AbstractControl): ValidationErrors | null => (c.value instanceof File && c.value.size > max ? { maxFileSize: true } : null);
}

/** Drag-and-drop / click-to-browse file picker. Value is a File (or null). Works with formControlName. */
@Component({
  selector: 'app-file-drop',
  imports: [Icon],
  template: `
    <div
      class="drop"
      [class.over]="over()"
      tabindex="0"
      role="button"
      [attr.aria-label]="label()"
      (click)="picker.click()"
      (keydown.enter)="picker.click()"
      (keydown.space)="$event.preventDefault(); picker.click()"
      (dragenter)="drag($event, true)"
      (dragover)="drag($event, true)"
      (dragleave)="drag($event, false)"
      (drop)="drop($event)"
    >
      <app-icon name="upload" />
      <b>{{ label() }}</b> or browse · {{ hint() }}
      <input #picker type="file" hidden [accept]="accept()" (change)="pick($event)" />
      @if (file(); as f) {<div class="file">✓ {{ f.name }} · {{ kb(f) }} KB</div>}
    </div>
  `,
  styles: `:host { display: block; } app-icon { display: block; }`,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FileDrop), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDrop implements ControlValueAccessor {
  readonly label = input('Drop your CV');
  readonly hint = input('PDF or DOCX, up to 5 MB');
  readonly accept = input('.pdf,.doc,.docx');
  private readonly picker = viewChild<ElementRef<HTMLInputElement>>('picker');
  protected readonly file = signal<File | null>(null);
  protected readonly over = signal(false);

  private onChange: (f: File | null) => void = () => {};
  private onTouched: () => void = () => {};

  protected drag(e: DragEvent, over: boolean): void {
    e.preventDefault();
    this.over.set(over);
  }

  protected drop(e: DragEvent): void {
    e.preventDefault();
    this.over.set(false);
    this.set(e.dataTransfer?.files?.[0] ?? null);
  }

  protected pick(e: Event): void {
    this.set((e.target as HTMLInputElement).files?.[0] ?? null);
  }

  protected kb(f: File): number {
    return Math.round(f.size / 1024);
  }

  private set(f: File | null): void {
    this.file.set(f);
    this.onChange(f);
    this.onTouched();
  }

  writeValue(f: File | null): void {
    this.file.set(f);
    if (!f) { const el = this.picker()?.nativeElement; if (el) el.value = ''; }
  }
  registerOnChange(fn: (f: File | null) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
