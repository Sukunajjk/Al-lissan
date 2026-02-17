import { motion } from 'framer-motion';
import { Truck, Users, Laptop, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initiatives } from '../../data/siteData';

const iconMap = {
  Truck: Truck,
  Users: Users,
  Laptop: Laptop,
};

export default function NewInitiativesSection() {
  // Sort by year to ensure timeline flow
  const sortedInitiatives = [...initiatives].sort((a, b) => parseInt(a.year) - parseInt(b.year));
  const displayInitiatives = sortedInitiatives.slice(0, 3);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-widest mb-4"
            >
                <span className="w-8 h-px bg-primary-600"></span>
                <span>Our Roadmap</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 leading-tight"
            >
              Innovating for a <span className="italic text-primary-600">Better Future</span>
            </motion.h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-neutral-500 max-w-xs text-sm leading-relaxed">
                We are constantly evolving. Here are the latest milestones in our journey to expand accessibility and care.
            </p>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-100 -translate-y-1/2 hidden md:block z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {displayInitiatives.map((item, i) => {
                const Icon = iconMap[item.icon] || Users;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="group relative"
                  >
                    {/* Timeline Node */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="text-4xl font-bold text-neutral-200 group-hover:text-primary-200 transition-colors font-serif">
                            {item.year}
                        </span>
                        <div className="h-px flex-grow bg-neutral-200 group-hover:bg-primary-200 transition-colors md:hidden"></div>
                        <div className="w-3 h-3 rounded-full bg-primary-600 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 md:mt-8 hidden md:block ring-4 ring-white"></div>
                    </div>

                    {/* Card Content */}
                    <Link to={item.link || "/news"} className="block bg-neutral-50 rounded-2xl p-8 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-100 h-full group/card">
                        <div className="w-12 h-12 rounded-xl bg-white border border-neutral-100 flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover/card:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover/card:text-primary-700 transition-colors">
                            {item.title}
                        </h3>
                        
                        <p className="text-neutral-500 leading-relaxed text-sm mb-6 line-clamp-3">
                            {item.desc}
                        </p>

                        <div className="flex items-center text-primary-600 text-sm font-semibold group-hover/card:translate-x-2 transition-transform">
                            View Project <ChevronRight className="w-4 h-4" />
                        </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
        </div>

      </div>
    </section>
  );
}
