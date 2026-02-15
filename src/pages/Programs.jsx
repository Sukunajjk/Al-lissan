import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function Programs() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Our Programs</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Comprehensive rehabilitation services tailored to the unique needs of every child, delivered by over 200 trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Heart;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? '' : ''}`}>
                    <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="relative h-72 lg:h-full overflow-hidden">
                        <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
                        {program.badge && (
                          <span className="absolute top-5 left-5 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                            {program.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                      <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">{program.title}</h3>
                      <p className="text-neutral-500 leading-relaxed mb-8">{program.description}</p>
                      <Link to={`/programs/${program.id}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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
