'use client';

import { useState, useEffect } from 'react';

export default function CMPBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    setConsentGiven(true);
    // Here you would typically load analytics scripts
    console.log('Consent given - loading analytics');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Only load essential cookies
    console.log('Consent declined - only essential cookies');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cookie-instellingen
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl">
              We gebruiken cookies om uw ervaring te verbeteren, onze website te analyseren en gepersonaliseerde content te tonen. 
              U kunt uw voorkeuren beheren via de instellingen hieronder.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleDecline}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Alleen noodzakelijk
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
            >
              Alles accepteren
            </button>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
            <div>
              <strong>Functioneel:</strong> Noodzakelijk voor de werking van de website
            </div>
            <div>
              <strong>Analytisch:</strong> Helpt ons de website te verbeteren
            </div>
            <div>
              <strong>Marketing:</strong> Voor gepersonaliseerde advertenties
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
