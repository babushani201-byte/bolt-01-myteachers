import { Award, BookOpen, GraduationCap } from 'lucide-react';

const MaleAvatar = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#d1fae5" />
    <ellipse cx="50" cy="38" rx="16" ry="18" fill="#059669" />
    <rect x="34" y="30" width="32" height="8" rx="4" fill="#047857" />
    <ellipse cx="50" cy="75" rx="26" ry="18" fill="#059669" />
  </svg>
);

const FemaleAvatar = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#d1fae5" />
    <ellipse cx="50" cy="38" rx="16" ry="18" fill="#059669" />
    <path d="M24 46 Q50 20 76 46 Q76 70 50 74 Q24 70 24 46Z" fill="#047857" />
    <ellipse cx="50" cy="78" rx="22" ry="14" fill="#059669" />
  </svg>
);

const teachers = [
  {
    name: 'Qari Muhammad Hassan',
    qualification: 'Hafiz & Qari with Ijazah',
    experience: '10+ years teaching experience',
    specialization: 'Hifz, Tajweed & Qiraat',
    description: 'Expert in Quran memorization with advanced Tajweed and multiple Qiraat styles.',
    gender: 'male',
  },
  {
    name: 'Ustadha Fatima Ahmed',
    qualification: 'Aalimah & Hafiza',
    experience: '8+ years teaching experience',
    specialization: 'Nazira, Qaida & Tafseer',
    description: 'Specializes in teaching children and women with patience and care.',
    gender: 'female',
  },
  {
    name: 'Qari Abdullah Khan',
    qualification: 'Hafiz with Sanad',
    experience: '12+ years teaching experience',
    specialization: 'Complete Quran with Tajweed',
    description: 'Dedicated teacher helping students develop strong Quranic foundations.',
    gender: 'male',
  },
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Qualified Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced, certified Quran teachers dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.name}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-emerald-100 shadow-md">
                  {teacher.gender === 'female' ? <FemaleAvatar /> : <MaleAvatar />}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {teacher.name}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center text-sm text-emerald-600 font-semibold">
                  <GraduationCap className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{teacher.qualification}</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Award className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{teacher.experience}</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <BookOpen className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{teacher.specialization}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
