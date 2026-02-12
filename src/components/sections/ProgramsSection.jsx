import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '../../data/siteData';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function ProgramsSection() {
  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400 mb-4">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Our Programs</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors group">
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.slice(0, 6).map((program, i) => {
            const Icon = iconMap[program.icon] || Heart;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <Link to={`/programs/${program.id}`} className="block relative h-full">
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <img src={program.image} alt={program.shortTitle} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                    {program.badge && (
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        program.badge === 'Flagship' ? 'bg-primary-500 text-white' : 'bg-white text-neutral-900'
                      }`}>{program.badge}</span>
                    )}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">{program.shortTitle}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{program.description}</p>
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
