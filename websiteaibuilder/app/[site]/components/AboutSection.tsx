interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  name: string;
  role: string;
}

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="over-ons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meet Bolle Burger Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sink">
              {data.title}
            </h2>
            <h3 className="text-2xl text-red-600 font-semibold mb-6">
              {data.subtitle}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{data.name}</h4>
                  <p className="text-gray-600">{data.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
