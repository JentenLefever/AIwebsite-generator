interface StructuredDataProps {
  siteData: {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    openingHours: string[];
    menuItems: Array<{
      name: string;
      description: string;
      price: string;
      category: string;
    }>;
  };
}

export default function StructuredData({ siteData }: StructuredDataProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteData.name,
    "url": `https://bolle-burger.websiteaibuilder.com`,
    "description": siteData.meta.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://bolle-burger.websiteaibuilder.com/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.name,
    "url": `https://bolle-burger.websiteaibuilder.com`,
    "logo": `https://bolle-burger.websiteaibuilder.com/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.contact.phone,
      "contactType": "customer service",
      "email": siteData.contact.email
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stationsstraat 12",
      "addressLocality": "Kortrijk",
      "postalCode": "8500",
      "addressCountry": "BE"
    },
    "sameAs": [
      siteData.contact.social.instagram,
      siteData.contact.social.facebook
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": siteData.name,
    "description": siteData.meta.description,
    "url": `https://bolle-burger.websiteaibuilder.com`,
    "telephone": siteData.contact.phone,
    "email": siteData.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stationsstraat 12",
      "addressLocality": "Kortrijk",
      "postalCode": "8500",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8282",
      "longitude": "3.2649"
    },
    "openingHours": "Mo-Su 09:00-22:00",
    "servesCuisine": "Belgian",
    "priceRange": "€€",
    "hasMenu": {
      "@type": "Menu",
      "name": "De Bolle Burger Menu",
      "description": "Ambachtelijke hamburgers en streetfood",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Burgers",
          "description": "Onze populairste hamburgers",
          "hasMenuItem": siteData.menu.map((item: any) => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description
          }))
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteData.faq.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
