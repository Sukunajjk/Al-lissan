import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { newsArticles } from '../data/siteData';

// =========== NEWS DETAIL VIEW ===========
function NewsDetail({ article }) {
  return (
    <article className="min-h-screen bg-white">
      {/* Editorial Hero Image */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={article.image.replace('w=600', 'w=1600')} 
            alt={article.title} 
            className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                 <Link to="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide uppercase">
                    <ArrowLeft className="w-4 h-4" /> Back to Journal
                 </Link>
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-white/90"
                 >
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full uppercase tracking-wider text-xs">{article.category}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-white/70" /> {article.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-white/70" /> {article.readTime}</span>
                 </motion.div>
                 
                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-8"
                 >
                    {article.title}
                 </motion.h1>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-2xl text-neutral-800 font-serif leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px]">
                {article.excerpt}
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
                At Tanzeem-al-Lissan, we strictly adhere to our mission of providing quality education and rehabilitation. This initiative is a testament to our ongoing commitment to serving the community and expanding our reach to those who need it most.
            </p>
            
            <blockquote className="border-l-4 border-primary-600 pl-6 italic text-2xl text-neutral-800 my-10 font-serif">
                "We are building a future where every child has the tools to succeed, regardless of their challenges."
            </blockquote>

            <p className="text-neutral-600 leading-relaxed">
                For more information or to get involved, please visit our contact page or reach out to our administration office.
            </p>
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-100 flex items-center justify-between">
            <span className="font-bold text-neutral-900 text-sm uppercase tracking-widest">Share this story</span>
            <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all text-neutral-600">
                    <Share2 className="w-4 h-4" />
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
  }

  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <>
      <section className="bg-neutral-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-4 block">
                The Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">Latest Updates</h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
                Stories of impact, innovation, and community from Tanzeem Al-Lissan.
            </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Article - Magazine Cover Style */}
          <Link to={`/news/${featured.id}`} className="group block mb-20">
             <div className="grid lg:grid-cols-12 gap-8 items-center cursor-pointer">
                 <div className="lg:col-span-8 relative overflow-hidden rounded-2xl aspect-[16/9]">
                     <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
                 <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-4 text-sm font-medium">
                         <span className="text-primary-600 uppercase tracking-wider">{featured.category}</span>
                         <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                         <span className="text-neutral-500">{featured.date}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-medium text-neutral-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors">
                          {featured.title}
                      </h2>
                      <p className="text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                          {featured.excerpt}
                      </p>
                      <span className="inline-flex items-center text-neutral-900 font-bold text-sm uppercase tracking-wide border-b-2 border-neutral-900 pb-1 group-hover:text-primary-700 group-hover:border-primary-700 transition-colors">
                          Read Story <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                 </div>
             </div>
          </Link>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-neutral-200 pt-20">
            {rest.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/news/${article.id}`} className="group block h-full flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-6 bg-neutral-100">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        <span className="text-primary-600">{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-medium text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary-600 text-sm font-bold group-hover:gap-2 transition-all">
                          Read <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
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
