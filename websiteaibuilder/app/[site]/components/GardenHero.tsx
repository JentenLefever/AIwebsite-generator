import Image from 'next/image';

interface GardenHeroProps {
  data: {
    title: string;
    subtitle: string;
    cta: string;
    badge: string;
    backgroundImage: string;
    backgroundAlt: string;
  };
}

export default function GardenHero({ data }: GardenHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage}
          alt={data.backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Green overlay for better text readability */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-lg font-bold mb-8 shadow-lg">
          {data.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {data.cta}
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Onze diensten
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
