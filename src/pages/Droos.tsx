import { Calendar, User, ArrowRight } from 'lucide-react';

const Droos = () => {
  const articles = [
    {
      id: 1,
      title: 'The Importance of Learning Tajweed',
      excerpt: 'Discover why proper Tajweed is essential for reading the Quran correctly and how it enhances your spiritual connection.',
      author: 'Qari Muhammad Hassan',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tajweed'
    },
    {
      id: 2,
      title: '5 Tips for Effective Quran Memorization',
      excerpt: 'Learn proven strategies to help you or your child memorize the Holy Quran efficiently and retain it for life.',
      author: 'Ustadha Fatima Ahmed',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/7120913/pexels-photo-7120913.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hifz'
    },
    {
      id: 3,
      title: 'Understanding the Meaning of Surah Al-Fatiha',
      excerpt: 'A comprehensive guide to understanding the meanings, lessons, and significance of the opening chapter of the Quran.',
      author: 'Ustadha Aisha Rahman',
      date: 'March 5, 2024',
      image: 'https://images.pexels.com/photos/5623623/pexels-photo-5623623.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tafseer'
    },
    {
      id: 4,
      title: 'How to Teach Quran to Young Children',
      excerpt: 'Practical advice for parents on introducing Quranic education to young children in an engaging and effective way.',
      author: 'Qari Abdullah Khan',
      date: 'February 28, 2024',
      image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Parenting'
    },
    {
      id: 5,
      title: 'The Benefits of One-on-One Quran Learning',
      excerpt: 'Explore why personalized Quran instruction is more effective than group classes for most students.',
      author: 'Qari Muhammad Hassan',
      date: 'February 20, 2024',
      image: 'https://images.pexels.com/photos/7120914/pexels-photo-7120914.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education'
    },
    {
      id: 6,
      title: 'Common Tajweed Mistakes and How to Avoid Them',
      excerpt: 'Identify and correct the most common pronunciation errors made when reciting the Quran.',
      author: 'Ustadha Fatima Ahmed',
      date: 'February 15, 2024',
      image: 'https://images.pexels.com/photos/6298951/pexels-photo-6298951.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tajweed'
    }
  ];

  const categories = ['All', 'Tajweed', 'Hifz', 'Tafseer', 'Parenting', 'Education'];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Droos</h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Islamic lessons, Quranic insights, and educational resources for your spiritual journey
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Contribute?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If you have Islamic knowledge or Quranic insights to share, we'd love to hear from you
          </p>
          <a
            href={`https://wa.me/923003673980?text=${encodeURIComponent('I would like to contribute an article to Droos')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Droos;
