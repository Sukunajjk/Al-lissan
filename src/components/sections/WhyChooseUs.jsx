import { motion } from 'framer-motion';
import { Award, Layers, Users, Home, BookOpen, Globe } from 'lucide-react';
import { whyChooseUs } from '../../data/siteData';

const iconMap = { Award, Layers, Users, Home, BookOpen, Globe };

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Why Al-Lissan</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-6">
            What Sets Us<span className="text-gradient"> Apart</span>
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Our unique combination of expertise, compassion, and innovation makes us a leader in special child rehabilitation across Pakistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-8 border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500"
              >
                <span className="absolute top-6 right-6 text-[64px] font-black text-neutral-900/[0.03] leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 group-hover:from-primary-600 group-hover:to-primary-700 flex items-center justify-center mb-6 transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
