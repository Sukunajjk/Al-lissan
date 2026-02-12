import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ArrowUpRight, Clock, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/siteData';

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-semibold text-white/60 tracking-wide mb-6"
            >
              <Newspaper className="w-3.5 h-3.5 text-primary-400" />
              News & Updates
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Latest{' '}
              <span className="text-gradient">News</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Stay informed about our latest programs, milestones, and stories of impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <Link to={`/news/${newsArticles[0].id}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(5,150,71,0.12)] transition-all duration-500">
                <div className="h-72 lg:h-auto overflow-hidden">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-[11px] font-bold uppercase tracking-wider rounded-full">
                      {newsArticles[0].category}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {newsArticles[0].readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {newsArticles[0].date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 group-hover:text-primary-600 transition-colors mb-4 tracking-tight">
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
                  className="group block bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:border-primary-100 hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                      <span className="text-neutral-300">&middot;</span>
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2 tracking-tight">
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
