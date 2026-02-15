import { motion } from 'framer-motion';
import { partners } from '../../data/siteData';

export default function PartnersSection() {
  return (
    <section className="relative py-16 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-400 shrink-0">
            Trusted By
          </span>
          <div className="w-px h-6 bg-neutral-300 hidden md:block" />
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner, i) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm font-semibold text-neutral-400 hover:text-primary-600 transition-colors duration-300 cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
