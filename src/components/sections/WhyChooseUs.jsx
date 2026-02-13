import { motion } from 'framer-motion';
import { Award, Layers, Users, Home, BookOpen, Globe } from 'lucide-react';
import { whyChooseUs } from '../../data/siteData';

const iconMap = { Award, Layers, Users, Home, BookOpen, Globe };

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 line-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
              Why Al-Lissan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
            What Sets Us Apart
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Our unique combination of expertise, compassion, and innovation makes us a leader
            in special child rehabilitation across Pakistan.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white border border-neutral-100 p-8 hover:border-l-primary-600 hover:border-l-[3px] transition-all duration-300"
              >
                {/* Icon box */}
                <div className="w-11 h-11 bg-primary-50 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
