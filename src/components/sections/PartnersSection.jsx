import { motion } from 'framer-motion';
import { partners } from '../../data/siteData';

export default function PartnersSection() {
  return (
    <section className="py-12 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Trusted by Government & International Bodies
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders as per data, but styled to look like logos */}
            {partners.map((partner, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                >
                    <span className="text-lg md:text-xl font-bold text-neutral-800 hover:text-primary-600 transition-colors">
                        {partner}
                    </span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
