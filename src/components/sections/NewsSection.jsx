import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { newsArticles } from '../../data/siteData';

export default function NewsSection() {
  return (
    <section className="py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-primary-50/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <SectionHeading
            subtitle="Latest News"
            title="Stories of Impact"
            description="Stay updated with the latest developments, milestones, and stories from our centers."
            center={false}
          />
          <Link
            to="/news"
            className="hidden sm:inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all duration-300 shrink-0 group"
          >
            View All News
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/news/${article.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-2xl hover:shadow-primary-600/8 hover:border-primary-100 transition-all duration-400 h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-primary-600 text-white text-[11px] font-bold rounded-full shadow-lg shadow-primary-600/20">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[12px] text-neutral-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    {article.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {article.readTime} read
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200 mb-2 line-clamp-2 leading-snug">
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
  );
}
