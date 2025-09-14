import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from './components/StructuredData';
import SiteContent from './components/SiteContent';
// Types
import type { SiteConfig } from './types';

interface PageProps {
  params: Promise<{
    site: string;
  }>;
}

// SiteConfig interface is now imported from types.ts

// Generate static params for all sites
export async function generateStaticParams() {
  return [
    { site: 'bolle-burger' },
    { site: 'garden-care' }
  ];
}

// Site configuration data - in a real app this would come from a database
const siteConfigs: Record<string, SiteConfig> = {
  'bolle-burger': {
    name: 'De Bolle Burger',
    slug: 'bolle-burger',
    meta: {
      title: 'Foodtruck hamburgers huren | De Bolle Burger',
      description: 'De Bolle Burger serveert ambachtelijke hamburgers op uw feest of event. Boek onze foodtruck voor huwelijken, bedrijfsevents of festivals in Vlaanderen.',
      keywords: 'foodtruck, hamburgers, catering, feest, event, huwelijk, bedrijfsevent, festival, Kortrijk, Vlaanderen',
      ogTitle: 'De Bolle Burger – Foodtruck voor elk feest',
      ogDescription: 'Ambachtelijke hamburgers, streetfood vibes, 100% sfeer.',
      ogImage: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    hero: {
      title: 'Gourmet hamburger foodtruck',
      subtitle: 'Met onze gourmet hamburger foodtruck hebben we een duidelijke missie: de lekkerste burgers serveren bij je thuis, op jouw event of bedrijfsevent. Dankzij onze ultraverse ingrediënten van lokale producenten geven we je smaakpapillen een onvergetelijke ervaring.',
      cta: 'nu boeken',
      price: 'Ter plaatse vanaf € 750',
      backgroundImage: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      backgroundAlt: 'Foodtruck De Bolle Burger serveert hamburgers op een event'
    },
    usps: [
      {
        icon: '🥩',
        title: 'Vers & lokaal',
        description: 'Onze burgers zijn gemaakt van 100% Belgisch rundsvlees.'
      },
      {
        icon: '🚚',
        title: 'Flexibel',
        description: 'We rijden naar elk feest of festival in Vlaanderen.'
      },
      {
        icon: '🌶️',
        title: 'Smaakvol',
        description: 'Bekend om onze geheime saus en krokante brioche buns.'
      },
      {
        icon: '⚡',
        title: 'Snel & gezellig',
        description: 'Ideaal voor events tot 300 personen.'
      }
    ],
    menu: [
      {
        name: 'Classic Bolle',
        description: 'rundsburger, cheddar, sla, tomaat, saus',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hamburger met brioche broodje en cheddar'
      },
      {
        name: 'Spicy Smash',
        description: 'smashburger met jalapeños en pittige mayo',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Pittige hamburger met jalapeños'
      },
      {
        name: 'Veggie Delight',
        description: 'plantaardige burger met gegrilde groenten',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Vegetarische burger met gegrilde groenten'
      },
      {
        name: 'Cheese Overload',
        description: 'dubbel cheddar met crispy bacon',
        price: '€15',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hamburger met dubbele cheddar en bacon'
      }
    ],
    events: [
      {
        title: 'Huwelijken',
        description: 'Maak uw huwelijksfeest compleet met onze foodtruck',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Foodtruck op huwelijksfeest'
      },
      {
        title: 'Bedrijfsevents',
        description: 'Trakteer uw team of klanten op streetfood',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Foodtruck op bedrijfsevent'
      },
      {
        title: 'Festivals',
        description: 'Van kleine dorpsfeesten tot grote festivals',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Foodtruck op festival'
      }
    ],
    testimonials: [
      {
        quote: 'Onze gasten praten nog steeds over de burgers op ons trouwfeest!',
        author: 'Sophie',
        role: 'Huwelijk',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Sophie, tevreden klant'
      },
      {
        quote: 'Snelle service en topkwaliteit. Ideaal voor ons bedrijfsevent.',
        author: 'Tom',
        role: 'HR Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Tom, HR Manager'
      },
      {
        quote: 'Beste festivalburger die ik ooit gegeten heb.',
        author: 'Jan',
        role: 'Festivalganger',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Jan, festivalganger'
      }
    ],
    faq: [
      {
        question: 'Wat kost het huren van De Bolle Burger?',
        answer: 'Tarieven starten vanaf €600, afhankelijk van aantal personen en menu-opties.'
      },
      {
        question: 'Reizen jullie heel Vlaanderen door?',
        answer: 'Ja, we bedienen alle regio\'s in Vlaanderen en Brussel.'
      },
      {
        question: 'Zijn er vegetarische opties?',
        answer: 'Ja, onze "Veggie Delight" is een publieksfavoriet.'
      },
      {
        question: 'Kunnen jullie ook halal aanbieden?',
        answer: 'Ja, dit kan op aanvraag.'
      },
      {
        question: 'Wat is de maximumcapaciteit?',
        answer: 'Tot 300 personen per event.'
      }
    ],
    about: {
      title: 'Meet De Bolle Burger',
      subtitle: 'De man achter De Bolle Burger? Dat is Aminrokh Calhori.',
      description: 'Aminrokh startte in 2020 met liefde & passie zijn gastronomisch avontuur. Met zijn hamburger foodtruck serveert hij de meest verse en kwalitatieve gourmet burgers om vingers en duimen af te likken op jouw privéfeest of B2B event.',
      name: 'Aminrokh Calhori',
      role: 'Uitbater & Chef',
      image: '/media/Bolle Burger/happy-multiracial-people-buying-meal-from-food-tru-2024-11-27-17-25-43-utc.jpg',
      imageAlt: 'Aminrokh Calhori, uitbater van De Bolle Burger'
    },
    contact: {
      address: 'Harelbeke Bavikhove',
      phone: '+32 474 81 37 01',
      email: 'info@debolleburger.be',
      social: {
        instagram: 'https://instagram.com/debolleburger',
        facebook: 'https://facebook.com/debolleburger'
      },
      mapEmbed: 'https://www.google.com/maps/embed?pb=...' // Replace with actual embed URL
    }
  },
  'garden-care': {
    name: 'Garden Care Pro',
    slug: 'garden-care',
    meta: {
      title: 'Professioneel tuinonderhoud | Garden Care Pro',
      description: 'Professioneel tuinonderhoud voor particulieren en bedrijven. Gras maaien, snoeien, onkruidbestrijding en meer. Vraag gratis offerte aan!',
      keywords: 'tuinonderhoud, grasmaaien, snoeien, onkruidbestrijding, hagen knippen, tuinverzorging, Kortrijk, Waregem',
      ogTitle: 'Garden Care Pro – Uw tuin, onze zorg',
      ogDescription: 'Professioneel tuinonderhoud met meer dan 10 jaar ervaring. Laat uw tuin het hele jaar door stralen.',
      ogImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    hero: {
      title: 'Professioneel tuinonderhoud voor elke tuin',
      subtitle: 'Laat uw tuin het hele jaar door stralen – zonder zorgen.',
      cta: 'Vraag gratis offerte aan',
      badge: 'Meer dan 10 jaar ervaring',
      backgroundImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      backgroundAlt: 'Professioneel onderhouden tuin met groen gras en verzorgde planten'
    },
    usps: [
      {
        icon: '✅',
        title: 'Betrouwbare service op maat',
        description: 'Wij passen onze diensten aan aan uw specifieke behoeften en wensen.'
      },
      {
        icon: '✅',
        title: 'Meer dan 10 jaar ervaring',
        description: 'Onze expertise en ervaring zorgen voor het beste resultaat.'
      },
      {
        icon: '✅',
        title: 'Transparante prijzen',
        description: 'Geen verborgen kosten, altijd eerlijke en duidelijke prijzen.'
      },
      {
        icon: '✅',
        title: 'Altijd een verzorgde tuin',
        description: 'Regelmatig onderhoud zorgt voor een tuin die er altijd piekfijn uitziet.'
      }
    ],
    services: [
      {
        name: 'Gras maaien & gazononderhoud',
        description: 'Professioneel grasmaaien, verticuteren en bemesting voor een perfect gazon',
        icon: '🌱',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Gras maaien en gazononderhoud'
      },
      {
        name: 'Snoeien & boomverzorging',
        description: 'Expert snoeiwerk voor bomen, struiken en hagen',
        icon: '🌳',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Snoeien en boomverzorging'
      },
      {
        name: 'Onkruidbestrijding & bemesting',
        description: 'Effectieve onkruidbestrijding en professionele bemesting',
        icon: '🌿',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Onkruidbestrijding en bemesting'
      },
      {
        name: 'Heggen & hagen knippen',
        description: 'Precisie knippen van heggen en hagen voor een strakke uitstraling',
        icon: '✂️',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Heggen en hagen knippen'
      },
      {
        name: 'Aanplanting & seizoensonderhoud',
        description: 'Nieuwe aanplantingen en seizoensgebonden tuinonderhoud',
        icon: '🌺',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Aanplanting en seizoensonderhoud'
      },
      {
        name: 'Winteronderhoud',
        description: 'Speciale winterbehandelingen en bescherming van uw tuin',
        icon: '❄️',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Winteronderhoud van tuinen'
      }
    ],
    projects: [
      {
        title: 'Voor & Na transformatie',
        beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        afterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Complete tuintransformatie in Waregem'
      },
      {
        title: 'Gazonrenovatie',
        beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        afterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Gazonrenovatie en onderhoud'
      },
      {
        title: 'Heggenonderhoud',
        beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        afterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Professioneel heggenonderhoud'
      }
    ],
    testimonials: [
      {
        quote: 'Onze tuin ligt er altijd piekfijn bij. Betrouwbare en vriendelijke service!',
        author: 'Familie De Smet',
        role: 'Waregem',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Familie De Smet, tevreden klant',
        rating: 5
      },
      {
        quote: 'Professioneel werk en altijd op tijd. Onze tuin ziet er fantastisch uit!',
        author: 'Jan Vandenberghe',
        role: 'Kortrijk',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Jan Vandenberghe, tevreden klant',
        rating: 5
      },
      {
        quote: 'Zeer tevreden over de service. Onze bedrijfstuin ziet er altijd verzorgd uit.',
        author: 'Marie Dubois',
        role: 'Gent',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Marie Dubois, tevreden klant',
        rating: 5
      }
    ],
    about: {
      title: 'Waarom kiezen voor ons?',
      subtitle: 'Uw tuin, onze passie',
      description: 'Met meer dan 10 jaar ervaring in tuinonderhoud zorgen wij ervoor dat uw tuin er altijd op zijn best uitziet. Ons team van ervaren tuiniers gebruikt de beste technieken en materialen om uw groene ruimte te onderhouden.',
      name: 'Garden Care Pro Team',
      role: 'Professionele tuiniers',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Garden Care Pro team aan het werk'
    },
    contact: {
      address: 'Groenstraat 15, 8500 Kortrijk',
      phone: '+32 470 98 76 54',
      email: 'info@gardencarepro.be',
      whatsapp: '+32 470 98 76 54',
      mapEmbed: 'https://www.google.com/maps/embed?pb=...'
    }
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { site: siteSlug } = await params;
  const site = siteConfigs[siteSlug];
  
  if (!site) {
    return {
      title: 'Site not found',
      description: 'The requested site could not be found.'
    };
  }

  return {
    title: site.meta.title,
    description: site.meta.description,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    openGraph: {
      title: site.meta.ogTitle,
      description: site.meta.ogDescription,
      images: site.meta.ogImage ? [site.meta.ogImage] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: site.meta.ogTitle,
      description: site.meta.ogDescription,
      images: site.meta.ogImage ? [site.meta.ogImage] : [],
    },
    alternates: {
      canonical: `https://bolle-burger.websiteaibuilder.com`,
    },
  };
}

export default async function SitePage({ params }: PageProps) {
  const { site: siteSlug } = await params;
  const site = siteConfigs[siteSlug];
  
  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Site niet gevonden</h1>
          <p className="text-gray-600 mb-8">De gevraagde website bestaat niet.</p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Terug naar hoofdpagina
          </Link>
        </div>
      </div>
    );
  }

  // Create structured data object
  const structuredData = {
    name: site.name,
    meta: {
      description: site.meta.description,
    },
    address: site.contact?.address || "Stationsstraat 12, 8500 Kortrijk",
    phone: site.contact?.phone || "+32 123 456 789",
    email: site.contact?.email || "info@bolleburger.be",
    openingHours: site.contact?.openingHours || ["Mo-Su 09:00-22:00"],
    menuItems: site.menu?.map((item: { name: string; description: string; price?: string; category?: string }) => ({
      name: item.name,
      description: item.description,
      price: item.price || "Op aanvraag",
      category: item.category || "Burgers"
    })) || [],
    faq: site.faq || [],
    contact: site.contact
  };

  // Check if this is the garden site
  const isGardenSite = siteSlug === 'garden-care';

  return (
    <div className="min-h-screen">
      <StructuredData siteData={structuredData} />
      <SiteContent site={site} isGardenSite={isGardenSite} />
    </div>
  );
}
