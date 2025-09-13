# DOMAIN_MAPPING.md

## 🎯 Doel
Elke site (tenant) kan naast subfolder (`/site-slug`) een eigen domein krijgen, met automatische SSL.

## 🔄 Flow
1. **Tenant** voegt domein toe in studio (bv. `www.greenleaf.be`).
2. Record komt in `site_domains` tabel:
   - site_id
   - domain
   - status: pending/verified/primary
3. Platform toont DNS-instructie (CNAME → platformdomain).
4. Controle job:
   - DNS lookup → klopt record?
   - Markeer domein als `verified`.

## 🔒 SSL
- **Vercel**: automatische Let’s Encrypt SSL na DNS verificatie.
- **Eigen VPS**:  
  - Gebruik Nginx + Certbot.
  - Server block per domein → proxy naar app.
  - Automatische vernieuwing via cron.

## 📑 Fallback
- Als domein niet verified → site blijft bereikbaar via subfolder URL.
- `is_primary = true` → altijd redirect van subfolder naar custom domein.

## ⚠️ Edge cases
- Domein dubbel gekoppeld → foutmelding.
- Domein verlopen → status naar `unverified`.
- Multi-domain tenants (bv. .be en .com) → 1 primary, rest 301 redirect.

