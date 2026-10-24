import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Fade/slide-in when the element scrolls into view (adds `.rv` then `.in`).
 * Fully disabled by CSS for prefers-reduced-motion. Usage: <div appReveal [revealDelay]="i">.
 */
@Directive({ selector: '[appReveal]', host: { class: 'rv' } })
export class Reveal implements OnDestroy {
  /** Stagger index; delay = (index % 4) × 70ms. */
  readonly revealDelay = input(0);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      node.style.transitionDelay = `${(this.revealDelay() % 4) * 70}ms`;
      if (typeof IntersectionObserver === 'undefined') {
        node.classList.add('in');
        return;
      }
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add('in');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
