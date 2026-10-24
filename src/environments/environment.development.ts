import { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: false,
  apiBaseUrl: '/api',
  useMockApi: true,
  mockApiRoot: '/mock-api',
  mockLatencyMs: 500,
  siteUrl: 'http://localhost:4200',
};
