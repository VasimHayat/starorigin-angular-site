import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Office } from '../../../core/models';
import { Spotlight } from '../../directives/spotlight';
import { ClockService } from '../../util/clock.service';
import { Icon } from '../icon/icon';
import { SampleTag } from '../sample-tag/sample-tag';

/** Office card with live local time and open/closed status. `detailed` adds contact lines + directions. */
@Component({
  selector: 'app-office-card',
  imports: [Icon, SampleTag, Spotlight],
  template: `
    @let o = office();
    <div appSpotlight class="off h-full">
      <div class="top">
        <span class="cc">{{ o.code }}</span>
        <span class="live" [class.closed]="!open()">{{ open() ? 'OPEN' : 'CLOSED' }}</span>
      </div>
      <h3>{{ o.city }}</h3>
      <time [attr.datetime]="clock.now().toISOString()">{{ time() }}</time>
      <p>{{ o.address }}</p>
      @if (detailed()) {
        @if (o.focus) {<p>Focus: {{ o.focus }} <app-sample-tag [label]="o.sample" /></p>}
        <div class="contact-lines">
          <a [href]="'tel:' + o.tel">{{ o.phone }}</a>
          <a [href]="'mailto:' + o.email">{{ o.email }}</a>
          <a class="link" [href]="mapsUrl()" target="_blank" rel="noopener">Directions <app-icon name="arrow-ur" /></a>
        </div>
      }
    </div>
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeCard {
  readonly office = input.required<Office>();
  readonly detailed = input(false);
  protected readonly clock = inject(ClockService);

  protected readonly time = computed(() => this.clock.timeIn(this.office().timezone, this.clock.now()));
  protected readonly open = computed(() => {
    const o = this.office();
    return this.clock.isOpen(o.timezone, o.hours.open, o.hours.close, this.clock.now());
  });
  protected readonly mapsUrl = computed(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.office().address)}`,
  );
}
