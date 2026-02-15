import { motion } from 'framer-motion';
import { Eye, Target, Star, Sparkles, Globe, Compass, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Star, title: "Compassion", description: "Every interaction is guided by empathy and genuine care for each child's well-being." },
  { icon: Sparkles, title: "Excellence", description: "We pursue the highest standards in rehabilitation, therapy, and education." },
  { icon: Globe, title: "Inclusion", description: "Creating a world where every child is valued and has equal opportunity to thrive." },
  { icon: Compass, title: "Innovation", description: "Continuously adopting cutting-edge methods and approaches in special needs education." },
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
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Our Purpose</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Vision & Mission</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Guided by a clear vision and driven by a powerful mission to transform the lives of special children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                To empower special children with confidence and independence, helping them thrive in society as valued, capable individuals.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                We envision a Pakistan where no child is left behind because of a disability — where every family has access to world-class rehabilitation, and where society embraces neurodiversity as a strength.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Our Vision" className="w-full h-[400px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" alt="Our Mission" className="w-full h-[400px] object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                To help special children learn, grow their skills, and become a part of society through comprehensive rehabilitation and education.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-start gap-3 text-white/50">
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
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 text-center group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-5 transition-colors">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{value.title}</h3>
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
