ONEPAGER_FOODTRUCK.md
🎯 Doel

De Foodtruck Onepager is de eerste template binnen ons multi-tenant platform.
Deze pagina combineert alle essentiële secties (Hero → Contact) in één vloeiende pagina, volledig SEO-geoptimaliseerd en props-gedreven.
De structuur moet clonable zijn naar andere sectoren (bv. bakkerij, dierenarts).

🌐 Routing

URL subfolder: /foodtruck

URL subdomein: https://foodtruck.{platformDomain}

Later koppelbaar aan custom domein (https://www.naamfoodtruck.be).

Resolutie via siteSlug = foodtruck.

📑 Sectiestructuur
1. Hero

Doel: Directe value proposition en CTA.

Elementen: titel (H1), subtitel, primaire CTA (“Vraag offerte”), achtergrondfoto/video, alt-tekst.

SEO: H1 van de pagina, OG-image.

2. USP-strook

Doel: Kernvoordelen in één oogopslag.

Elementen: 3–4 tegels met icoon, titel, korte beschrijving.

SEO: Semantisch H2 voor “Waarom kiezen voor ons”.

3. Menu Highlights

Doel: Voorbeeld van aanbod tonen (3–6 gerechten).

Elementen: titel, afbeelding, korte beschrijving, alt-tekst.

SEO: Structured data als Menu mogelijk.

4. Events

Doel: Gebruikssituaties tonen (huwelijk, bedrijfsevent, festival).

Elementen: tegels met titel, beschrijving, foto.

SEO: H2 + JSON-LD Event.

5. Testimonials

Doel: Vertrouwen wekken via reviews.

Elementen: quote, naam, rol/eventtype, foto.

SEO: H2 “Wat klanten zeggen”.

6. FAQ

Doel: Praktische vragen beantwoorden + SEO boost.

Elementen: vraag + antwoord (5–7 items).

SEO: JSON-LD FAQPage.

7. Contact & Offerte

Doel: Conversiepunt (formulier, NAP).

Elementen: formulier (naam, e-mail, telefoon, datum, eventtype, locatie), adres, telefoon, e-mail, social links, map.

SEO: JSON-LD LocalBusiness + ContactPage.

⚙️ SEO Specificatie

Meta title: Foodtruck huren in [Regio] | [Naam Foodtruck] (≤ 60)

Meta description: Beleef uw feest of event met heerlijke streetfood uit onze foodtruck. Boek ons voor huwelijken, festivals of bedrijfsevents in [Regio]. (≤ 155)

Canonical: naar primaryDomain zodra actief.

OpenGraph/Twitter: titel, beschrijving, image (1200x630).

JSON-LD:

Website (home)

Organization (logo, naam, contact)

LocalBusiness (NAP-gegevens)

FAQPage (FAQ sectie)

Sitemap: sitemap.xml per site.

Robots.txt: open (disallow: none).

🛡 CMP / GDPR

Placeholder cookie-banner zichtbaar bij eerste bezoek.

Consent-categorieën: functioneel, analytisch, marketing.

Consent Mode v2 mapping klaar (analytics_storage, ad_storage, etc.).

Scripts pas injecteren na akkoord.

📋 Acceptatiecriteria

Onepager /foodtruck live (subfolder + subdomein).

Alle secties aanwezig en in juiste volgorde.

SEO velden ingevuld en valide (Rich Results test slaagt).

CMP placeholder aanwezig.

Lighthouse SEO-score ≥ 90 (mobiel).

Content en props neutraal en clonable.