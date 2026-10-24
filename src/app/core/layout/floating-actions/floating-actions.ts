import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../shared/ui/icon/icon';
import { CONTACT } from '../navigation';

/** Reading-progress bar, WhatsApp button and the mobile bottom action bar. */
@Component({
  selector: 'app-floating-actions',
  imports: [RouterLink, Icon],
  template: `
    <div class="progress" aria-hidden="true" [style.width.%]="progress()"></div>
    <div class="mbar" aria-label="Quick actions">
      <a routerLink="/jobs" class="btn btn-ghost">Find jobs</a>
      <a routerLink="/hire" class="btn btn-glow">Hire talent</a>
    </div>
    <a class="wa" [href]="whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><app-icon name="wa" /></a>
  `,
  styles: `:host { display: contents; }`,
  host: { '(window:scroll)': 'onScroll()', '(window:resize)': 'onScroll()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingActions {
  protected readonly whatsapp = CONTACT.whatsapp;
  protected readonly progress = signal(0);

  protected onScroll(): void {
    const h = document.documentElement.scrollHeight - innerHeight;
    this.progress.set(h > 0 ? (scrollY / h) * 100 : 0);
  }
}
