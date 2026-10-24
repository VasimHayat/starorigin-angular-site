import { Signal, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentPage } from '../../core/models';
import { PagesService } from '../../core/services';
import { SeoService } from '../../core/seo/seo.service';
import { LOADING, Loadable, toLoadable } from '../../shared/util/loadable';

export interface CompanyPageState<T> {
  state: Signal<Loadable<T>>;
  page: Signal<T | null>;
  notFound: Signal<boolean>;
}

/**
 * Loads /pages/:slug as a Loadable and keeps SEO in sync with it.
 * Call from a component field initializer or constructor (injection context).
 */
export function loadCompanyPage<T extends ContentPage>(slug: string, path = `/${slug}`): CompanyPageState<T> {
  const seo = inject(SeoService);
  // Drop any JSON-LD left by the previous page; pages that need one set it in their own effect.
  seo.setJsonLd(null);
  const state = toSignal(toLoadable(inject(PagesService).getPage<T>(slug)), { initialValue: LOADING }) as Signal<Loadable<T>>;
  const page = computed(() => {
    const s = state();
    return s.status === 'success' ? s.data : null;
  });
  const notFound = computed(() => {
    const s = state();
    return s.status === 'error' && s.notFound;
  });
  effect(() => {
    const p = page();
    if (p) seo.set(p.seo, path);
  });
  return { state, page, notFound };
}
