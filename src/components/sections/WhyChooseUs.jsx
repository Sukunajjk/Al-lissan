import { motion } from 'framer-motion';
import { Award, Layers, Users, Home, BookOpen, Globe } from 'lucide-react';
import { whyChooseUs } from '../../data/siteData';

const iconMap = { Award, Layers, Users, Home, BookOpen, Globe };

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">Why Al-Lissan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Our unique combination of expertise, compassion, and innovation makes us a leader in special child rehabilitation across Pakistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white p-8 border-l-2 border-l-transparent hover:border-l-primary-600 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
