import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
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
          <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-primary-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-500" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-400">What We Do</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Our Programs
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-2xl">
              Comprehensive rehabilitation services tailored to the unique needs of every child, delivered by over 200 trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List — alternating layout */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Heart;
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative overflow-hidden group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                      {program.badge && (
                        <span
                          className={`absolute top-4 left-4 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                            program.badge === 'Flagship'
                              ? 'bg-primary-600 text-white'
                              : 'bg-white text-neutral-900'
                          }`}
                        >
                          {program.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                      {program.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-8">
                      {program.description}
                    </p>
                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center gap-2.5 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
