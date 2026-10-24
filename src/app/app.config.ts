import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { mockBackendInterceptor } from './core/http/mock-backend.interceptor';
import { provideIconSprite } from './core/icons/icon-sprite';
import { StarOriginPreset } from './core/theme/primeng-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    // The mock backend answers /api/* from /public/mock-api while useMockApi is true.
    provideHttpClient(withFetch(), withInterceptors([mockBackendInterceptor])),
    providePrimeNG({
      ripple: false,
      theme: {
        preset: StarOriginPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: { name: 'primeng', order: 'theme, base, primeng, components, utilities' },
        },
      },
    }),
    MessageService,
    provideIconSprite(),
  ],
};
