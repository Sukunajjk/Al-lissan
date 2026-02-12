import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Calendar, Building2, Award, Target, Lightbulb, HandHeart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTASection from '../components/sections/CTASection';

const timeline = [
  { year: "1996", title: "Foundation", desc: "Tanzeem Al-Lissan was established in Karachi with a vision to serve special children and provide them world-class rehabilitation." },
  { year: "2002", title: "IFRA Launch", desc: "Institute for Rehabilitation of Autism (IFRA) was launched as Pakistan's pioneering autism intervention center." },
  { year: "2010", title: "Expansion", desc: "Expanded to 4 rehabilitation centers covering autism, hearing impairment, intellectual disabilities, and mental health." },
  { year: "2018", title: "Professional Training", desc: "Launched post-graduate diploma programs in Speech Therapy, Autism Studies, and Special Education." },
  { year: "2024", title: "6 Centers Strong", desc: "Now operating 6 specialized centers with 200+ trained professionals, serving over 5,000 children across Pakistan." },
];

const milestones = [
  { icon: Heart, value: 5000, suffix: "+", label: "Children Supported", color: "from-rose-500 to-pink-600" },
  { icon: Calendar, value: 28, suffix: "+", label: "Years of Service", color: "from-primary-500 to-primary-700" },
  { icon: Building2, value: 6, suffix: "", label: "Rehab Centers", color: "from-cyan-500 to-blue-600" },
  { icon: Users, value: 200, suffix: "+", label: "Specialists", color: "from-amber-500 to-orange-600" },
];

const coreValues = [
  "Evidence-based rehabilitation approaches",
  "Child-centered, compassionate care",
  "Family empowerment and involvement",
  "Continuous professional development",
  "Community awareness and inclusion",
  "Transparency in all operations",
];

export default function About() {
  const counterRef = useRef(null);
  const counterInView = useInView(counterRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
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
              <Heart className="w-3.5 h-3.5 text-primary-400" />
              Our Story
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              About <span className="text-gradient">Al-Lissan</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Nearly three decades of transforming lives, empowering families, and building an inclusive society for special children in Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - side by side */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-6">
                A Journey of <span className="text-gradient">Compassion</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Founded in 1996, Tanzeem Al-Lissan has been Pakistan's pioneering organization dedicated to the rehabilitation and development of special children. What started as a small initiative has grown into a nationwide network of 6 specialized rehabilitation centers.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Our holistic approach combines evidence-based rehabilitation techniques, inclusive education, and family support to help every child reach their full potential.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {coreValues.map((value, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                    <span className="text-sm text-neutral-600">{value}</span>
                  </div>
                ))}
              </div>

              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/vision-mission" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group text-[15px]">
                  Read Our Vision & Mission
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Children at Al-Lissan"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/5 border border-neutral-100"
              >
                <div className="text-3xl font-extrabold text-primary-600">28+</div>
                <div className="text-sm text-neutral-500 font-medium">Years of Impact</div>
              </motion.div>
              {/* Small decorative */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-20 blur-sm img-morph" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones - counters */}
      <section ref={counterRef} className="relative py-32 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-accent-500/3 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400 mb-4">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Numbers That <span className="text-gradient">Matter</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8 text-center group hover:border-primary-500/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {counterInView && <AnimatedCounter value={item.value} suffix={item.suffix} />}
                </div>
                <p className="text-sm text-white/30 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 bg-neutral-50/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-14 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full ring-4 ring-white -translate-x-2 md:-translate-x-2 mt-1 z-10 shadow-lg shadow-primary-600/20" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-14' : 'md:text-left md:pl-14'} pl-12 md:pl-0`}>
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-3">{item.year}</span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
