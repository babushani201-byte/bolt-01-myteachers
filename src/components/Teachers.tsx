import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Qari Muhammad Hassan',
      qualification: 'Hafiz & Qari with Ijazah',
      experience: '10+ years teaching experience',
      specialization: 'Hifz, Tajweed & Qiraat',
      image: 'https://images.pexels.com/photos/5257588/pexels-photo-5257588.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in Quran memorization with advanced Tajweed and multiple Qiraat styles.'
    },
    {
      name: 'Ustadha Fatima Ahmed',
      qualification: 'Aalimah & Hafiza',
      experience: '8+ years teaching experience',
      specialization: 'Nazira, Qaida & Tafseer',
      image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specializes in teaching children and women with patience and care.'
    },
    {
      name: 'Qari Abdullah Khan',
      qualification: 'Hafiz with Sanad',
      experience: '12+ years teaching experience',
      specialization: 'Complete Quran with Tajweed',
      image: 'https://images.pexels.com/photos/6298945/pexels-photo-6298945.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dedicated teacher helping students develop strong Quranic foundations.'
    },
    {
      name: 'Ustadha Aisha Rahman',
      qualification: 'Islamic Scholar',
      experience: '7+ years teaching experience',
      specialization: 'Tafseer & Translation',
      image: 'https://images.pexels.com/photos/7120908/pexels-photo-7120908.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Passionate about teaching the meaning and wisdom of the Holy Quran.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Qualified Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced, certified Quran teachers dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-16 px-6 pb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-emerald-600">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-1" />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{teacher.specialization}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
