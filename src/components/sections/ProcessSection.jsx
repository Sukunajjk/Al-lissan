import { motion } from 'framer-motion';
import { ClipboardCheck, FileHeart, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../../data/siteData';

const iconMap = { ClipboardCheck, FileHeart, GraduationCap, TrendingUp };

export default function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left sticky content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400 mb-4">How It Works</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Your Child's Journey
              <br />
              <span className="text-gradient">With Us</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-8 text-[15px]">
              From the very first consultation to celebrating milestones, we walk with every family through a carefully designed 4-step process.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-primary-600 text-white font-semibold rounded-2xl shadow-[0_8px_30px_rgba(5,150,71,0.3)] hover:shadow-[0_12px_40px_rgba(5,150,71,0.4)] hover:bg-primary-700 transition-all duration-300 text-[15px]"
              >
                Start Your Journey
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right steps */}
          <div className="lg:col-span-3 space-y-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || ClipboardCheck;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group relative glass rounded-3xl p-8 hover:border-primary-500/20 transition-all duration-500"
                >
                  {/* Connecting line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[2.75rem] top-full w-px h-6 bg-gradient-to-b from-white/10 to-transparent hidden lg:block" />
                  )}

                  <div className="flex items-start gap-6">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white/60 border border-white/10">
                        {step.step}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{step.title}</h3>
                      <p className="text-white/40 leading-relaxed text-[15px]">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
