import { AppEnvironment } from './environment.model';

/**
 * Production environment.
 * Until the backend exists the site ships with the mock API (static JSON in /mock-api).
 * To go live with a real API: set `useMockApi: false` and point `apiBaseUrl` at it.
 */
export const environment: AppEnvironment = {
  production: true,
  apiBaseUrl: '/api',
  useMockApi: true,
  mockApiRoot: '/mock-api',
  mockLatencyMs: 300,
  siteUrl: 'https://starorigin.in',
};
