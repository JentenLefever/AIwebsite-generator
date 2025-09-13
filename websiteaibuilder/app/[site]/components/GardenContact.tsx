'use client';

import { useState } from 'react';

interface ContactData {
  address?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  mapEmbed?: string;
}

interface GardenContactProps {
  data: ContactData;
}

export default function GardenContact({ data }: GardenContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = `Hallo! Ik ben geïnteresseerd in jullie tuinonderhoud diensten. Kunnen jullie contact met mij opnemen?`;
    const phone = data.whatsapp?.replace(/[^0-9]/g, '') || '';
    if (phone) {
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Uw tuin, onze zorg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vraag vandaag nog een vrijblijvende offerte aan en geniet van een zorgeloze tuin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vraag gratis offerte aan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Soort dienst
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecteer dienst</option>
                    <option value="gras-maaien">Gras maaien & gazononderhoud</option>
                    <option value="snoeien">Snoeien & boomverzorging</option>
                    <option value="onkruidbestrijding">Onkruidbestrijding & bemesting</option>
                    <option value="heggen">Heggen & hagen knippen</option>
                    <option value="aanplanting">Aanplanting & seizoensonderhoud</option>
                    <option value="winteronderhoud">Winteronderhoud</option>
                    <option value="ander">Andere</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Vertel ons meer over uw tuin en wensen..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Verstuur aanvraag
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
              
              <div className="space-y-4">
                {data.address && (
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Adres</p>
                      <p className="text-gray-600">{data.address}</p>
                    </div>
                  </div>
                )}
                
                {data.phone && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Telefoon</p>
                      <a href={`tel:${data.phone}`} className="text-green-600 hover:text-green-700">
                        {data.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                {data.email && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <a href={`mailto:${data.email}`} className="text-green-600 hover:text-green-700">
                        {data.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Snelle contact via WhatsApp</h4>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp ons</span>
              </button>
            </div>
            
            {/* Map */}
            {data.mapEmbed && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Onze locatie</h4>
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={data.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Garden Care Pro locatie"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
