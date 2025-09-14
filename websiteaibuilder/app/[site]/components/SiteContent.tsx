'use client';

import { useState } from 'react';
import Hero from './Hero';
import MenuHighlights from './MenuHighlights';
import Testimonials from './Testimonials';
import Contact from './Contact';
import CMPBanner from './CMPBanner';
import CookieSettings from './CookieSettings';
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import Footer from './Footer';
import Formulas from './Formulas';
// Garden components
import GardenHero from './GardenHero';
import GardenNavigation from './GardenNavigation';
import GardenServices from './GardenServices';
import GardenProjects from './GardenProjects';
import GardenTestimonials from './GardenTestimonials';
import GardenAbout from './GardenAbout';
import GardenContact from './GardenContact';
import WhatsAppButton from './WhatsAppButton';
// Types
import type { SiteConfig } from '../types';

interface SiteContentProps {
  site: SiteConfig;
  isGardenSite: boolean;
}

export default function SiteContent({ site, isGardenSite }: SiteContentProps) {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <>
      <CMPBanner />
      <CookieSettings />
      
      {isGardenSite ? (
        <>
          <GardenNavigation />
          <GardenHero data={site.hero} />
          <GardenAbout data={site.about} />
          <GardenServices data={site.services || []} />
          <GardenProjects data={site.projects || []} />
          <GardenTestimonials data={site.testimonials} />
          <GardenContact data={site.contact} />
          <WhatsAppButton phone={site.contact?.whatsapp || ''} />
        </>
      ) : (
        <>
          <Navigation />
          <Hero data={site.hero} />
          <AboutSection data={site.about} />
          <MenuHighlights data={site.menu || []} />
          <Formulas />
          <Testimonials data={site.testimonials} />
          <Contact data={site.contact} />
          <Footer data={site.contact} onCookieSettingsClick={() => setShowCookieSettings(true)} />
        </>
      )}
      
      {/* Cookie Settings Modal */}
      <CookieSettings 
        isOpen={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />
    </>
  );
}
