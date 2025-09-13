import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  alt: string;
  rating?: number;
}

interface GardenTestimonialsProps {
  data: Testimonial[];
}

export default function GardenTestimonials({ data }: GardenTestimonialsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lees wat onze tevreden klanten over onze service zeggen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                {/* Stars */}
                {testimonial.rating && (
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                )}
                
                {/* Quote */}
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-green-600 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
