import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { FloatingActions } from './core/layout/floating-actions/floating-actions';
import { SiteFooter } from './core/layout/site-footer/site-footer';
import { SiteHeader } from './core/layout/site-header/site-header';

/** App shell: header, routed page, footer, floating actions and the global toast outlet. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, FloatingActions, ToastModule],
  template: `
    <app-site-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
    <app-floating-actions />
    <p-toast position="bottom-center" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
