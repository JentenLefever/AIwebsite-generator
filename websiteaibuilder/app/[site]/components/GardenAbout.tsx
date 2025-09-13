import Image from 'next/image';

interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

interface GardenAboutProps {
  data: AboutData;
}

export default function GardenAbout({ data }: GardenAboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
              {data.title}
            </h2>
            <h3 className="text-2xl text-green-600 font-semibold mb-6">
              {data.subtitle}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.description}
            </p>
            
            {/* Team Card */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{data.name}</h4>
                  <p className="text-green-600">{data.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
