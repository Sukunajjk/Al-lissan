import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../../data/siteData';

export default function ProgramsSection() {
  const featured = programs.slice(0, 3);
  const rest = programs.slice(3);

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3 tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Specialized programs for{' '}
              <span className="text-primary-600">every need</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors group">
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Featured programs - large cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/programs/${program.id}`} className="group block relative rounded-2xl overflow-hidden bg-neutral-900 h-[380px]">
                <img
                  src={program.image}
                  alt={program.shortTitle}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                {program.badge && (
                  <span className="absolute top-5 left-5 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    {program.badge}
                  </span>
                )}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{program.shortTitle}</h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{program.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining programs - compact row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link to={`/programs/${program.id}`} className="group flex items-center gap-4 bg-white rounded-xl border border-neutral-200/60 p-4 hover:border-primary-200 hover:shadow-sm transition-all duration-300">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <img src={program.image} alt={program.shortTitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors text-sm">{program.shortTitle}</h4>
                  <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{program.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-600 shrink-0 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
