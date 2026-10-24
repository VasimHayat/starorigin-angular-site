import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'so-theme';

/**
 * Dark is the default. The choice is remembered per browser.
 * Keeps two markers in sync on <html>:
 *   - data-theme="light"  → our design tokens (styles/_tokens.scss)
 *   - class "app-dark"    → PrimeNG's darkModeSelector
 * index.html applies the saved theme before first paint to avoid a flash.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly reduceMotion = this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

  readonly mode = signal<ThemeMode>(this.doc.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark');
  readonly isLight = computed(() => this.mode() === 'light');

  toggle(): void {
    this.set(this.isLight() ? 'dark' : 'light');
  }

  set(mode: ThemeMode): void {
    const root = this.doc.documentElement;
    if (!this.reduceMotion) {
      root.classList.add('theming');
      setTimeout(() => root.classList.remove('theming'), 400);
    }
    if (mode === 'light') root.dataset['theme'] = 'light';
    else delete root.dataset['theme'];
    root.classList.toggle('app-dark', mode === 'dark');
    this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'light' ? '#FAF8F4' : '#060912');
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
    this.mode.set(mode);
  }
}
