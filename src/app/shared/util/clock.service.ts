import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/** Shared ticking clock (every 30s) for live office times; one timer for the whole app. */
@Injectable({ providedIn: 'root' })
export class ClockService {
  readonly now = signal(new Date());

  constructor() {
    const id = setInterval(() => this.now.set(new Date()), 30_000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  /** "HH:mm" in the given IANA time zone. */
  timeIn(timeZone: string, at = this.now()): string {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(at);
  }

  /** True when the local time is within opening hours, Monday–Saturday. */
  isOpen(timeZone: string, open: string, close: string, at = this.now()): boolean {
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric', weekday: 'short', hour12: false, timeZone })
        .formatToParts(at)
        .map((p) => [p.type, p.value]),
    );
    const toMin = (hhmm: string) => +hhmm.split(':')[0] * 60 + +hhmm.split(':')[1];
    const mins = +parts['hour'] * 60 + +parts['minute'];
    return parts['weekday'] !== 'Sun' && mins >= toMin(open) && mins < toMin(close);
  }
}
