'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
}

export default function CMPBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functional: true, // Always true, can't be disabled
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');
    
    if (!hasConsent) {
      setShowBanner(true);
    } else if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      setPreferences(parsed);
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'given');
    localStorage.setItem('cookie-preferences', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
    
    // Load scripts based on preferences
    if (newPreferences.analytical) {
      console.log('Loading analytics scripts');
      // Load Google Analytics, etc.
    }
    if (newPreferences.marketing) {
      console.log('Loading marketing scripts');
      // Load Facebook Pixel, etc.
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      functional: true,
      analytical: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyFunctional = {
      functional: true,
      analytical: false,
      marketing: false
    };
    savePreferences(onlyFunctional);
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'functional') return; // Can't disable functional cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Cookie-instellingen
            </h2>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij gebruiken cookies om uw ervaring op onze website te verbeteren, onze diensten te analyseren en gepersonaliseerde content te tonen. 
              Sommige cookies zijn noodzakelijk voor de werking van de website, andere helpen ons de website te verbeteren.
            </p>
            <p className="text-sm text-gray-600">
              U kunt uw voorkeuren hieronder aanpassen. Meer informatie vindt u in onze{' '}
              <a href="/privacy-policy" className="text-red-600 hover:text-red-700 underline">
                privacyverklaring
              </a>{' '}
              en{' '}
              <a href="/cookie-policy" className="text-red-600 hover:text-red-700 underline">
                cookiebeleid
              </a>.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            {/* Functional Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Noodzakelijke cookies</h3>
                  <p className="text-sm text-gray-600">
                    Deze cookies zijn essentieel voor de werking van de website en kunnen niet worden uitgeschakeld.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-red-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytical Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Analytische cookies</h3>
                  <p className="text-sm text-gray-600">
                    Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => togglePreference('analytical')}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-200 ${
                      preferences.analytical ? 'bg-red-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Marketing cookies</h3>
                  <p className="text-sm text-gray-600">
                    Deze cookies worden gebruikt om gepersonaliseerde advertenties te tonen.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-200 ${
                      preferences.marketing ? 'bg-red-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
            >
              Alleen noodzakelijke cookies
            </button>
            <button
              onClick={handleSaveSettings}
              className="flex-1 px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              Mijn keuzes opslaan
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors duration-200"
            >
              Alles accepteren
            </button>
          </div>

          {/* Legal Notice */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Door deze website te gebruiken, gaat u akkoord met ons gebruik van cookies in overeenstemming met de Belgische privacywetgeving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
