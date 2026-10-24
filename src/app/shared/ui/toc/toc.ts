import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, input, signal } from '@angular/core';

export interface TocItem {
  id: string;
  label: string;
}

/** Sticky table of contents with scroll-spy highlighting of the current section. */
@Component({
  selector: 'app-toc',
  template: `
    <nav class="glass toc" aria-label="On this page">
      <h4>On this page</h4>
      <ol>
        @for (item of items(); track item.id) {
          <li><a [href]="'#' + item.id" [class.active]="active() === item.id" (click)="go($event, item.id)">{{ item.label }}</a></li>
        }
      </ol>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toc {
  readonly items = input.required<TocItem[]>();
  protected readonly active = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const io = new IntersectionObserver(
        (entries) => entries.filter((e) => e.isIntersecting).forEach((e) => this.active.set(e.target.id)),
        { rootMargin: '-20% 0px -70% 0px' },
      );
      this.items().forEach((i) => {
        const el = document.getElementById(i.id);
        if (el) io.observe(el);
      });
      destroyRef.onDestroy(() => io.disconnect());
    });
  }

  /** In-page anchor scroll without touching the router URL. */
  protected go(e: Event, id: string): void {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.active.set(id);
  }
}
