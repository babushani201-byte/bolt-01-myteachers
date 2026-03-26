import { useState } from 'react';
import { BookOpen, Book, Brain, Languages, X } from 'lucide-react';

interface ClassInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  details: string[];
}

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  const classes: ClassInfo[] = [
    {
      id: 'qaida',
      title: 'Norani Qaida',
      subtitle: 'For Beginners & Starters',
      description: 'Perfect for beginners starting their Quranic journey. Learn Arabic alphabet, pronunciation, and basic reading skills.',
      icon: <BookOpen className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Arabic alphabet recognition and pronunciation',
        'Letter joining and word formation',
        'Basic Tajweed rules introduction',
        'Step-by-step progression from basics to Quran reading',
        'Interactive lessons with visual aids',
        'Perfect for children and adult beginners'
      ]
    },
    {
      id: 'nazira',
      title: 'Nazira with Tajweed',
      subtitle: 'Reading with Correct Pronunciation',
      description: 'Master the art of reading the Holy Quran with proper Tajweed rules and beautiful pronunciation.',
      icon: <Book className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/6298951/pexels-photo-6298951.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Complete Tajweed rules application',
        'Makharij (pronunciation points) mastery',
        'Reading fluency development',
        'Error correction and practice',
        'Regular recitation practice',
        'Gradual progression through Quran sections'
      ]
    },
    {
      id: 'hifz',
      title: 'Hifz & Qiraat',
      subtitle: 'Memorization with Advanced Tajweed',
      description: 'Memorize the Holy Quran by heart with advanced Tajweed and beautiful Qiraat styles.',
      icon: <Brain className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/6298959/pexels-photo-6298959.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Structured memorization methodology',
        'Daily revision techniques',
        'Advanced Tajweed application',
        'Multiple Qiraat styles introduction',
        'Memory retention strategies',
        'Regular review and testing',
        'Long-term memorization planning'
      ]
    },
    {
      id: 'fehm',
      title: 'Fehm ul Quran',
      subtitle: 'Translation & Understanding',
      description: 'Understand the meanings and wisdom of the Quran through translation and Tafseer lessons.',
      icon: <Languages className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/7120914/pexels-photo-7120914.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Word-by-word translation',
        'Quranic Arabic grammar basics',
        'Tafseer (explanation) of verses',
        'Historical context and revelation circumstances',
        'Practical application in daily life',
        'Understanding divine wisdom and guidance'
      ]
    }
  ];

  return (
    <>
      <section id="classes" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Quran Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Quranic education tailored to every level of learner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className="group cursor-pointer"
                onClick={() => setSelectedClass(classItem)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      {classItem.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {classItem.title}
                    </h3>
                    <p className="text-sm text-emerald-600 font-semibold mb-3">
                      {classItem.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {classItem.description}
                    </p>
                    <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedClass && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
             onClick={() => setSelectedClass(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedClass.image}
                alt={selectedClass.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="mb-2">{selectedClass.icon}</div>
                <h3 className="text-3xl font-bold mb-1">{selectedClass.title}</h3>
                <p className="text-emerald-300 font-semibold">{selectedClass.subtitle}</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedClass.description}
              </p>
              <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn:</h4>
              <ul className="space-y-3 mb-6">
                {selectedClass.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/923003673980?text=${encodeURIComponent(`I'm interested in ${selectedClass.title} classes`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Classes;
