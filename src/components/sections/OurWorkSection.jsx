import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { programs, services } from '../../data/siteData';
import { ArrowRight, Building2, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'centers', label: 'Specialized Centers', icon: Building2 },
  { id: 'services', label: 'Clinical Services', icon: Activity },
  { id: 'vocational', label: 'Vocational & Community', icon: Users },
];

export default function OurWorkSection() {
  const [activeTab, setActiveTab] = useState('centers');

  // Filter content based on active tab
  const getContent = () => {
    switch(activeTab) {
      case 'centers':
        return programs.filter(p => p.id === 'danish-center' || p.id === 'al-masoom' || p.id === 'ifra');
      case 'services':
        return services; // Using the services array we added
      case 'vocational':
        return programs.filter(p => p.id === 'vocational' || p.id === 'deaf-club' || p.title.includes('College') || p.id === 'physiotherapy');
      default:
        return [];
    }
  };

  const content = getContent();

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-bold text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">Comprehensive Care Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-neutral-500">
            We provide a holistic range of services from early intervention and education to rehabilitation and employment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-neutral-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {content.map((item, i) => (
              <motion.div
                layout
                key={item.id || item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image if available (Programs) */}
                {item.image && (
                    <div className="h-48 overflow-hidden relative group">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors" />
                    </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                   {/* Icon for Services (no image usually) */}
                   {!item.image && (
                       <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 text-primary-600">
                           {/* Assuming siteData has icon names, but for Services component used direct imports. Let's use a generic icon if mapped icon fails or just render visual from title */}
                           <Activity className="w-6 h-6" /> 
                       </div>
                   )}

                   <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                   <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                     {item.desc || item.description}
                   </p>
                   
                   {/* Link usually only for Programs */}
                   {item.id && (
                       <Link to={`/programs/${item.id}`} className="inline-flex items-center text-primary-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                           Learn More <ArrowRight className="w-4 h-4 ml-1" />
                       </Link>
                   )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
