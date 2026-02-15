import { motion } from 'framer-motion';
import { Heart, Calendar, Building2, Users, BookOpen, Lightbulb, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTASection from '../components/sections/CTASection';

const milestones = [
  { icon: Heart, value: 5000, suffix: "+", label: "Children Supported" },
  { icon: Calendar, value: 28, suffix: "+", label: "Years of Service" },
  { icon: Building2, value: 6, suffix: "", label: "Rehab Centers" },
  { icon: Users, value: 200, suffix: "+", label: "Specialists" },
];

const timeline = [
  { year: "1996", title: "Foundation", desc: "Tanzeem Al-Lissan established in Karachi to address the gap in special needs rehabilitation services across Pakistan." },
  { year: "2002", title: "IFRA Launch", desc: "Institute for Rehabilitation of Autism (IFRA) launched as Pakistan's first dedicated autism rehabilitation center." },
  { year: "2010", title: "Expansion", desc: "Expanded operations to 4 specialized rehabilitation centers, each focused on a different area of need." },
  { year: "2018", title: "Professional Training", desc: "Launched post-graduate diploma programs to train the next generation of specialized therapists and educators." },
  { year: "2024", title: "6 Centers Strong", desc: "Now operating 6 specialized centers with over 200 professionals serving children across the spectrum of special needs." },
];

const values = [
  { icon: BookOpen, title: "Evidence-Based", desc: "Programs built on research-validated methods and internationally recognized standards." },
  { icon: Heart, title: "Compassion First", desc: "Every interaction guided by empathy, dignity, and genuine commitment." },
  { icon: Users, title: "Family Centered", desc: "Families as active partners in the rehabilitation process." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously adopting cutting-edge methods and technologies." },
  { icon: Shield, title: "Integrity", desc: "Full transparency, accountability, and ethical standards." },
  { icon: Globe, title: "Inclusion", desc: "Equal opportunity for every child to learn, grow, and thrive." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-sm text-white/30 mb-6">
              <Link to="/" className="hover:text-white/50 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">About</span>
            </div>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Defining the future of<br />special care
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Since 1996, Tanzeem Al-Lissan has been Pakistan's leading organization for the rehabilitation and empowerment of children with special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
              <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                From humble beginnings to nationwide impact
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Tanzeem Al-Lissan was founded in 1996 with a simple yet powerful mission — to ensure no child with a disability is denied access to quality rehabilitation. Starting from a single center in Karachi, our journey has been one of relentless dedication and growth.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Today, we operate six specialized centers staffed by over 200 trained professionals, serving thousands of children across the spectrum — from autism and hearing impairment to intellectual disabilities and psychological conditions.
              </p>
              <div className="flex items-center gap-8 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-neutral-900">1996</div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Established</p>
                </div>
                <div className="w-px h-10 bg-neutral-200" />
                <div>
                  <div className="text-3xl font-bold text-neutral-900">Karachi</div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Pakistan</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Children in rehabilitation" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/80 text-sm">Our children during a group therapy session</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" alt="Special education classroom" className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/80 text-sm">Specialized education at one of our six centers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center bg-white/5 rounded-2xl p-6">
                <m.icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <p className="text-xs text-white/40">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Milestones</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Our Journey</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-xl p-6 border border-neutral-200/60 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center shrink-0">
                  <div className="w-9 h-9 bg-primary-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary-600 tracking-wider hidden md:block">{item.year}</span>
                  <div className="md:hidden bg-white rounded-xl p-6 border border-neutral-200/60">
                    <span className="text-xs font-bold text-primary-600 tracking-wider block mb-2">{item.year}</span>
                    <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-14">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Guiding Principles</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-neutral-50 rounded-2xl p-7 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-4 transition-colors">
                  <val.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{val.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
