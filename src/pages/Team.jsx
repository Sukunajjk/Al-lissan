import { motion } from 'framer-motion';
import { Mail, Linkedin, Users } from 'lucide-react';
import { teamMembers } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent-500/5 rounded-full blur-[100px]" />
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
              <Users className="w-3.5 h-3.5 text-primary-400" />
              Our People
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Leadership &{' '}
              <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Meet the dedicated professionals who drive our mission and lead our programs with passion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              The Faces Behind the <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Our leadership team brings decades of combined experience in rehabilitation, education, and social impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {member.avatar}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 max-w-xs mx-auto">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
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
