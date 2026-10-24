import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { filter, map } from 'rxjs';
import { Icon } from '../../../shared/ui/icon/icon';
import { ServiceCatalogService } from '../../services';
import { ThemeService } from '../../theme/theme.service';
import { CONTACT, MAIN_NAV, NavItem, NavMenu } from '../navigation';

/** Floating glass navigation bar with dropdown menus, theme toggle, job search shortcut and mobile drawer. */
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, Icon, DrawerModule],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown)': 'onKey($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  protected readonly theme = inject(ThemeService);
  protected readonly contact = CONTACT;

  protected readonly scrolled = signal(false);
  protected readonly drawerOpen = signal(false);

  private readonly services = toSignal(inject(ServiceCatalogService).list(), { initialValue: [] });
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Menus with the service catalogue merged into the Employers dropdown. */
  protected readonly menus = computed<(NavMenu & { items: NavItem[] })[]>(() =>
    MAIN_NAV.map((m) => ({
      ...m,
      items: [
        ...(m.includeServices
          ? this.services().map((s) => ({ label: s.name, url: `/services/${s.slug}`, icon: s.icon, note: s.menuNote }))
          : []),
        ...(m.items ?? []),
      ],
    })),
  );

  protected isActive(m: NavMenu): boolean {
    const path = this.url().split(/[?#]/)[0];
    return m.activeMatch.some((p) => path === p || path.startsWith(p + '/'));
  }

  protected onScroll(): void {
    this.scrolled.set(scrollY > 20);
  }

  /** "/" anywhere (outside inputs) jumps to job search. */
  protected onKey(e: KeyboardEvent): void {
    const tag = (this.doc.activeElement?.tagName ?? '').toUpperCase();
    if (e.key !== '/' || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) || (this.doc.activeElement as HTMLElement)?.isContentEditable) return;
    e.preventDefault();
    const box = this.doc.getElementById('jobQ') as HTMLInputElement | null;
    if (box) {
      box.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setTimeout(() => box.focus({ preventScroll: true }), 250);
    } else {
      this.router.navigate(['/jobs'], { queryParams: { focus: 1 } });
    }
  }
}
