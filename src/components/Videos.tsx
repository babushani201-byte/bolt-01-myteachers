import { Youtube } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 'F9Bo3DlyaI0',
      title: 'Beautiful Quran Recitation'
    },
    {
      id: 'qWnAs3F4Ozk',
      title: 'Tajweed Lesson'
    },
    {
      id: 'S-2GiqKUxlE',
      title: 'Quran Memorization Tips'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Listen to Our Quran Teachers
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Experience the beautiful recitation and teaching style of our qualified Quran teachers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <Youtube className="w-6 h-6" />
            <span>Subscribe to Our Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
