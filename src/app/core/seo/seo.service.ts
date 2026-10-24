import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_ENV } from '../config/app-env.token';
import { Seo } from '../models';

const SUFFIX = ' | StarOrigin';

/** Page title, meta description, canonical/OG tags and JSON-LD structured data. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly env = inject(APP_ENV);

  set(seo: Seo, path = this.doc.location.pathname): void {
    const fullTitle = seo.title.endsWith('StarOrigin') ? seo.title : seo.title + SUFFIX;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: this.env.siteUrl + path });
    this.setCanonical(this.env.siteUrl + path);
  }

  /** Replaces the page's JSON-LD block (one per page; `id` keeps multiple scopes apart). */
  setJsonLd(data: object | null, id = 'page'): void {
    const selector = `script[type="application/ld+json"][data-ld="${id}"]`;
    this.doc.head.querySelector(selector)?.remove();
    if (!data) return;
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.dataset['ld'] = id;
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
  }
}
