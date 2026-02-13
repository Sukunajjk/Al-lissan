import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../../data/siteData';

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 line-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-600" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
                Latest News
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              From Our Newsroom
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Featured article - full width 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={`/news/${featured.id}`}
            className="group grid md:grid-cols-2 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors duration-300"
          >
            {/* Image left */}
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text right */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-600 text-white text-[11px] font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-neutral-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors mb-4 tracking-tight">
                {featured.title}
              </h3>

              <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Calendar className="w-3.5 h-3.5" />
                {featured.date}
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                Read Article
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining articles in a row */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/news/${article.id}`}
                className="group flex gap-5 bg-white border border-neutral-200 hover:border-neutral-300 p-4 transition-colors duration-300"
              >
                <div className="w-36 h-28 overflow-hidden shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[11px] text-neutral-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
