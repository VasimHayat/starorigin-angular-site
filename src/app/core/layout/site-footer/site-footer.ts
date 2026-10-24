import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Icon } from '../../../shared/ui/icon/icon';
import { NotifyService } from '../../notify/notify.service';
import { LeadsService, ServiceCatalogService } from '../../services';
import { CONTACT, FOOTER_NAV, LEGAL_NAV } from '../navigation';

/** Site footer: brand + newsletter, link columns, giant wordmark, legal links. */
@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, ReactiveFormsModule, Icon],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  private readonly leads = inject(LeadsService);
  private readonly notify = inject(NotifyService);

  protected readonly contact = CONTACT;
  protected readonly columns = FOOTER_NAV;
  protected readonly legal = LEGAL_NAV;
  protected readonly year = new Date().getFullYear();
  protected readonly services = toSignal(
    inject(ServiceCatalogService)
      .list()
      .pipe(map((s) => s.slice(0, 6))),
    { initialValue: [] },
  );

  protected readonly email = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] });
  protected readonly sending = signal(false);

  protected subscribe(): void {
    if (this.email.invalid) {
      this.email.markAsTouched();
      this.notify.error('Please enter a valid work email.', 'Check your email');
      return;
    }
    this.sending.set(true);
    this.leads.subscribe({ email: this.email.value, topic: 'hiring-insights' }).subscribe({
      next: () => {
        this.notify.success("You're subscribed to monthly hiring insights.", 'Subscribed');
        this.email.reset();
        this.sending.set(false);
      },
      error: () => {
        this.notify.error();
        this.sending.set(false);
      },
    });
  }
}
