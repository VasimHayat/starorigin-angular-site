import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, Icon],
  template: `
    <section class="nf">
      <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
      <div>
        <div class="code grad-text" aria-hidden="true">404</div>
        <h1 style="font-size: clamp(28px, 4vw, 44px); margin: 24px 0 12px">This role has been filled — or never existed.</h1>
        <p class="muted">The page you’re looking for isn’t here. Try one of these instead.</p>
        <div class="btn-row" style="justify-content: center; margin-top: 28px">
          <a routerLink="/jobs" class="btn btn-glow">Search jobs <app-icon name="arrow" /></a>
          <a routerLink="/" class="btn btn-ghost">Back to home</a>
        </div>
        <p class="links">
          <a routerLink="/services" class="link">Services</a>
          <a routerLink="/jobs" class="link">Jobs</a>
          <a routerLink="/contact" class="link">Contact</a>
        </p>
      </div>
    </section>
  `,
  styles: `.links { display: flex; gap: 24px; justify-content: center; margin-top: 32px; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPage {}
