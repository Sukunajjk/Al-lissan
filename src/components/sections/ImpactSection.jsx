import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '../../data/siteData';
import { Heart, Calendar, Building2, Users } from 'lucide-react';

const iconMap = { Heart, Calendar, Building: Building2, Users };

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Subtle line pattern background */}
      <div className="absolute inset-0 line-pattern opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Numbers That Speak
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Heart;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group relative bg-white p-8 md:p-10"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Icon */}
                <div className="w-10 h-10 bg-primary-50 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-3 tabular-nums">
                  {inView && (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-neutral-500 font-medium leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
