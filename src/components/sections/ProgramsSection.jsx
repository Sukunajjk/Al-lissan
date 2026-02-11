import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { programs } from '../../data/siteData';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap };

export default function ProgramsSection() {
  return (
    <section className="py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          subtitle="Our Programs"
          title="Comprehensive Rehabilitation Services"
          description="Specialized programs tailored to every child's unique needs, delivered by trained professionals in state-of-the-art facilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] || Heart;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/programs/${program.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-2xl hover:shadow-primary-600/8 hover:border-primary-100 transition-all duration-400 h-full"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Badge */}
                    {program.badge && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${
                          program.badge === 'Flagship' ? 'bg-warm-400 text-warm-50' : 'bg-primary-500 text-white'
                        }`}>
                          {program.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
                      {program.shortTitle}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-5 line-clamp-2">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-600 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
