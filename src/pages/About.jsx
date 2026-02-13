import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Users,
  Calendar,
  Building2,
  Target,
  Lightbulb,
  HandHeart,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTASection from '../components/sections/CTASection';

const timeline = [
  {
    year: '1996',
    title: 'Foundation',
    desc: 'Tanzeem Al-Lissan was established in Karachi with a vision to serve special children and provide them world-class rehabilitation.',
  },
  {
    year: '2002',
    title: 'IFRA Launch',
    desc: "Institute for Rehabilitation of Autism (IFRA) was launched as Pakistan's pioneering autism intervention center.",
  },
  {
    year: '2010',
    title: 'Expansion',
    desc: 'Expanded to 4 rehabilitation centers covering autism, hearing impairment, intellectual disabilities, and mental health.',
  },
  {
    year: '2018',
    title: 'Professional Training',
    desc: 'Launched post-graduate diploma programs in Speech Therapy, Autism Studies, and Special Education.',
  },
  {
    year: '2024',
    title: '6 Centers Strong',
    desc: 'Now operating 6 specialized centers with 200+ trained professionals, serving over 5,000 children across Pakistan.',
  },
];

const milestones = [
  { icon: Heart, value: 5000, suffix: '+', label: 'Children Supported' },
  { icon: Calendar, value: 28, suffix: '+', label: 'Years of Service' },
  { icon: Building2, value: 6, suffix: '', label: 'Rehab Centers' },
  { icon: Users, value: 200, suffix: '+', label: 'Specialists' },
];

const coreValues = [
  {
    icon: Target,
    title: 'Evidence-Based',
    desc: 'We utilize scientifically proven rehabilitation approaches tailored to each child\'s unique needs.',
  },
  {
    icon: Heart,
    title: 'Compassion First',
    desc: 'Every interaction is rooted in empathy, understanding, and genuine care for our children and families.',
  },
  {
    icon: Users,
    title: 'Family Centered',
    desc: 'We believe in empowering families as active partners in the rehabilitation journey.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Continuously adopting the latest technologies and methodologies in special education.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Maintaining the highest standards of transparency and ethical practice in all our operations.',
  },
  {
    icon: HandHeart,
    title: 'Inclusion',
    desc: 'Advocating for a society where special children are accepted, valued, and integrated.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function About() {
  const counterRef = useRef(null);
  const counterInView = useInView(counterRef, { once: true, margin: '-100px' });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="absolute inset-0 dot-pattern opacity-40 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-neutral-400 mb-10"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-primary-400 mb-5"
          >
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl"
          >
            Defining the Future of{' '}
            <span className="text-primary-400">Special Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-0"
          >
            For nearly three decades, Tanzeem Al-Lissan has been at the forefront of
            special-needs rehabilitation in Pakistan, combining clinical expertise with
            unwavering compassion to transform thousands of young lives.
          </motion.p>
        </div>
      </section>

      {/* ── Narrative Section ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* Left - Sticky Text */}
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-primary-600 mb-4"
              >
                Our Story
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-neutral-900 leading-tight mb-6"
              >
                From Humble Beginnings to{' '}
                <span className="text-primary-600">Nationwide Impact</span>
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="text-neutral-500 leading-relaxed mb-5"
              >
                Founded in 1996, Tanzeem Al-Lissan began with a singular mission: to
                provide a voice to those who need it most. What started as a small room
                with big dreams has evolved into a beacon of hope for thousands of
                families across Pakistan.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="text-neutral-500 leading-relaxed"
              >
                Today, with six specialized rehabilitation centers and over 200 trained
                professionals, we deliver evidence-based programs in autism
                intervention, speech therapy, hearing rehabilitation, psychological
                support, and professional training -- touching the lives of more than
                5,000 children and their families.
              </motion.p>
            </div>

            {/* Right - Stacked Images */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-sm aspect-[4/3] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1559027615-1224a44641b8?w=800&q=80"
                  alt="Early therapy sessions at Al-Lissan"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-5 px-6">
                  <p className="text-white text-sm font-medium">
                    Early therapy sessions — 1996
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative overflow-hidden rounded-sm aspect-[4/3] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
                  alt="Opening of the Autism Center"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-5 px-6">
                  <p className="text-white text-sm font-medium">
                    Inauguration of the IFRA Autism Center — 2002
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Counters ── */}
      <section ref={counterRef} className="py-20 md:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 tracking-tight">
                  {counterInView && (
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  )}
                </div>
                <p className="text-sm text-neutral-500 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 md:py-32 bg-neutral-50" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-primary-600 mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-extrabold text-neutral-900"
            >
              Key Milestones
            </motion.h2>
          </div>

          {/* Timeline track */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot on center line */}
                    <div className="absolute left-4 md:left-1/2 top-1 md:top-1/2 w-3 h-3 bg-primary-600 border-[3px] border-neutral-50 -translate-x-1/2 md:-translate-y-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        isLeft ? 'md:pr-0 md:text-right' : 'md:pl-0 md:text-left'
                      }`}
                    >
                      <span className="inline-block text-xs font-bold tracking-wider text-primary-600 bg-primary-50 px-3 py-1 mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-primary-600 mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-extrabold text-neutral-900"
            >
              What We Stand For
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white p-8 md:p-10"
              >
                <div className="w-10 h-10 bg-primary-50 flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
