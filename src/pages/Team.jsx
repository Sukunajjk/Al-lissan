import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { teamMembers } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Our People</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Leadership & Team</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Meet the dedicated professionals who drive our mission and lead our programs with passion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Leadership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">The Faces Behind the Mission</h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Our leadership team brings decades of combined experience in rehabilitation, education, and social impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-neutral-50 rounded-2xl p-8 text-center hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-600 flex items-center justify-center text-xl font-bold text-white mb-6">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 max-w-xs mx-auto">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-primary-100 flex items-center justify-center text-neutral-400 hover:text-primary-600 transition-all duration-300 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-blue-50 flex items-center justify-center text-neutral-400 hover:text-blue-600 transition-all duration-300 shadow-sm">
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
