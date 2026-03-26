import { Globe, Heart, Users, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const challenges = [
    'Limited access to qualified Quran teachers in Western countries',
    'Difficulty maintaining Islamic education in non-Muslim majority areas',
    'Time constraints with busy family schedules',
    'Lack of personalized attention in group classes',
    'Cultural and language barriers in local Islamic centers'
  ];

  const solutions = [
    'One-on-one personalized instruction',
    'Flexible scheduling to fit your family routine',
    'Qualified teachers who understand Western Muslim challenges',
    'Learn from the comfort and safety of home',
    'Affordable pricing with family discounts'
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About My Quran Teachers</h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Bridging the gap between Muslim families and quality Quranic education worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge We're Solving
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Muslim families living in Western countries like the USA, UK, Canada, and Germany face unique
                challenges when it comes to providing their children with quality Quranic education. Traditional
                Islamic schools may be far away, inconvenient, or unable to provide the personalized attention
                each child needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Parents often struggle to find qualified teachers who can teach proper Tajweed, help with
                memorization, and instill a love for the Quran in their children. Many children feel disconnected
                from their Islamic heritage due to limited access to authentic Islamic education.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7120917/pexels-photo-7120917.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Muslim family learning Quran"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Challenges Faced by Muslim Families
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/8613088/pexels-photo-8613088.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Online Quran learning"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My Quran Teachers brings the mosque to your home. We provide professional, one-on-one Quran
                education through online classes that are convenient, effective, and affordable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our teachers are not just qualified in Tajweed and Quranic sciences—they understand the unique
                challenges faced by Muslim families in the West. They create a comfortable learning environment
                where students can ask questions, learn at their own pace, and develop a genuine love for the Quran.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Help Muslim Families
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-emerald-600 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Serving Muslim families across USA, UK, Canada, Germany, and beyond
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Teachers</h3>
              <p className="text-gray-600">
                Certified Quran teachers with years of teaching experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                One-on-one attention tailored to each student's learning style
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Structured curriculum with measurable progress and success
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Child's Quranic Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied families who trust us with their children's Islamic education
          </p>
          <a
            href={`https://wa.me/923003673980?text=${encodeURIComponent('I would like to learn more about your Quran classes')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
