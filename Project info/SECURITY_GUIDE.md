# SECURITY_GUIDE.md

## 🔐 Supabase Security
- **RLS (Row Level Security) verplicht**  
  - Elke tabel (`sites`, `pages`, `blocks`, `media`) krijgt policies.  
  - Schrijven: alleen owner/team van de site.  
  - Lezen: enkel via server (service role of serverless function).  
  - Nooit public client-reads cross-tenant.

- **Service Role Key**
  - Alleen gebruiken in server-side context (Vercel functions, Edge Functions).
  - Nooit in frontend of `.env.local`.

- **Anon Key**
  - Alleen clientside (auth, beperkte reads).
  - Veilig zolang RLS actief is.

## 🔑 Secrets Management
- `.env` bestanden nooit committen.
- Gebruik `.env.example` voor placeholders.
- Secrets via Vercel project settings (Dev/Preview/Prod).
- Rotatie minstens 2x/jaar of bij vermoeden van lek.

## 🔒 App Security
- **Session management**: refresh tokens en automatic logout bij expiry.
- **Rate limiting**: brute-force tegen login endpoints.
- **File uploads**:
  - Toegestane extensies: jpg, png, webp, pdf.
  - Max. grootte: 5 MB (instelbaar per tenant).
  - Scan op mime-type, niet enkel extensie.

## 🔄 Backups & Restore
- Supabase Postgres backups automatisch.
- Test restore minstens 1x per kwartaal.
- Media (Supabase Storage): backup via cron (copy naar cold storage).

## 🛡 Infra & Monitoring
- Vercel: serverless functions met EU-datacenter voorkeur.
- Supabase: host EU-region.
- Monitoring: 404/500 errors loggen per site_id.
- Audit log bij belangrijke acties (site clone, template update, domain koppeling).

