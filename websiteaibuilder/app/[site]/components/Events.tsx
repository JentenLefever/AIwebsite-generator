import Image from 'next/image';

interface Event {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface EventsProps {
  data: Event[];
}

export default function Events({ data }: EventsProps) {
  return (
    <section id="bedrijven" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'OriginalBurger, sans-serif' }}>
            Laten we afspreken!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bij De Bolle Burger vinden we het belangrijk dat jouw evenement slaagt. Wij ontzorgen je door de catering te voorzien, van huwelijken, verjaardagen en tuinfeesten tot babyborrels of een ander privéfeest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From business to burgers
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Onze mighty burgers op uw bedrijfsfeest -of receptie? Met onze hamburger foodtruck schotelen we uw werknemers of klanten de lekkerste & authentieke burgers voor. We denken graag met je mee voor een volledig op maat gemaakte formule.
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              bedrijfsformules
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
