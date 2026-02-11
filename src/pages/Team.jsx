import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { teamMembers } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Our People</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Leadership & Team
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Meet the dedicated professionals who drive our mission and lead our programs with passion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Leadership"
            title="The Faces Behind the Mission"
            description="Our leadership team brings decades of combined experience in rehabilitation, education, and social impact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-3xl font-bold text-primary-700 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    {member.avatar}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-xs mx-auto">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  <a href="#" className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
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
