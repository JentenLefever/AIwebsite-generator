# 🚀 Deployment Guide - Vercel

## Framework Keuze: Next.js

**Waarom Next.js voor Vercel?**
- ✅ **Native ondersteuning** - Vercel is gemaakt door de makers van Next.js
- ✅ **Zero-config deployment** - Automatische optimalisaties
- ✅ **Edge Functions** - Snelle serverless functions
- ✅ **Image optimization** - Automatische image optimalisatie
- ✅ **Static generation** - Snelle laadtijden
- ✅ **SEO ready** - Server-side rendering

## 📋 Pre-deployment Checklist

### 1. TypeScript Errors Oplossen
```bash
npm run type-check
npm run lint
```

### 2. Build Testen
```bash
npm run build
npm run start
```

### 3. Environment Variables
Maak een `.env.local` bestand aan:
```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=Website AI Builder
```

## 🔧 Vercel Configuratie

### 1. Vercel CLI Installeren
```bash
npm i -g vercel
```

### 2. Project Linken
```bash
vercel link
```

### 3. Environment Variables Instellen
```bash
vercel env add NEXT_PUBLIC_APP_URL
vercel env add NEXT_PUBLIC_APP_NAME
```

## 🚀 Deployment Stappen

### Optie 1: GitHub Integration (Aanbevolen)

1. **Repository naar GitHub pushen**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Vercel Dashboard**
   - Ga naar [vercel.com](https://vercel.com)
   - Klik "New Project"
   - Import je GitHub repository
   - Vercel detecteert automatisch Next.js

3. **Build Settings**
   - Framework: **Next.js** (automatisch gedetecteerd)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Optie 2: Vercel CLI

```bash
# Eerste deployment
vercel

# Productie deployment
vercel --prod
```

## ⚙️ Build Optimalisaties

### 1. Next.js Configuratie
```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
};
```

### 2. Vercel.json
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "functions": {
    "app/[site]/sitemap.xml/route.ts": {
      "maxDuration": 10
    }
  }
}
```

## 🔍 Post-Deployment

### 1. Domain Configuratie
- **Custom Domain**: Voeg je eigen domein toe
- **SSL**: Automatisch via Vercel
- **CDN**: Wereldwijde edge caching

### 2. Performance Monitoring
- **Vercel Analytics**: Automatisch ingeschakeld
- **Core Web Vitals**: Real-time monitoring
- **Lighthouse**: Automatische performance tests

### 3. SEO Verificatie
- **Sitemap**: `/bolle-burger/sitemap.xml`
- **Robots**: `/bolle-burger/robots.txt`
- **Meta tags**: Automatisch gegenereerd

## 🌐 Multi-tenant URLs

Na deployment zijn je sites beschikbaar op:
- **Bolle Burger**: `https://your-domain.vercel.app/bolle-burger`
- **Garden Care**: `https://your-domain.vercel.app/garden-care`

## 📊 Monitoring & Analytics

### 1. Vercel Dashboard
- Real-time deployment status
- Performance metrics
- Error tracking

### 2. Google Analytics (Optioneel)
```typescript
// app/layout.tsx
export default function RootLayout() {
  return (
    <html>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      </head>
    </html>
  );
}
```

## 🚨 Troubleshooting

### Build Errors
```bash
# TypeScript errors
npm run type-check

# Linting errors
npm run lint

# Build errors
npm run build
```

### Common Issues
1. **Image errors**: Check `next.config.ts` remotePatterns
2. **Type errors**: Update types in `types.ts`
3. **Build timeout**: Check `vercel.json` maxDuration

## 📈 Performance Tips

1. **Image Optimization**: Gebruik `next/image`
2. **Code Splitting**: Automatisch via Next.js
3. **Static Generation**: Voor statische content
4. **Edge Caching**: Via Vercel CDN

## 🔐 Security

- **HTTPS**: Automatisch via Vercel
- **Security Headers**: Geconfigureerd in `next.config.ts`
- **CSP**: Content Security Policy
- **HSTS**: HTTP Strict Transport Security

---

**🎉 Je website is nu klaar voor productie!**

De multi-tenant website builder draait nu op Vercel met:
- ✅ Automatische deployments via GitHub
- ✅ Wereldwijde CDN
- ✅ SSL certificaten
- ✅ Performance monitoring
- ✅ SEO optimalisatie
