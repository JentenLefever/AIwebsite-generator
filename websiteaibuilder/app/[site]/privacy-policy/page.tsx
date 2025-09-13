import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacyverklaring | De Bolle Burger',
  description: 'Privacyverklaring van De Bolle Burger - Hoe wij uw gegevens beschermen en verwerken.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-BE')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Wie zijn wij?</h2>
            <p className="text-gray-700 mb-6">
              De Bolle Burger, gevestigd te Stationsstraat 12, 8500 Kortrijk, is verantwoordelijk voor de verwerking van uw persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de Belgische privacywetgeving.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="text-gray-700 mb-4">Wij verzamelen de volgende categorieën van persoonsgegevens:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer</li>
              <li><strong>Eventgegevens:</strong> datum, locatie, type event, aantal personen</li>
              <li><strong>Communicatiegegevens:</strong> berichten die u naar ons stuurt</li>
              <li><strong>Technische gegevens:</strong> IP-adres, browser type, bezoekgedrag (met uw toestemming)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Waarom verzamelen wij deze gegevens?</h2>
            <p className="text-gray-700 mb-4">Wij verwerken uw gegevens voor de volgende doeleinden:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Het verwerken van uw offerte-aanvragen en reserveringen</li>
              <li>Het leveren van onze foodtruck diensten</li>
              <li>Communicatie over uw event en onze diensten</li>
              <li>Het verbeteren van onze website en diensten (met uw toestemming)</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Rechtsgrond voor verwerking</h2>
            <p className="text-gray-700 mb-6">
              Wij verwerken uw gegevens op basis van:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Uitvoering van overeenkomst:</strong> voor het leveren van onze diensten</li>
              <li><strong>Toestemming:</strong> voor marketing en analytische cookies</li>
              <li><strong>Wettelijke verplichting:</strong> voor facturering en administratie</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Hoe lang bewaren wij uw gegevens?</h2>
            <p className="text-gray-700 mb-6">
              Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Klantgegevens:</strong> 7 jaar na laatste contact (wettelijke bewaarplicht)</li>
              <li><strong>Marketinggegevens:</strong> tot u uw toestemming intrekt</li>
              <li><strong>Analytische gegevens:</strong> maximaal 26 maanden</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Uw rechten</h2>
            <p className="text-gray-700 mb-4">U heeft de volgende rechten:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Inzagerecht:</strong> u kunt opvragen welke gegevens wij van u hebben</li>
              <li><strong>Rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren</li>
              <li><strong>Verwijdering:</strong> u kunt vragen om verwijdering van uw gegevens</li>
              <li><strong>Beperking:</strong> u kunt de verwerking beperken</li>
              <li><strong>Gegevensoverdraagbaarheid:</strong> u kunt uw gegevens ontvangen in een gestructureerd formaat</li>
              <li><strong>Bezwaar:</strong> u kunt bezwaar maken tegen verwerking</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Onze website gebruikt cookies om de functionaliteit te verbeteren en uw voorkeuren te onthouden. 
              U kunt uw cookie-instellingen op elk moment wijzigen via de cookie-instellingen knop onderaan de pagina.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-4">
              Voor vragen over deze privacyverklaring of uw gegevens kunt u contact opnemen met:
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

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Klachten</h2>
            <p className="text-gray-700 mb-6">
              Als u niet tevreden bent met hoe wij uw gegevens verwerken, kunt u een klacht indienen bij de 
              Gegevensbeschermingsautoriteit (GBA) via <a href="https://www.gegevensbeschermingsautoriteit.be" className="text-red-600 hover:text-red-700 underline">www.gegevensbeschermingsautoriteit.be</a>.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Deze privacyverklaring kan van tijd tot tijd worden bijgewerkt. Wij raden u aan deze pagina regelmatig te bezoeken voor eventuele wijzigingen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
