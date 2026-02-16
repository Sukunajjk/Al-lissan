import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { newsArticles } from '../data/siteData';

// =========== NEWS DETAIL VIEW ===========
function NewsDetail({ article }) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={article.image.replace('w=600', 'w=1400')} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                 <Link to="/news" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to News
                 </Link>
                 <div className="flex items-center gap-4 mb-4 text-sm font-medium text-white/80">
                    <span className="px-3 py-1 bg-primary-600 text-white rounded-lg">{article.category}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                 </div>
                 <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 shadow-sm">
                    {article.title}
                 </h1>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl text-neutral-600 font-medium mb-8 border-l-4 border-primary-500 pl-4 bg-neutral-50 py-4 pr-4 rounded-r-lg">
                {article.excerpt}
            </p>
            {/* Placeholder for full content since data file only has excerpts. In a real app, this would be a content field. */}
            <p className="text-neutral-600 leading-relaxed mb-6">
                This is the detailed view for the news article. Currently, we haven't migrated the full body text for all articles, but this section would contain the complete story, images, and embedded media related to "{article.title}".
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
                At Tanzeem-al-Lissan, we strictly adhere to our mission of providing quality education and rehabilitation. This initiative is a testament to our ongoing commitment to serving the community and expanding our reach to those who need it most.
            </p>
            <p className="text-neutral-600 leading-relaxed">
                For more information or to get involved, please visit our contact page or reach out to our administration office.
            </p>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center justify-between">
            <span className="font-bold text-neutral-900">Share this article:</span>
            <div className="flex gap-4">
                <button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-600">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </article>
  );
}

// =========== NEWS LISTING VIEW ===========
export default function News() {
  const { id } = useParams();

  // If ID present, show detail view
  if (id) {
    const article = newsArticles.find((a) => a.id.toString() === id);
    if (article) return <NewsDetail article={article} />;
    // If not found, fall through to list (or could show 404)
  }

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
