import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Brain, Ear, Heart, Users, ShieldCheck, GraduationCap, ClipboardCheck, FileHeart, TrendingUp, CheckCircle2, Building2, Star, Sparkles, Activity, MessageCircle, Wrench } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { programs, processSteps, stats } from '../data/siteData';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTASection from '../components/sections/CTASection';

const iconMap = { Brain, Ear, Heart, Users, ShieldCheck, GraduationCap, ClipboardCheck, FileHeart, TrendingUp, Sparkles, Activity, MessageCircle, Wrench };

// =========== PROGRAM DETAIL VIEW ===========
function ProgramDetail({ program }) {
  const Icon = iconMap[program.icon] || Heart;
  const otherPrograms = programs.filter((p) => p.id !== program.id);

  return (
    <>
      {/* Hero with program image */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={program.image.replace('w=600', 'w=1400')} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/programs" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Programs
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              {program.badge && (
                <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  {program.badge}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              {program.title}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {program.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-6">About This Program</h2>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {program.description} Our team of certified specialists provides personalized therapy sessions, educational programs, and family support services to ensure every child reaches their maximum potential.
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-8">
                    Through evidence-based approaches and a deep understanding of individual needs, we create comprehensive care plans that address every aspect of a child's development — cognitive, physical, emotional, and social.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-5">What We Offer</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "Individual therapy sessions",
                    "Group-based learning activities",
                    "Family counseling & training",
                    "Progress monitoring & reports",
                    "Mainstream transition support",
                    "Assistive technology access",
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 py-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <img src={program.image.replace('w=600', 'w=1000')} alt={program.title} className="w-full h-72 object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-neutral-50 rounded-2xl p-7">
                <h3 className="font-bold text-neutral-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { label: "Age Range", value: "2-18 years" },
                    { label: "Sessions", value: "5 days/week" },
                    { label: "Team Size", value: "30+ specialists" },
                    { label: "Established", value: "Since 1996" },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-center justify-between pb-3 border-b border-neutral-200/60 last:border-0 last:pb-0">
                      <span className="text-sm text-neutral-500">{fact.label}</span>
                      <span className="text-sm font-bold text-neutral-900">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-primary-600 rounded-2xl p-7 text-white">
                <Star className="w-6 h-6 text-primary-200 mb-3" />
                <h3 className="font-bold text-lg mb-2">Enroll Your Child</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  Take the first step towards your child's brighter future. Our team is ready to help.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold text-sm rounded-xl hover:bg-neutral-100 transition-colors">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Other programs */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h3 className="font-bold text-neutral-900 mb-4">Other Programs</h3>
                <div className="space-y-2">
                  {otherPrograms.slice(0, 4).map((p) => {
                    const PIcon = iconMap[p.icon] || Heart;
                    return (
                      <Link key={p.id} to={`/programs/${p.id}`} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-neutral-100 group-hover:bg-primary-100 flex items-center justify-center shrink-0 transition-colors">
                          <PIcon className="w-4 h-4 text-neutral-500 group-hover:text-primary-600 transition-colors" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors truncate">{p.shortTitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 transition-colors shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

// =========== PROGRAMS LISTING VIEW ===========
export default function Programs() {
  const { id } = useParams();

  // If we have an ID, show the detail view
  if (id) {
    const program = programs.find((p) => p.id === id);
    if (program) return <ProgramDetail program={program} />;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-[#0d2818] to-neutral-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Building2 className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-white/80 font-medium">6 Specialized Centers</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Programs designed to<br />
              <span className="text-primary-400">unlock potential</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mb-10">
              From autism rehabilitation to professional training courses, our programs cover the full spectrum of special needs with evidence-based approaches.
            </p>
          </motion.div>

          {/* Mini stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((stat, i) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-5 py-4">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured program (first / flagship) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to={`/programs/${programs[0].id}`} className="group grid lg:grid-cols-2 gap-0 bg-neutral-900 rounded-2xl overflow-hidden">
              <div className="relative h-72 lg:h-[480px] overflow-hidden">
                <img src={programs[0].image.replace('w=600', 'w=1000')} alt={programs[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/30 lg:block hidden" />
                <span className="absolute top-6 left-6 px-3.5 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  {programs[0].badge || 'Featured'}
                </span>
              </div>
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <span className="text-primary-400 font-semibold text-sm mb-4">Flagship Program</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-snug group-hover:text-primary-300 transition-colors">
                  {programs[0].title}
                </h2>
                <p className="text-white/40 leading-relaxed mb-8">{programs[0].description}</p>
                <div className="flex items-center gap-3 mb-8">
                  {["ABA Therapy", "Social Skills", "Speech Development"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-medium">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All programs grid */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">All Programs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Explore our centers</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => {
              // Get icon from map, default to Heart if not found
              const Icon = iconMap[program.icon] || Heart;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link to={`/programs/${program.id}`}
                    className="group block bg-white rounded-2xl border border-neutral-200/60 overflow-hidden hover:shadow-lg hover:border-primary-200/60 transition-all duration-500 h-full">
                    <div className="relative h-52 overflow-hidden">
                      <img src={program.image} alt={program.shortTitle} loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" />
                      {program.badge && (
                        <span className="absolute top-4 left-4 px-2.5 py-1 bg-primary-600 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">
                          {program.badge}
                        </span>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors tracking-tight">{program.shortTitle}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">{program.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Our rehabilitation process</h2>
            <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed mt-4">
              A systematic, evidence-based approach that ensures every child receives the care they need.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const StepIcon = iconMap[step.icon] || Heart;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-neutral-200 z-0" />
                  )}
                  <div className="relative bg-neutral-50 rounded-2xl p-7 text-center group-hover:bg-primary-50 transition-colors duration-300">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-5 transition-colors relative z-10">
                      <span className="text-primary-700 font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us mini section */}
      <section className="py-20 lg:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Why Al-Lissan</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-snug">
                What sets us apart from other organizations
              </h2>
              <p className="text-white/40 leading-relaxed mb-8">
                Nearly three decades of unwavering commitment to quality care, evidence-based rehabilitation, and a deep respect for every child's unique potential.
              </p>
              <ul className="space-y-4">
                {[
                  "30+ years of specialized expertise in child rehabilitation",
                  "200+ certified therapists, educators, and support staff",
                  "Internationally recognized evidence-based methodologies",
                  "Comprehensive family support and training programs",
                  "Proven track record of successful mainstream transitions",
                ].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span className="text-white/50 text-[15px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Our impact"
                  className="w-full h-[450px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
