import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-semibold text-white/60 tracking-wide mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              What We Do
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Our{' '}
              <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Comprehensive rehabilitation services tailored to the unique needs of every child, delivered by over 200 trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="space-y-20">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Heart;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative rounded-3xl overflow-hidden group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" />
                      {program.badge && (
                        <span className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          program.badge === 'Flagship' ? 'bg-primary-500 text-white' : 'bg-white text-neutral-900'
                        } shadow-lg`}>
                          {program.badge}
                        </span>
                      )}
                      <div className="absolute bottom-5 right-5 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight mb-4">{program.title}</h3>
                    <p className="text-neutral-500 leading-relaxed mb-8">{program.description}</p>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Link
                        to={`/programs/${program.id}`}
                        className="inline-flex items-center gap-2.5 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                      >
                        Learn More About This Program
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
