export interface AppEnvironment {
  production: boolean;
  /** Base URL every service calls, e.g. '/api' or 'https://api.starorigin.in/v1'. */
  apiBaseUrl: string;
  /** When true, the mock-backend interceptor answers API calls from static JSON. */
  useMockApi: boolean;
  /** Folder (under /public) holding the mock JSON files. */
  mockApiRoot: string;
  /** Simulated network latency for mock responses. */
  mockLatencyMs: number;
  /** Canonical site origin, used for SEO tags and share links. */
  siteUrl: string;
}
