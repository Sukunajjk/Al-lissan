import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { programs } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Programs
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Comprehensive rehabilitation services tailored to the unique needs of every child, delivered by trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Heart;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{program.title}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">{program.description}</p>
                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More About This Program
                      <ArrowRight className="w-4 h-4" />
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
