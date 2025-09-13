'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
}

export default function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functional: true,
    analytical: false,
    marketing: false
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'functional') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent', 'given');
    setIsOpen(false);
    
    // Reload page to apply changes
    window.location.reload();
  };

  return (
    <>
      {/* Cookie Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 z-40"
      >
        🍪 Cookie-instellingen
      </button>

      {/* Cookie Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookie-instellingen
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Pas uw cookie-voorkeuren aan. U kunt uw keuzes op elk moment wijzigen.
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
                        Deze cookies zijn essentieel voor de werking van de website.
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
                        Deze cookies helpen ons de website te verbeteren.
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
                        Deze cookies worden gebruikt voor gepersonaliseerde advertenties.
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
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
                >
                  Annuleren
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors duration-200"
                >
                  Opslaan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

