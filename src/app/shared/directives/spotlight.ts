import { Directive, ElementRef, inject } from '@angular/core';

/** Cursor-following glow on glass cards (adds `.spot`, feeds --mx/--my to the CSS). */
@Directive({
  selector: '[appSpotlight]',
  host: { class: 'spot', '(pointermove)': 'move($event)' },
})
export class Spotlight {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  protected move(e: PointerEvent): void {
    const node = this.el.nativeElement;
    const r = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - r.left}px`);
    node.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}
