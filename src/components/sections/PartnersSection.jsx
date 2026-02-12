import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import { partners } from '../../data/siteData';

export default function PartnersSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-3">
            <Handshake className="w-4 h-4" />
            Trusted By
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-800 tracking-tight">
            Proudly Partnering With Leading Organizations
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className="group flex items-center justify-center h-20 bg-white rounded-2xl border border-neutral-100 hover:border-primary-100 hover:shadow-[0_10px_40px_-10px_rgba(5,150,71,0.08)] transition-all duration-500 px-4"
            >
              <span className="text-sm font-bold text-neutral-400 group-hover:text-primary-600 transition-colors duration-300 tracking-wide text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
