import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { presidentMessage } from '../../data/siteData';

export default function PresidentMessageSection() {
  return (
    <section className="relative py-28 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src={presidentMessage.image}
                  alt="President of Tanzeem Al-Lissan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary-600/30 rounded-sm" />
            </div>
            <div className="mt-8">
              <p className="text-white font-semibold text-lg">{presidentMessage.name}</p>
              <p className="text-white/40 text-sm">{presidentMessage.signature}</p>
            </div>
          </motion.div>

          {/* Message Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary-600" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-400">
                President's Message
              </span>
            </div>

            <Quote className="w-10 h-10 text-primary-600/30 mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8 tracking-tight">
              {presidentMessage.title}
            </h2>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light font-serif italic">
              {presidentMessage.message}
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-px bg-white/10" />
              <span className="text-sm text-white/30 font-medium tracking-wide">
                Est. 1996 — Karachi, Pakistan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
