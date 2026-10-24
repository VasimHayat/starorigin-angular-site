import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TeamMember } from '../../../core/models';
import { Icon } from '../icon/icon';

/** Team member portrait card with name/role overlay and optional LinkedIn link. */
@Component({
  selector: 'app-member-card',
  imports: [Icon],
  template: `
    @let m = member();
    <div class="member">
      <img [src]="m.photoUrl" [alt]="m.name" loading="lazy" width="400" height="500" />
      <div class="cap">
        <span><b>{{ m.name }}</b><small>{{ m.role }}</small></span>
        @if (m.linkedinUrl) {
          <a class="li" [href]="m.linkedinUrl" target="_blank" rel="noopener" [attr.aria-label]="m.name + ' on LinkedIn'"><app-icon name="in" /></a>
        }
      </div>
    </div>
  `,
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberCard {
  readonly member = input.required<TeamMember>();
}
