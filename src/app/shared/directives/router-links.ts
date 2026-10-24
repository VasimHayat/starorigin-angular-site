import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Routes clicks on internal links inside CMS/innerHTML content (`<a href="/jobs">`) through the
 * Angular router instead of a full page reload. Modified clicks, new-tab links and external URLs
 * keep their normal browser behaviour.
 */
@Directive({ selector: '[appRouterLinks]', host: { '(click)': 'onClick($event)' } })
export class RouterLinks {
  private readonly router = inject(Router);

  protected onClick(e: MouseEvent): void {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement).closest('a');
    const href = a?.getAttribute('href');
    if (!a || !href || a.target || !href.startsWith('/') || href.startsWith('//')) return;
    e.preventDefault();
    void this.router.navigateByUrl(href);
  }
}
