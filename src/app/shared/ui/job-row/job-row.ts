import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../../core/models';
import { Icon } from '../icon/icon';
import { SampleTag } from '../sample-tag/sample-tag';

/** One job in a list: initials badge, title (+NEW), client · location, type/experience tags. */
@Component({
  selector: 'app-job-row',
  imports: [RouterLink, Icon, SampleTag],
  template: `
    @let j = job();
    <a class="job" [routerLink]="['/jobs', j.id]">
      <span class="logo" aria-hidden="true">{{ initials() }}</span>
      <span>
        <h3>{{ j.title }}@if (j.isNew) {<span class="new">NEW</span>} <app-sample-tag [label]="j.sample" /></h3>
        <span class="sub">{{ j.client }} · {{ j.location }}</span>
      </span>
      <span class="tags"><span>{{ j.type }}</span><span>{{ j.experience }}</span></span>
      <span class="go" aria-hidden="true"><app-icon name="arrow-ur" /></span>
    </a>
  `,
  styles: `:host { display: block; } .sub { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobRow {
  readonly job = input.required<Job>();
  protected readonly initials = computed(() => (this.job().title.match(/\b[A-Z]/g) ?? ['J']).slice(0, 2).join(''));
}
