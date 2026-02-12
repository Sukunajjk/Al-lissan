import { motion } from 'framer-motion';
import { Eye, Target, Compass, Star, Sparkles, Globe, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Star, title: "Compassion", description: "Every interaction is guided by empathy and genuine care for each child's well-being.", color: "from-rose-500 to-pink-600" },
  { icon: Sparkles, title: "Excellence", description: "We pursue the highest standards in rehabilitation, therapy, and education.", color: "from-primary-500 to-primary-700" },
  { icon: Globe, title: "Inclusion", description: "Creating a world where every child is valued and has equal opportunity to thrive.", color: "from-cyan-500 to-blue-600" },
  { icon: Compass, title: "Innovation", description: "Continuously adopting cutting-edge methods and approaches in special needs education.", color: "from-amber-500 to-orange-600" },
];

const missionPoints = [
  "Provide evidence-based rehabilitation for children with diverse disabilities",
  "Train a new generation of specialized therapists and educators",
  "Advocate for inclusive policies and societal acceptance",
  "Support families with guidance, counseling, and resources",
];

export default function VisionMission() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
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
              <Eye className="w-3.5 h-3.5 text-primary-400" />
              Our Purpose
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Vision &{' '}
              <span className="text-gradient">Mission</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Guided by a clear vision and driven by a powerful mission to transform the lives of special children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-6">
                Our <span className="text-gradient">Vision</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                To empower special children with confidence and independence, helping them thrive in society as valued, capable individuals.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                We envision a Pakistan where no child is left behind because of a disability — where every family has access to world-class rehabilitation, and where society embraces neurodiversity as a strength.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                  alt="Our Vision"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-32 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                  alt="Our Mission"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                To help special children learn, grow their skills, and become a part of society through comprehensive rehabilitation and education.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-white/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 bg-neutral-50/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">What Guides Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center bg-white rounded-3xl p-8 border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
