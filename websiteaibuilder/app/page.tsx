import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
          Website AI Builder
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Multi-tenant website generator voor verschillende bedrijven
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bolle Burger */}
          <Link 
            href="/bolle-burger"
            className="group bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🍔</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
                De Bolle Burger
              </h2>
              <p className="text-gray-600 mb-6">
                Gourmet hamburger foodtruck voor events, huwelijken en bedrijfsevents
              </p>
              <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-red-600 transition-colors">
                Bekijk website →
              </div>
            </div>
          </Link>

          {/* Garden Care */}
          <Link 
            href="/garden-care"
            className="group bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🌱</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
                Garden Care Pro
              </h2>
              <p className="text-gray-600 mb-6">
                Professioneel tuinonderhoud voor particulieren en bedrijven
              </p>
              <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-green-600 transition-colors">
                Bekijk website →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Kies een website om te bekijken
          </p>
        </div>
      </div>
    </div>
  );
}