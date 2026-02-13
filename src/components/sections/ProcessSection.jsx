import { motion } from 'framer-motion';
import { ClipboardCheck, FileHeart, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../../data/siteData';

const iconMap = { ClipboardCheck, FileHeart, GraduationCap, TrendingUp };

export default function ProcessSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
              How It Works
            </span>
            <div className="w-12 h-px bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Your Child's Journey With Us
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            From the very first consultation to celebrating milestones, we walk with every
            family through a carefully designed process.
          </p>
        </motion.div>

        {/* Steps grid with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-neutral-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || ClipboardCheck;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="relative text-center lg:text-left"
                >
                  {/* Step number circle on the line */}
                  <div className="relative z-10 flex justify-center lg:justify-start mb-6">
                    <div className="w-20 h-20 bg-white border-2 border-neutral-200 flex items-center justify-center relative">
                      <Icon className="w-6 h-6 text-primary-600" />
                      {/* Step number badge */}
                      <span className="absolute -top-3 -right-3 w-7 h-7 bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-300 text-sm"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
