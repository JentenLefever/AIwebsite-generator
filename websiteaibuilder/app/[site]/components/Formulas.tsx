export default function Formulas() {
  return (
    <section id="formules" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'OriginalBurger, sans-serif' }}>
            Onze formules
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kies de formule die het beste past bij jouw event. Beide formules bieden keuze uit 3 verschillende burgers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* All You Can Eat Formula */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
                ∞
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">All You Can Eat</h3>
              <p className="text-lg text-gray-600">Onbeperkt genieten</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">€25</div>
                <div className="text-gray-600">per persoon</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Onbeperkt eten van alle burgers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Keuze uit 3 verschillende burgers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Frietjes en sauzen inbegrepen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Perfect voor grote groepen</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-red-200">
                <p className="text-sm text-gray-600 text-center">
                  Minimum 20 personen • 3 uur service
                </p>
              </div>
            </div>
          </div>

          {/* Pay Per Burger Formula */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-600 text-white rounded-full text-2xl font-bold mb-4">
                🍔
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Betaal per burger</h3>
              <p className="text-lg text-gray-600">Flexibel en voordelig</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">€12</div>
                <div className="text-gray-600">per burger</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Keuze uit 3 verschillende burgers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Frietjes en sauzen inbegrepen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ideaal voor kleinere groepen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Geen minimum aantal personen</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Geen minimum • 2 uur service
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
