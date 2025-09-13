'use client';

import { useState } from 'react';

interface ContactData {
  address?: string;
  phone?: string;
  email?: string;
  social?: {
    instagram?: string;
    facebook?: string;
  };
  mapEmbed?: string;
}

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    guests: '',
    location: '',
    formula: '',
    message: '',
    isCompany: false,
    companyName: '',
    vatNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Handle final form submission here
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const nextStep = () => {
    if (formData.eventType && formData.guests && formData.formula) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const isStep1Valid = formData.eventType && formData.guests && formData.formula;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Laten we contact opnemen!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Benieuwd naar onze avonturen? Laat van je horen en wij rijden tot bij jou!
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
              currentStep >= 1 ? 'bg-red-600' : 'bg-gray-300'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-red-600' : 'bg-gray-300'}`}></div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
              currentStep >= 2 ? 'bg-red-600' : 'bg-gray-300'
            }`}>
              2
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-16">
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
              Event Details
            </span>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
              Persoonlijke Gegevens
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {currentStep === 1 ? (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Vertel ons over uw event
                </h3>
                <p className="text-gray-600">
                  We hebben wat basisinformatie nodig om een perfecte offerte voor u te maken
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type event *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    >
                      <option value="">Kies het type event</option>
                      <option value="huwelijk">💒 Huwelijk</option>
                      <option value="bedrijfsevent">🏢 Bedrijfsevent</option>
                      <option value="festival">🎪 Festival</option>
                      <option value="verjaardag">🎂 Verjaardag</option>
                      <option value="ander">🎉 Ander</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Aantal personen *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      required
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Bijv. 50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewenste datum
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      style={{ colorScheme: 'light' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Locatie event
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Stad, adres of locatie"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="formula" className="block text-sm font-medium text-gray-700 mb-2">
                    Welke formule spreekt u aan? *
                  </label>
                  <select
                    id="formula"
                    name="formula"
                    required
                    value={formData.formula}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  >
                    <option value="">Kies uw voorkeur</option>
                    <option value="all-you-can-eat">🍽️ All You Can Eat - €25 per persoon</option>
                    <option value="pay-per-burger">🍔 Betaal per burger - €12 per burger</option>
                    <option value="niet-zeker">🤔 Nog niet zeker, graag advies</option>
                  </select>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStep1Valid}
                    className={`w-full py-4 px-8 rounded-lg text-lg font-bold transition-all duration-200 ${
                      isStep1Valid 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Volgende stap →
                  </button>
                </div>
              </form>
            </div>
          ) : (
          <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Uw persoonlijke gegevens
                </h3>
                <p className="text-gray-600">
                  Help ons om contact met u op te nemen en de perfecte offerte te maken
                </p>
              </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Uw naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Voer uw volledige naam in"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="uw.email@voorbeeld.nl"
                  />
                </div>
              </div>
              
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="+32 474 81 37 01"
                  />
                </div>

                {/* Company Checkbox */}
                <div>
                  <label className="flex items-center space-x-3">
                  <input
                      type="checkbox"
                      name="isCompany"
                      checked={formData.isCompany}
                    onChange={handleChange}
                      className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                    <span className="text-sm font-medium text-gray-700">
                      Ik ben een bedrijf
                    </span>
                  </label>
              </div>
              
                {/* Company Fields - Only show if checkbox is checked */}
                {formData.isCompany && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrijfsnaam *
                  </label>
                  <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                    onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Voer uw bedrijfsnaam in"
                  />
                </div>
              <div>
                      <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        BTW nummer
                </label>
                <input
                  type="text"
                        id="vatNumber"
                        name="vatNumber"
                        value={formData.vatNumber}
                  onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="BE0123456789"
                />
              </div>
                  </div>
                )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Extra informatie & wensen
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Vertel ons meer over uw event, speciale wensen, dieetwensen, etc..."
                />
              </div>
              
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 px-8 rounded-lg text-lg font-bold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                  >
                    ← Vorige stap
                  </button>
              <button
                type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                    Verstuur Aanvraag ✨
              </button>
                </div>
            </form>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}