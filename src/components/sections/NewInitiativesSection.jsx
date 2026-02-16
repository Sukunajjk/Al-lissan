import { motion } from 'framer-motion';
import { Truck, Users, Laptop, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initiatives } from '../../data/siteData';

const iconMap = {
  Truck: Truck,
  Users: Users,
  Laptop: Laptop,
};

export default function NewInitiativesSection() {
  // Take only the top 3 initiatives
  const displayInitiatives = initiatives.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 border-b border-neutral-100 pb-8">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 text-primary-500 font-bold text-sm uppercase tracking-wider mb-3"
            >
                <Star className="w-4 h-4 fill-current" />
                <span>Latest Developments</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-neutral-900 tracking-tight"
            >
              Innovating for a <span className="text-primary-600">Better Future</span>
            </motion.h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-neutral-400 text-sm font-semibold">2026 Strategic Goals</span>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayInitiatives.map((item, i) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col h-full"
              >
                {/* Image Placeholder / Gradient Background */}
                <div className="h-48 rounded-2xl overflow-hidden mb-6 relative bg-neutral-100">
                    {/* Using primary color with different opacities for the bg */}
                    <div className="absolute inset-0 opacity-10 bg-primary-600" /> 
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg z-10">
                        <Icon className="w-6 h-6" />
                    </div>
                    {/* Decorative abstract circle */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary-500 opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex items-baseline justify-between mb-3">
                         <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{item.year} Launch</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-neutral-500 leading-relaxed mb-6 text-sm flex-grow">
                        {item.desc}
                    </p>

                    <Link to={item.link || "/news"} className="flex items-center text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                        Read details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
