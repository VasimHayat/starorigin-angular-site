import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cta } from '../../../core/models';
import { Icon } from '../icon/icon';

/** A call-to-action from content data. Internal URLs use the router; external/tel/mailto use <a href>. */
@Component({
  selector: 'app-cta-button',
  imports: [RouterLink, Icon],
  template: `
    @if (isInternal()) {
      <a [routerLink]="path()" [queryParams]="cta().queryParams" [fragment]="fragment()" [class]="classes()">
        {{ cta().label }}
        @if (iconName()) {<app-icon [name]="iconName()!" />}
      </a>
    } @else {
      <a [href]="cta().url" [class]="classes()" [attr.target]="cta().external ? '_blank' : null" [attr.rel]="cta().external ? 'noopener' : null">
        {{ cta().label }}
        @if (iconName()) {<app-icon [name]="iconName()!" />}
      </a>
    }
  `,
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaButton {
  readonly cta = input.required<Cta>();
  readonly size = input<'md' | 'sm'>('md');

  protected readonly isInternal = computed(() => this.cta().url.startsWith('/') && !this.cta().external);
  protected readonly path = computed(() => this.cta().url.split('#')[0]);
  protected readonly fragment = computed(() => this.cta().url.split('#')[1]);
  protected readonly iconName = computed(() => this.cta().icon ?? (this.cta().variant !== 'ghost' ? 'arrow' : undefined));
  protected readonly classes = computed(() => `btn btn-${this.cta().variant ?? 'glow'}${this.size() === 'sm' ? ' btn-sm' : ''}`);
}
