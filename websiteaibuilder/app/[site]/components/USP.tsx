interface USPProps {
  data: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function USP({ data }: USPProps) {
  return (
    <section id="formules" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Waarom Bolle Burger?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((usp, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-8">
              <div className="text-6xl mb-6">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {usp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
