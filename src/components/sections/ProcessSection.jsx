import { motion } from 'framer-motion';
import { ClipboardCheck, FileHeart, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../../data/siteData';

const iconMap = { ClipboardCheck, FileHeart, GraduationCap, TrendingUp };

export default function ProcessSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">How It Works</span>
            <div className="w-12 h-px bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Your Child's Journey With Us
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed">
            From the very first consultation to celebrating milestones, we walk with every family through a carefully designed process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || ClipboardCheck;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white p-8 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-[11px] font-bold text-neutral-300 tracking-widest mb-4 block">{step.step}</span>
                <div className="w-10 h-10 bg-neutral-100 group-hover:bg-primary-600 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold text-[15px] hover:bg-primary-700 transition-colors">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
