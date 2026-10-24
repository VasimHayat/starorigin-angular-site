import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

/** App-wide toasts (rendered by the <p-toast> in the app shell). */
@Injectable({ providedIn: 'root' })
export class NotifyService {
  private readonly messages = inject(MessageService);

  success(detail: string, summary = 'Done'): void {
    this.messages.add({ severity: 'success', summary, detail, life: 4000 });
  }

  error(detail = 'Something went wrong. Please try again, or email hello@starorigin.in.', summary = 'Not sent'): void {
    this.messages.add({ severity: 'error', summary, detail, life: 6000 });
  }
}
