import { motion } from 'framer-motion';
import { Eye, Target, Star, Sparkles, Globe, Compass, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Star, title: "Compassion", description: "Every interaction is guided by empathy and genuine care for each child's well-being." },
  { icon: Sparkles, title: "Quality", description: "Upholding standards of quality, inclusion, and professionalism in all programs." },
  { icon: Globe, title: "Inclusion", description: "Creating a world where every child is valued and has equal opportunity to thrive." },
  { icon: Compass, title: "Empowerment", description: "Promoting vocational training and life-skills for independent living." },
];

const objectives = [
  "To provide special education and rehabilitation services tailored to the needs of hearing-impaired, intellectually challenged, physically challenged, and autistic individuals.",
  "To offer therapeutic and clinical support services, including speech and language therapy and psychological services.",
  "Offering PGD and degree programs in SLT, ASD, Clinical Psychology, Special Education, and IT, preparing skilled professionals.",
  "To promote vocational training and life-skills development for independent and productive living.",
  "To encourage holistic development through co-curricular activities, sports, arts, and social participation.",
  "To strengthen parental involvement and community awareness in supporting individuals with special needs.",
  "To expand outreach services to underserved and rural communities.",
  "To uphold standards of quality, inclusion, professionalism, and compassion in all programs and services.",
];

export default function VisionMission() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Our Core Purpose</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Vision & Mission</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Empowering lives through education, rehabilitation, and professional training.
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
              <p className="text-lg text-neutral-600 leading-relaxed mb-6 font-medium">
                "To empower individuals with special needs through inclusive education, rehabilitation, and professional training, enabling them to live with dignity, independence, and equal opportunities."
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" alt="Our Mission" className="w-full h-[400px] object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
                "To provide quality special education, rehabilitation, and therapeutic services for hearing-impaired, intellectually challenged, physically challenged, and autistic individuals, while preparing skilled professionals through accredited academic and training programs."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Our Goals</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Objectives</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
             {objectives.map((obj, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{obj}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Core Values</h2>
            <p className="text-neutral-500">The principles that guide our every action.</p>
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
