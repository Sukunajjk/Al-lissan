import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../../data/siteData';

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Latest News</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              From Our<span className="text-gradient"> Newsroom</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
              All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to={`/news/${featured.id}`} className="group block relative h-full rounded-3xl overflow-hidden bg-neutral-900 min-h-[400px]">
              <img src={featured.image} alt={featured.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-full">{featured.category}</span>
                  <span className="flex items-center gap-1 text-white/40 text-xs"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{featured.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                  Read Article
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-5">
            {rest.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/news/${article.id}`} className="group flex gap-5 bg-white rounded-2xl p-4 border border-neutral-100 hover:border-primary-100 hover:shadow-[0_10px_40px_-10px_rgba(5,150,71,0.08)] transition-all duration-500">
                  <div className="w-32 h-28 rounded-xl overflow-hidden shrink-0">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-primary-600 uppercase tracking-wider">{article.category}</span>
                      <span className="text-neutral-300">&middot;</span>
                      <span className="text-[11px] text-neutral-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">{article.title}</h3>
                    <p className="text-xs text-neutral-400">{article.date}</p>
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
