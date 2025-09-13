import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiebeleid | De Bolle Burger',
  description: 'Cookiebeleid van De Bolle Burger - Hoe wij cookies gebruiken op onze website.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Cookiebeleid
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-BE')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wat zijn cookies?</h2>
            <p className="text-gray-700 mb-6">
              Cookies zijn kleine tekstbestanden die worden opgeslagen op uw computer, tablet of smartphone wanneer u onze website bezoekt. 
              Ze helpen ons de website beter te laten werken en uw voorkeuren te onthouden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Welke cookies gebruiken wij?</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Noodzakelijke cookies</h3>
            <p className="text-gray-700 mb-4">
              Deze cookies zijn essentieel voor de werking van onze website en kunnen niet worden uitgeschakeld. 
              Ze zorgen ervoor dat de website correct functioneert en uw veiligheid waarborgen.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">
                <strong>Voorbeelden:</strong> sessie cookies, beveiligingscookies, cookie-consent cookies
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Analytische cookies</h3>
            <p className="text-gray-700 mb-4">
              Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken. 
              Ze verzamelen informatie over het aantal bezoekers, welke pagina's het meest worden bekeken en hoe lang bezoekers op de site blijven.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">
                <strong>Voorbeelden:</strong> Google Analytics, bezoekersstatistieken, prestaties metingen
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Marketing cookies</h3>
            <p className="text-gray-700 mb-4">
              Deze cookies worden gebruikt om gepersonaliseerde advertenties te tonen en de effectiviteit van marketingcampagnes te meten. 
              Ze kunnen ook worden gebruikt om uw interesses te volgen voor gerichte advertenties.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">
                <strong>Voorbeelden:</strong> Facebook Pixel, Google Ads, remarketing cookies
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hoe kunt u cookies beheren?</h2>
            <p className="text-gray-700 mb-4">
              U kunt uw cookie-voorkeuren op elk moment wijzigen:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Via de cookie-instellingen knop onderaan de pagina</li>
              <li>Via de instellingen van uw webbrowser</li>
              <li>Door contact met ons op te nemen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Browser instellingen</h3>
            <p className="text-gray-700 mb-4">
              U kunt cookies ook uitschakelen via de instellingen van uw webbrowser:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Chrome:</strong> Instellingen &gt; Privacy en beveiliging &gt; Cookies en andere sitegegevens</li>
              <li><strong>Firefox:</strong> Opties &gt; Privacy en beveiliging &gt; Cookies en sitegegevens</li>
              <li><strong>Safari:</strong> Voorkeuren &gt; Privacy &gt; Cookies en websitegegevens</li>
              <li><strong>Edge:</strong> Instellingen &gt; Cookies en site-machtigingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies van derden</h2>
            <p className="text-gray-700 mb-6">
              Onze website kan cookies van derden bevatten, zoals:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> voor website-analyse</li>
              <li><strong>Sociale media:</strong> voor het delen van content</li>
              <li><strong>Kaarten:</strong> voor het tonen van locaties</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Deze cookies vallen onder het privacybeleid van de respectievelijke derde partijen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gevolgen van het uitschakelen van cookies</h2>
            <p className="text-gray-700 mb-6">
              Als u cookies uitschakelt, kan dit gevolgen hebben voor de functionaliteit van onze website:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Sommige functies werken mogelijk niet correct</li>
              <li>Uw voorkeuren worden niet onthouden</li>
              <li>U krijgt mogelijk minder relevante advertenties te zien</li>
              <li>Wij kunnen de prestaties van de website niet optimaliseren</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              Voor vragen over ons cookiebeleid kunt u contact opnemen met:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>De Bolle Burger</strong><br />
                Stationsstraat 12<br />
                8500 Kortrijk<br />
                E-mail: info@debolleburger.be<br />
                Telefoon: +32 470 12 34 56
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dit cookiebeleid kan van tijd tot tijd worden bijgewerkt. Wij raden u aan deze pagina regelmatig te bezoeken voor eventuele wijzigingen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
