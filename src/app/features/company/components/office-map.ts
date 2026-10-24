import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Icon } from '../../../shared/ui/icon/icon';

/**
 * Click-to-load Google Map. Nothing is requested from Google until the visitor presses "Load map".
 * Only URLs built here from the office address (https://www.google.com/maps?q=…&output=embed) are trusted.
 */
@Component({
  selector: 'app-office-map',
  imports: [Icon],
  template: `
    @if (loaded()) {
      <div class="map loaded">
        <iframe
          [src]="src()"
          [title]="'Map of ' + label()"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    } @else {
      <div class="map">
        <div class="ph">
          <app-icon name="pin" />
          <span>Map loads from Google only when you ask.</span>
          <button type="button" class="btn btn-ghost btn-sm" (click)="loaded.set(true)" [attr.aria-label]="'Load map of ' + label()">
            Load map
          </button>
        </div>
      </div>
    }
  `,
  styles: `
    :host { display: block; margin-top: 8px; }
    .ph { display: grid; gap: 12px; justify-items: center; }
    .ph app-icon { width: 24px; height: 24px; color: var(--teal); }
    .map.loaded { padding: 0; }
    iframe { width: 100%; height: 100%; border: 0; display: block; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeMap {
  readonly address = input.required<string>();
  /** Human label for the iframe title, e.g. the city. */
  readonly label = input.required<string>();
  protected readonly loaded = signal(false);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly src = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(this.address())}&output=embed`,
    ),
  );
}
