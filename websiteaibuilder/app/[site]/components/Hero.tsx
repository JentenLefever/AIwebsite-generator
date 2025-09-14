'use client';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    cta: string;
    price?: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src="/media/Bolle Burger/black-burgers-and-fries-with-sauce-1080p-2025-08-28-13-57-18-utc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-5"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Text Content */}
          <div className="text-white space-y-8 max-w-4xl mx-auto">
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-sink">
                <span className="block text-white">PREMIUM BURGERS</span>
                <span className="block text-red-500">FOODTRUCK</span>
                <span className="block text-white">VOOR UW EVENT</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto text-center">
                Onze foodtruck brengt verse, ambachtelijke burgers naar uw evenement. 
                Perfect voor huwelijken, bedrijfsevents, festivals en privéfeesten.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
              >
                {data.cta}
              </a>
              <a
                href="#burgers"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors duration-200 hover:bg-white hover:text-red-600 text-center"
              >
                Bekijk Menu
              </a>
            </div>
            
            {/* Google Rating Widget */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 max-w-xs mx-auto text-center opacity-80">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white/80 font-medium text-xs">G</span>
                </div>
                <span className="text-white/70 text-sm font-medium">Google Beoordeling</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl font-semibold text-white/90">4.9</span>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-300/80" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
            aria-label="Scroll naar beneden"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}