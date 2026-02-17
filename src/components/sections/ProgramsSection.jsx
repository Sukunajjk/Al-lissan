import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../../data/siteData';

export default function ProgramsSection() {
  // Use all programs for the grid
  const allPrograms = programs;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest text-sm uppercase mb-3 block"
          >
            Our Programs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 mb-6"
          >
            Holistic Care for Every Child
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-lg leading-relaxed"
          >
            We provide comprehensive services categorized to meet the unique needs of each individual, ensuring they receive the best possible support.
          </motion.p>
        </div>

        {/* Clean Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPrograms.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.shortTitle} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500" />
                
                {program.badge && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary-700 rounded-full shadow-sm">
                    {program.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-serif font-medium text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {program.shortTitle}
                </h3>
                <p className="text-neutral-500 mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                
                <Link 
                  to={`/programs/${program.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link hover:text-primary-700 transition-colors"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <Link 
                to="/programs" 
                className="inline-block px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
            >
                View Full Curriculum
            </Link>
        </motion.div>

      </div>
    </section>
  );
}
