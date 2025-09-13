PROJECT_OVERVIEW.md
🎯 Doelen

Bouwen van een multi-tenant website generator waarmee kleine bedrijven snel een professionele website krijgen.

Eén centrale “motor” (design system + blokken) die eenvoudig centraal te onderhouden en upgraden is.

Websites worden uitgerold via subfolders per tenant (bv. /klant-a, /klant-b), later uitbreidbaar naar custom domeinen.

Basiscontent en layout komen uit templates, aangevuld of overschreven door site-specifieke blokken.

Mogelijkheid om bestaande websites te clonen of nieuwe te genereren met templates.

AI integratie (fase 2) om blokken en teksten automatisch te vullen.

🚫 Non-doelen (voor MVP)

Geen volledige e-commerce functionaliteit (checkout, betalingen).

Geen complexe CMS backend zoals WordPress.

Geen integratie met externe CRM’s of marketing automation (kan later).

Geen custom domeinkoppeling in MVP (komt in fase 2).

Geen AI-generator in MVP (komt in fase 2).

🏗 Architectuur

Frontend & server: Next.js (App Router, Server Components waar mogelijk).

Database & Auth: Supabase (Postgres, RLS, Auth, Storage).

Styling: Tailwind CSS (met tokens voor thema’s).

Animaties: Framer Motion + Lenis (smooth scroll).

SEO: next-seo + next-sitemap.

Hosting: Vercel 

📦 MVP Scope


Subfolder routing: elke site bereikbaar via /{siteSlug}/....

Cloning flow: nieuwe site genereren op basis van template.

Cascade/fallback:

Site-override

Template-default

Core-default

Studio (beheer): eenvoudige UI om sites, pagina’s en blokken te beheren.

SEO-basis: sitemap per site, robots.txt, meta tags, schema.org (FAQ/LocalBusiness).

Cookie-consent placeholder (CMP integratie voorbereid).

✅ Acceptance Criteria

Minstens 2 demo-sites live (elk met eigen slug en content).

Elke site toont content via cascade (site → template → core).

Nieuwe site kan via wizard gekloond worden uit een template.

Core-blokken zijn centraal updatebaar zonder alle sites te breken.

Sitemap + robots per site beschikbaar.

Pages laden correct via subfolder-routing.

Consent banner aanwezig (placeholder).

📋 Checklists
Development

 Repo met main + develop branch

 Supabase DB schema (sites, pages, blocks, template_blocks)

 RLS policies actief

 Basis core-blokken geïmplementeerd

 Subfolder-routing werkt (/[site]/[...slug])

Deployment

 Vercel koppeling (main = production, develop = preview)

 ENV variabelen ingesteld (Supabase keys, revalidate token)

 Preview deploys getest

QA

 Lighthouse score > 90 (mobiel)

 Sitemap.xml en robots.txt per site

 404 + fallback correct afgehandeld

⚠️ Risico’s

RLS niet correct ingesteld → risico op data-lekken tussen tenants.

Geen cascade fallback → veel dubbel onderhoud van content.

Core updates breken sites → nood aan versionering (core_version).

SEO inconsistentie → titels of canonicals niet goed ingesteld.

CMP niet goed geïmplementeerd → risico op niet-GDPR-conforme sites.

Te zware animaties → lage performance op mobiel.