import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/siteData';

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">News & Updates</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Latest News
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Stay informed about our latest programs, milestones, and stories of impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link to={`/news/${newsArticles[0].id}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 bg-neutral-50 rounded-3xl overflow-hidden">
                <div className="h-72 lg:h-auto overflow-hidden">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full w-fit mb-4">
                    {newsArticles[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {newsArticles[0].date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Rest of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(1).map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/news/${article.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
