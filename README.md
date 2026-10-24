# StarOrigin — Angular site

Production codebase for the redesigned **starorigin.in**, built with Angular 21, PrimeNG 21, Tailwind CSS 4 and SCSS.
The design follows `../starorigin-redesign-plan.md`; the original static prototype is in `../starorigin-site`.

## Run

```bash
npm install
npm start            # http://localhost:4200 (mock API)
npm run build        # production build → dist/starorigin
npm test             # unit tests (Vitest)
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Angular 21: standalone components, signals, zoneless, OnPush everywhere, lazy routes |
| UI library | PrimeNG 21 with a custom preset (`core/theme/primeng-preset.ts`) and skin (`styles/_primeng.scss`) |
| Styling | Design-system SCSS (`styles/`) and Tailwind 4 utilities (`src/tailwind.css`), using the same tokens |
| Data | `ApiService` over `HttpClient`; mock backend interceptor until the real API exists |
| Forms | Typed Reactive Forms, plus shared `FormField`, `RadioCards` and `FileDrop` controls |

## Folder structure

```
src/
  tailwind.css               Tailwind entry + token → utility mapping (@theme)
  styles.scss                Global SCSS entry
  styles/
    _tokens.scss             Design tokens; dark default + premium light theme
    _components.scss         Design-system classes (cascade layer "components")
    _primeng.scss            PrimeNG skin
  environments/              apiBaseUrl, useMockApi, siteUrl …
  app/
    app.config.ts            Router, HttpClient + interceptors, PrimeNG, icon sprite
    app.routes.ts            All routes (lazy, one file per page)
    core/                    Singletons — no UI
      config/                APP_ENV injection token
      http/                  ApiService, mock-backend interceptor
      models/                Typed contracts shared by services, mocks and the future API
      services/              One service per API resource (jobs, services, pages, team, offices, proof, insights, legal, leads)
      theme/                 ThemeService (dark/light), PrimeNG preset
      seo/                   SeoService (title, meta, canonical, JSON-LD)
      notify/                NotifyService (toasts)
      icons/                 Icon registry + SVG sprite provider
      layout/                Header, footer, floating actions, navigation config
    shared/                  Reusable, stateless building blocks
      ui/                    Presentational components (page-hero, block-renderer, job-row, office-card, globe …)
      forms/                 FormField, RadioCards, FileDrop, FormSuccess
      directives/            appReveal (scroll reveal), appSpotlight (cursor glow)
      util/                  Loadable<T> async state, ClockService
    features/<area>/         Route pages (`*.page.ts`, default export) and their local helpers
public/mock-api/             JSON served by the mock backend
```

## Data and API migration

Every page gets its data from a **service in `core/services`**, and every service calls **REST paths** through `ApiService`:

| Service | Endpoints |
|---|---|
| `JobsService` | `GET /jobs`, `GET /jobs/:id` |
| `ServiceCatalogService` | `GET /services`, `GET /services/:slug` |
| `PagesService` | `GET /home`, `GET /pages/:slug` |
| `OfficesService`, `TeamService` | `GET /offices`, `GET /team` |
| `ProofService` | `GET /testimonials`, `GET /case-studies`, `GET /industries` |
| `InsightsService` | `GET /insights`, `GET /insights/:slug` |
| `LegalService` | `GET /legal/:slug` |
| `LeadsService` | `POST /leads/hire`, `/applications`, `/candidates`, `/contact`, `/careers/applications`, `/subscriptions` |

While `environment.useMockApi` is `true`, `mockBackendInterceptor` answers these calls from `public/mock-api`:

- `GET /x` → `x.json`
- `GET /x/:key` → the item with that `id`/`slug` in `x.json`. Large documents are stored one file per item instead: `pages/:slug.json`, `insights/:slug.json` and `legal/:slug.json`.
- `POST` → `201 { id, status: 'received' }` after a short delay.

**To go live:** implement the same endpoints and JSON shapes (see `core/models`), set `useMockApi: false`, and point `apiBaseUrl` at the server. No component or service code changes.

## Content blocks

Content pages (services, industries, about …) are a `ContentPage`: a `hero`, an ordered list of typed `blocks` and a closing `cta`.
`<app-block-renderer>` draws any page from that data, so a headless CMS can return the same shape. To add a block type, extend the `ContentBlock` union in `core/models/content.model.ts` and add one `@case` in `shared/ui/block-renderer/block-view.html`.

## Bundle size

The initial bundle is about 750 kB raw, or about 175 kB gzipped over the network. Most of it is Angular and PrimeNG's runtime theme engine, which every page needs. Pages are lazy chunks of roughly 2–20 kB each. The production budget warns at 800 kB raw (`angular.json`). If it grows, the next step is moving PrimeNG to a precompiled CSS theme.

## Conventions

- **Components:** standalone, `ChangeDetectionStrategy.OnPush`, signal `input()`s, `inject()`, and the built-in control flow (`@if`, `@for`, `@switch`).
- **Pages:** each page is a default export `*.page.ts`, so routes can use `loadComponent: () => import('…')`. Route params arrive as signal inputs through `withComponentInputBinding()`.
- **Async data:** use `toSignal(...)` for lists; detail pages use `toLoadable()` → `Loadable<T>` to switch between skeleton, content and error/404 states.
- **SEO:** each page calls `SeoService.set()` and, where relevant, `setJsonLd()`.
- **Placeholder content:** anything still needing real data from StarOrigin carries a `sample` field, rendered by `<app-sample-tag>` (see `../starorigin-site/content-checklist.md`).
- **Styling:** use design-system classes from `styles/_components.scss` first, Tailwind utilities for one-off layout, and component SCSS for page-specific rules. Don't hard-code colours; use the tokens (`var(--teal)`, `text-muted` …).
- **Themes:** dark is the default. `ThemeService` toggles `data-theme="light"` and PrimeNG's `.app-dark` class together.
"# starorigin-angular-site" 
