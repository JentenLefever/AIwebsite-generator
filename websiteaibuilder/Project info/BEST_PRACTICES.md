# BEST_PRACTICES.md

## Code & architectuur
- **TypeScript** verplicht
- **ESLint + Prettier** voor consistente code
- **Server Components** waar mogelijk, client alleen bij interactiviteit/animatie
- **ISR** (Incremental Static Regeneration) of **On-Demand Revalidation** per site

## Secrets
- `.env.local` nooit committen
- Alle variabelen beheren via Vercel of server secrets
- Keys roteren min. elke 6 maanden

## Naming
- Slugs: alleen lowercase, `-` als scheiding
- DB tables: enkelvoud (site, page, block)
- Commits: **Conventional Commits**

## Versioning
- **core_version** en **template_version**
- Semver (`1.0.0` → `1.1.0` → `2.0.0`)

## Caching
- ISR voor alle sites
- CDN voor assets
- Lazy load images
