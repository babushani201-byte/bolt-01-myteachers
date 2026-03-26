import { Check, Users } from 'lucide-react';

const FeeStructure = () => {
  const plans = [
    {
      name: 'Qaida',
      frequency: '5 days / week',
      duration: '30 Minutes',
      price: '$40 USD',
      features: ['Arabic alphabet learning', 'Basic pronunciation', 'Beginner friendly', 'Interactive lessons']
    },
    {
      name: 'Nazira',
      frequency: '5 days / week',
      duration: '30 Minutes',
      price: '$40 USD',
      features: ['Tajweed rules', 'Proper pronunciation', 'Fluency development', 'Regular practice']
    },
    {
      name: 'Hifz',
      frequency: '5 days / week',
      duration: '90 Minutes',
      price: '$150 USD',
      popular: true,
      features: ['Complete memorization', 'Advanced Tajweed', 'Daily revision', 'Qiraat styles']
    },
    {
      name: 'Fehm ul Quran',
      frequency: '4 days / week',
      duration: '40 Minutes',
      price: '$35 USD',
      features: ['Translation lessons', 'Tafseer understanding', 'Arabic grammar', 'Life application']
    }
  ];

  return (
    <section id="fee" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Classes & Fee Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Affordable and flexible pricing for quality Quranic education
          </p>
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 mr-2" />
            <span className="font-semibold">10% discount on siblings enrollment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-emerald-600' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">{plan.frequency}</p>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/923003673980?text=${encodeURIComponent(`I would like to enroll in ${plan.name} classes - ${plan.price}/month`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            All prices are in USD. Flexible payment options available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
