import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../ui/icon/icon';

/** Success panel shown after a form is submitted. Project buttons/links as content. */
@Component({
  selector: 'app-form-success',
  imports: [Icon],
  template: `
    <div class="success show" role="status" aria-live="polite">
      <div class="ok"><app-icon name="tick" /></div>
      <h3>{{ title() }}</h3>
      <p>{{ text() }}</p>
      <div class="btn-row" style="justify-content: center; margin-top: 24px"><ng-content /></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSuccess {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
}
