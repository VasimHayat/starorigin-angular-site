import { DOCUMENT } from '@angular/common';
import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { CUSTOM_ICONS, FILLED_ICONS, STROKE_ICONS } from './icon-registry';

/** Injects the icon registry into <body> once as an SVG sprite, so icons are a cheap <use href="#i-name">. */
export function provideIconSprite(): EnvironmentProviders {
  return provideAppInitializer(() => {
    const doc = inject(DOCUMENT);
    if (doc.getElementById('so-icon-sprite')) return;
    const symbol = (name: string, attrs: string, body: string) =>
      `<symbol id="i-${name}" viewBox="0 0 24 24" ${attrs}>${body}</symbol>`;
    const stroke = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const symbols = [
      ...Object.entries(STROKE_ICONS).map(([n, b]) => symbol(n, stroke, b)),
      ...Object.entries(FILLED_ICONS).map(([n, b]) => symbol(n, 'fill="currentColor"', b)),
      ...Object.entries(CUSTOM_ICONS).map(([n, b]) => symbol(n, '', b)),
    ].join('');
    const host = doc.createElement('div');
    host.id = 'so-icon-sprite';
    host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    host.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols}</defs></svg>`;
    doc.body.prepend(host);
  });
}
