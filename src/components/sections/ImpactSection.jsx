import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Heart, Calendar, Building2, Users } from 'lucide-react';

const impactStats = [
  { icon: Heart, value: 5000, suffix: "+", label: "Children Supported", description: "Lives transformed through dedicated care" },
  { icon: Calendar, value: 28, suffix: "+", label: "Years of Service", description: "Nearly three decades of impact" },
  { icon: Building2, value: 6, suffix: "", label: "Rehabilitation Centers", description: "Specialized facilities across Pakistan" },
  { icon: Users, value: 200, suffix: "+", label: "Trained Specialists", description: "Expert therapists and educators" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm mb-3 tracking-wide">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Numbers that tell our story
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-neutral-50 rounded-2xl p-6 lg:p-8 text-center group hover:bg-primary-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-2">
                {inView && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-sm font-semibold text-neutral-700 mb-1">{stat.label}</p>
              <p className="text-xs text-neutral-400 hidden lg:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
