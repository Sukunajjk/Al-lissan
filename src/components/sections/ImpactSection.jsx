import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '../../data/siteData';
import { Heart, Calendar, Building2, Users } from 'lucide-react';

const iconMap = { Heart, Calendar, Building: Building2, Users };

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Our Impact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight">
            Numbers That<span className="text-gradient"> Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Heart;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group relative bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(5,150,71,0.12)] hover:border-primary-100 transition-all duration-500"
              >
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-primary-400 to-accent-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 rounded-2xl bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-5 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  {inView && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-sm text-neutral-500 font-medium">{stat.label}</p>
                <span className="absolute top-4 right-4 text-[80px] md:text-[100px] font-black text-neutral-900/[0.02] leading-none pointer-events-none select-none">
                  {stat.value}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
