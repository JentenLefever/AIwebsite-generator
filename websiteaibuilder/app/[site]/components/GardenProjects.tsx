import Image from 'next/image';

interface Project {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface GardenProjectsProps {
  data: Project[];
}

export default function GardenProjects({ data }: GardenProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-greet-burger), sans-serif' }}>
            Voor & Na – het verschil is duidelijk
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bekijk hoe wij tuinen transformeren. Van verwaarloosd naar prachtig onderhouden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative h-64">
                    <Image
                      src={project.beforeImage}
                      alt={`Voor: ${project.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      VOOR
                    </div>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src={project.afterImage}
                      alt={`Na: ${project.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                      NA
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Laat uw tuin transformeren
          </a>
        </div>
      </div>
    </section>
  );
}
