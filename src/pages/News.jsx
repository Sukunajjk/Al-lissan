import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/siteData';

export default function News() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">News & Updates</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Latest News</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Stay informed about our programs, events, achievements, and the latest developments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <Link to={`/news/${featured.id}`} className="group grid lg:grid-cols-2 gap-0 overflow-hidden bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow duration-500">
              <div className="relative h-72 lg:h-96 overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-5 left-5 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">{featured.category}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-neutral-400"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="text-neutral-300">|</span>
                  <span className="flex items-center gap-1.5 text-xs text-neutral-400"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4 group-hover:text-primary-600 transition-colors">{featured.title}</h2>
                <p className="text-neutral-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/news/${article.id}`} className="group block bg-white rounded-2xl border border-neutral-200/60 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-primary-600 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">{article.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-neutral-400">{article.date}</span>
                      <span className="text-neutral-300">|</span>
                      <span className="text-xs text-neutral-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2 leading-snug">{article.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
