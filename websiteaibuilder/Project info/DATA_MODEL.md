# DATA_MODEL.md

## Tabellen
- **sites**: basisinfo van elke website
- **site_domains**: optionele custom domeinen
- **pages**: per site pagina’s met SEO info
- **blocks**: contentblokken per pagina
- **template_blocks**: defaults per template
- **core_defaults** (optioneel): centrale fallback

## ER-Diagram (ASCII)

sites --< pages --< blocks
sites --< site_domains
templates --< template_blocks

## RLS
- Schrijven: alleen owner/team
- Lezen: publiek enkel via server-side key

