import { motion } from 'framer-motion';
import { Eye, Target, Compass, Star, Sparkles, Globe } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Star, title: "Compassion", description: "Every interaction is guided by empathy and genuine care for each child's well-being." },
  { icon: Sparkles, title: "Excellence", description: "We pursue the highest standards in rehabilitation, therapy, and education." },
  { icon: Globe, title: "Inclusion", description: "Creating a world where every child is valued and has equal opportunity to thrive." },
  { icon: Compass, title: "Innovation", description: "Continuously adopting cutting-edge methods and approaches in special needs education." },
];

export default function VisionMission() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Our Purpose</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vision & Mission
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Guided by a clear vision and driven by a powerful mission to transform the lives of special children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Our Vision</h2>
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                alt="Our Vision"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                alt="Our Mission"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                To help special children learn, grow their skills, and become a part of society through comprehensive rehabilitation and education.
              </p>
              <ul className="space-y-4">
                {[
                  "Provide evidence-based rehabilitation for children with diverse disabilities",
                  "Train a new generation of specialized therapists and educators",
                  "Advocate for inclusive policies and societal acceptance",
                  "Support families with guidance, counseling, and resources",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600">
                    <span className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-600 mb-3">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600" />
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
