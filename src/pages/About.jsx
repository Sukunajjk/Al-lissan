import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Calendar, Building } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const milestones = [
  { year: "1996", title: "Foundation", description: "Al-Lissan was founded with a vision to serve special children in Pakistan." },
  { year: "2002", title: "IFRA Established", description: "The Institute for Rehabilitation of Autism opened its doors." },
  { year: "2008", title: "Hearing Center", description: "Dedicated hearing impaired rehabilitation center was inaugurated." },
  { year: "2014", title: "Al-Masoom Center", description: "Center for intellectually disabled children began operations." },
  { year: "2019", title: "IRADA Program", description: "Comprehensive rehabilitation for differently abled children launched." },
  { year: "2024", title: "Professional Courses", description: "Post-graduate diploma programs in therapy and special education introduced." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A Legacy of Compassion & Impact
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Since 1996, Tanzeem Al-Lissan has been at the forefront of rehabilitating children with diverse disabilities, creating pathways to independence, dignity, and inclusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold">28+</div>
                  <div className="text-sm text-primary-100">Years of Service</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-600 mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                From a Dream to a Movement
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Tanzeem Al-Lissan was born from a simple but powerful belief: every child, regardless of their abilities, deserves the opportunity to learn, grow, and thrive.
                </p>
                <p>
                  What began as a small initiative in 1996 has grown into one of Pakistan's most respected organizations for child rehabilitation, serving thousands of families through six specialized centers.
                </p>
                <p>
                  Our approach combines internationally recognized therapeutic methods with culturally sensitive care, ensuring that each child receives personalized attention in a nurturing environment.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { icon: Building, label: "6 Centers" },
                  { icon: Users, label: "5000+ Children" },
                  { icon: Calendar, label: "Since 1996" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-2">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones of Impact"
            description="Key moments that shaped our mission and expanded our reach."
          />

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-semibold text-primary-600 mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{milestone.title}</h3>
                  <p className="text-neutral-500">{milestone.description}</p>
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
