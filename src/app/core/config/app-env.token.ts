import { InjectionToken } from '@angular/core';
import { AppEnvironment } from '../../../environments/environment.model';
import { environment } from '../../../environments/environment';

/** Runtime environment, injectable so services and tests never import `environment` directly. */
export const APP_ENV = new InjectionToken<AppEnvironment>('APP_ENV', {
  providedIn: 'root',
  factory: () => environment,
});
