import { Metadata } from 'next';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CMPBanner from './components/CMPBanner';
import CookieSettings from './components/CookieSettings';
import StructuredData from './components/StructuredData';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Formulas from './components/Formulas';

interface PageProps {
  params: {
    site: string;
  };
}

interface SiteConfig {
  name: string;
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
    openingHours?: string[];
  };
  menu?: Array<{
    name: string;
    description: string;
    price: string;
    category?: string;
    image?: string;
    alt?: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  // Add other properties as needed
  [key: string]: unknown;
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
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hamburger met brioche broodje en cheddar'
      },
      {
        name: 'Spicy Smash',
        description: 'smashburger met jalapeños en pittige mayo',
        image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Pittige hamburger met jalapeños'
      },
      {
        name: 'Veggie Delight',
        description: 'plantaardige burger met gegrilde groenten',
        image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Vegetarische burger met gegrilde groenten'
      },
      {
        name: 'Cheese Overload',
        description: 'dubbel cheddar met crispy bacon',
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
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = siteConfigs[params.site];
  
  if (!site) {
    return {
      title: 'Site not found',
      description: 'The requested site could not be found.'
    };
  }

  return {
    title: site.meta.title,
    description: site.meta.description,
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

export default function SitePage({ params }: PageProps) {
  const site = siteConfigs[params.site];
  
  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Site not found</h1>
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
    menuItems: site.menu?.map((item: { name: string; description: string; price: string; category?: string }) => ({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category || "Burgers"
    })) || [],
    faq: site.faq || [],
    contact: site.contact
  };

  return (
    <div className="min-h-screen">
      <StructuredData siteData={structuredData} />
      <CMPBanner />
      <CookieSettings />
      <Navigation />
      <Hero data={site.hero} />
      <AboutSection data={site.about} />
      <MenuHighlights data={site.menu} />
      <Formulas />
      <Testimonials data={site.testimonials} />
      <Contact data={site.contact} />
      <Footer data={site.contact} />
    </div>
  );
}
