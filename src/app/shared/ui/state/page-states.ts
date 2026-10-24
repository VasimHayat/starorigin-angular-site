import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

/** Loading placeholder for a whole page while its content request is in flight. */
@Component({
  selector: 'app-page-skeleton',
  imports: [SkeletonModule],
  template: `
    <section class="page-hero" aria-busy="true" aria-live="polite">
      <div class="wrap">
        <span class="sr-only">Loading…</span>
        <p-skeleton width="180px" height="14px" styleClass="mb-6" />
        <p-skeleton width="70%" height="64px" styleClass="mb-4" />
        <p-skeleton width="45%" height="64px" styleClass="mb-8" />
        <p-skeleton width="55%" height="18px" styleClass="mb-3" />
        <p-skeleton width="40%" height="18px" />
        <div class="grid g3" style="margin-top: 64px">
          @for (i of [1, 2, 3]; track i) {<p-skeleton height="200px" />}
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSkeleton {}

/** Friendly error / not-found state for data-driven pages. */
@Component({
  selector: 'app-page-error',
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
      <div>
        <div class="code grad-text">{{ notFound() ? '404' : 'Oops' }}</div>
        <h1 style="font-size: clamp(28px, 4vw, 44px); margin: 24px 0 12px">
          {{ notFound() ? 'This page has moved — or never existed.' : 'We couldn’t load this page.' }}
        </h1>
        <p class="muted">{{ notFound() ? 'Try one of these instead.' : 'Please check your connection and try again.' }}</p>
        <div class="btn-row" style="justify-content: center; margin-top: 28px">
          <a routerLink="/jobs" class="btn btn-glow">Search jobs</a>
          <a routerLink="/" class="btn btn-ghost">Back to home</a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageError {
  readonly notFound = input(false);
}
