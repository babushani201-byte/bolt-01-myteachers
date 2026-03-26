import { Heart } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At My Quran Teachers, we are dedicated to making quality Quranic education accessible to Muslim families worldwide.
              We believe every child and adult deserves the opportunity to learn the Holy Quran with proper Tajweed,
              understand its meaning, and develop a strong connection with Allah's words. Our experienced teachers provide
              personalized one-on-one instruction, ensuring each student progresses at their own pace in a comfortable,
              supportive learning environment. We're committed to preserving Islamic knowledge and nurturing the next
              generation of faithful Muslims, regardless of where they live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
