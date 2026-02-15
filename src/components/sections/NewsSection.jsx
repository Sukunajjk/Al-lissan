import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../../data/siteData';

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3 tracking-wide">Latest News</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">From our newsroom</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
              All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to={`/news/${featured.id}`} className="group block relative rounded-2xl overflow-hidden bg-neutral-900 h-full min-h-[420px]">
              <img src={featured.image} alt={featured.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-lg">{featured.category}</span>
                  <span className="flex items-center gap-1 text-white/40 text-xs"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors tracking-tight">{featured.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>
          </motion.div>

          {/* Side articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/news/${article.id}`} className="group flex gap-5 bg-white rounded-xl border border-neutral-200/60 overflow-hidden hover:shadow-sm transition-all duration-300">
                  <div className="w-40 lg:w-48 shrink-0 overflow-hidden">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[4/3]" />
                  </div>
                  <div className="flex flex-col justify-center py-5 pr-5 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-primary-600 uppercase tracking-wider">{article.category}</span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-[11px] text-neutral-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2 text-[15px] leading-snug">{article.title}</h3>
                    <p className="text-xs text-neutral-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
