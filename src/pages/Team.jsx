import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { teamMembers } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

export default function Team() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bn_slider.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-4 block">
                    Our Leadership
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-[1.1]">
                    Guided by <span className="text-primary-400 italic">compassion</span>, led by experience.
                </h1>
                <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light">
                    Our team is a collective of educators, therapists, and visionaries dedicated to a single mission: empowering every child to reach their full potential.
                </p>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Image / Avatar Container */}
                <div className="mb-6 relative">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden relative">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-neutral-50 border border-neutral-100 group-hover:bg-primary-50/30 transition-colors">
                                <span className="text-6xl text-neutral-200 font-serif opacity-50">{member.name.charAt(0)}</span>
                            </div>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300"></div>
                        
                        {/* Social Links on Hover */}
                        <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-primary-600 hover:text-white transition-colors shadow-lg">
                                <Linkedin className="w-4 h-4" />
                             </button>
                             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-primary-600 hover:text-white transition-colors shadow-lg">
                                <Mail className="w-4 h-4" />
                             </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                   <h3 className="text-2xl font-serif text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors">
                        {member.name}
                   </h3>
                   <p className="text-primary-600 font-medium text-sm tracking-wide uppercase mb-4">
                        {member.role}
                   </p>
                   <p className="text-neutral-500 leading-relaxed text-sm border-l-2 border-neutral-100 pl-4">
                        {member.bio}
                   </p>
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
