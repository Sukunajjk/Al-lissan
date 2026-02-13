import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../../data/siteData';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function ProgramsSection() {
  return (
    <section className="relative py-28 bg-neutral-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-600/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-600" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-400">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Programs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
            >
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
          {programs.slice(0, 6).map((program, i) => {
            const Icon = iconMap[program.icon] || Heart;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden bg-neutral-950"
              >
                <Link to={`/programs/${program.id}`} className="block relative h-full">
                  {/* Image */}
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.shortTitle}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

                    {/* Badge top-left */}
                    {program.badge && (
                      <span
                        className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                          program.badge === 'Flagship'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-neutral-900'
                        }`}
                      >
                        {program.badge}
                      </span>
                    )}

                    {/* Arrow top-right on hover */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-4 h-4 text-primary-400" />
                      <h3 className="text-white font-bold text-lg tracking-tight">
                        {program.shortTitle}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                      {program.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
