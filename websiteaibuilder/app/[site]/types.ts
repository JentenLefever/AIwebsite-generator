// Common types for the multi-tenant website builder

export interface HeroData {
  title: string;
  subtitle: string;
  cta: string;
  price?: string;
  badge?: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category?: string;
  image?: string;
  alt?: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

export interface ProjectItem {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
  alt: string;
  rating?: number;
}

export interface ContactData {
  address?: string;
  phone?: string;
  email?: string;
  openingHours?: string[];
  social?: {
    instagram?: string;
    facebook?: string;
  };
  whatsapp?: string;
  mapEmbed?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
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
  hero: HeroData;
  about: AboutData;
  menu?: MenuItem[];
  services?: ServiceItem[];
  projects?: ProjectItem[];
  testimonials: TestimonialItem[];
  faq?: FAQItem[];
  contact: ContactData;
  usps?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  events?: Array<{
    title: string;
    description: string;
    image: string;
    alt: string;
  }>;
}
