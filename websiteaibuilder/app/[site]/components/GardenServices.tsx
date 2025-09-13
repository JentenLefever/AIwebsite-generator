import Image from 'next/image';

interface Service {
  name: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

interface GardenServicesProps {
  data: Service[];
}

export default function GardenServices({ data }: GardenServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Onze diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Van grasmaaien tot snoeien, wij zorgen voor al uw tuinonderhoud. 
            Professioneel, betrouwbaar en altijd op tijd.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Vraag offerte aan
          </a>
        </div>
      </div>
    </section>
  );
}
