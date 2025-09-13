# ROUTING_PLAN.md

## Structuur
- App Router: `app/[site]/(pages)/[...slug]`
- Loader haalt `site` via slug of domain
- `getPageData(siteId, slug)` → cascade

## Acceptatiecriteria
- `/greenleaf` toont home van site Greenleaf
- `/vetcare/services` toont juiste pagina
- 404 bij niet-bestaande pagina’s
- Slugs consistent (geen trailing slash issues)
