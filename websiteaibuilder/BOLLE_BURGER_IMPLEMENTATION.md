# De Bolle Burger Onepager Implementation

## Overview
This implementation creates a complete onepager template for "De Bolle Burger", a foodtruck specializing in artisanal hamburgers. The template is fully clonable and follows the multi-tenant architecture specified in the project requirements.

## Features Implemented

### ✅ Routing
- Subfolder routing: `/bolle-burger`
- Dynamic site resolution via `[site]` parameter
- SEO-friendly URLs

### ✅ Sections
1. **Hero Section**
   - Compelling headline and subtitle
   - Call-to-action button
   - Background image with overlay
   - Scroll indicator

2. **USP Section**
   - 4 key benefits with icons
   - Responsive grid layout
   - Hover animations

3. **Menu Highlights**
   - 4 popular burger items
   - High-quality images
   - Descriptive text

4. **Events Section**
   - 3 event categories (weddings, corporate, festivals)
   - Visual cards with descriptions

5. **Testimonials**
   - 3 customer reviews
   - Customer photos and roles
   - Trust-building content

6. **FAQ Section**
   - 5 frequently asked questions
   - Collapsible interface
   - SEO-optimized content

7. **Contact & Offerte**
   - Comprehensive contact form
   - NAP (Name, Address, Phone) data
   - Social media links
   - Google Maps embed
   - Form validation

### ✅ SEO Implementation
- Meta titles and descriptions
- Open Graph tags
- Twitter Card support
- JSON-LD structured data:
  - Website schema
  - Organization schema
  - LocalBusiness schema
  - FAQPage schema
- Canonical URLs
- Sitemap.xml generation
- Robots.txt generation

### ✅ GDPR/CMP Compliance
- Cookie consent banner
- Consent categories (functional, analytical, marketing)
- Local storage for consent tracking
- Consent Mode v2 ready

### ✅ Technical Features
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- Image optimization
- Smooth scrolling
- Focus management
- Accessibility features

## File Structure
```
app/
├── [site]/
│   ├── page.tsx                 # Main site page
│   ├── components/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── USP.tsx             # USP section
│   │   ├── MenuHighlights.tsx  # Menu section
│   │   ├── Events.tsx          # Events section
│   │   ├── Testimonials.tsx    # Testimonials section
│   │   ├── FAQ.tsx             # FAQ section
│   │   ├── Contact.tsx         # Contact form
│   │   ├── CMPBanner.tsx       # Cookie banner
│   │   └── StructuredData.tsx  # JSON-LD schemas
│   ├── sitemap.xml/
│   │   └── route.ts            # Sitemap generator
│   └── robots.txt/
│       └── route.ts            # Robots.txt generator
├── globals.css                 # Global styles
└── layout.tsx                  # Root layout
```

## Usage

### Access the Site
Visit: `http://localhost:3000/bolle-burger`

### Cloning to Other Sites
To create a new site (e.g., `/bakkerij`), simply:
1. Add a new entry to the `siteConfigs` object in `app/[site]/page.tsx`
2. Update the content, images, and contact information
3. The routing will automatically work

### Customization
All content is data-driven through the `siteConfigs` object, making it easy to:
- Change text content
- Update images
- Modify contact information
- Adjust SEO settings
- Add/remove sections

## SEO Features
- **Meta Tags**: Optimized titles and descriptions
- **Structured Data**: Rich snippets for better search visibility
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevents duplicate content issues
- **Open Graph**: Social media sharing optimization

## Performance
- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle
- CSS-only animations where possible
- Responsive images

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly interface
- Keyboard navigation support

## Next Steps
1. Add real images to replace Unsplash placeholders
2. Implement form submission handling
3. Add analytics integration
4. Set up custom domain mapping
5. Add more site templates
6. Implement AI content generation (Phase 2)

## Testing
- Run `npm run dev` to start development server
- Visit `/bolle-burger` to see the site
- Test responsive design on different screen sizes
- Verify SEO meta tags in browser dev tools
- Check structured data with Google's Rich Results Test
