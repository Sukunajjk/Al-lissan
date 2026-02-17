import { motion } from 'framer-motion';
import { Target, CheckCircle2, Heart, Globe, Sparkles, Compass } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Heart, title: "Compassion", description: "Every interaction is guided by empathy and genuine care for each child's well-being." },
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
      {/* Editorial Hero "The Manifesto" */}
      <section className="relative pt-32 pb-24 bg-neutral-900 text-white overflow-hidden">
         {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <span className="text-primary-400 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
                    Our Core Purpose
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8">
                    "To empower lives through <span className="text-primary-500 italic">education</span> and care."
                </h1>
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                    Tanzeem Al-Lissan is more than an organization; it is a movement to ensure dignity, independence, and hope for every special child.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Vision Manifesto */}
      <section className="py-24 bg-white relative">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Minimalist Visual */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="lg:col-span-5 relative"
            >
               <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden relative">
                   <img src={import.meta.env.BASE_URL + "720.800.png"} alt="Vision" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
               </div>
               <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neutral-100 -z-10"></div>
            </motion.div>

            {/* Editorial Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="lg:col-span-7"
            >
              <h2 className="text-6xl font-serif text-neutral-900 mb-8 opacity-10">01</h2>
              <h3 className="text-4xl font-bold text-neutral-900 tracking-tight mb-6">Our Vision</h3>
              <div className="prose prose-lg text-neutral-600">
                <p className="lead text-xl font-medium text-neutral-800">
                  To create a society where disability is not a barrier but a different ability waiting to be nurtured.
                </p>
                <p>
                  We envision a world where every individual with special needs is provided with inclusive education, state-of-the-art rehabilitation, and professional training, enabling them to live with dignity, independence, and equal opportunities as productive members of society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Dark Mode */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
             
             {/* Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="lg:col-span-7 order-2 lg:order-1"
            >
               <h2 className="text-6xl font-serif text-white mb-8 opacity-10">02</h2>
               <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-primary-500/30 flex items-center justify-center text-primary-400">
                        <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tight">Our Mission</h3>
               </div>
               
               <p className="text-xl text-white/80 leading-relaxed font-light border-l-2 border-primary-500 pl-6 mb-8">
                 "To provide quality special education, rehabilitation, and therapeutic services... while preparing skilled professionals through accredited academic and training programs."
               </p>
               
               <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-white/60 text-sm">
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary-500" />
                       <span>Quality Education</span>
                   </div>
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary-500" />
                       <span>Therapeutic Services</span>
                   </div>
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary-500" />
                       <span>Professional Training</span>
                   </div>
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary-500" />
                       <span>Social Inclusion</span>
                   </div>
               </div>
            </motion.div>

             {/* Minimalist Visual */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="lg:col-span-5 order-1 lg:order-2"
            >
                 <div className="aspect-square rounded-full overflow-hidden border-4 border-white/5 relative">
                     <img src={import.meta.env.BASE_URL + "bn_slider.jpg"} alt="Mission" className="w-full h-full object-cover opacity-80" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent mix-blend-multiply"></div>
                 </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3 uppercase tracking-widest">Roadmap</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">Strategic Objectives</h2>
            <p className="max-w-2xl mx-auto text-neutral-500">The actionable steps we take every day to turn our vision into reality.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
             {objectives.map((obj, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} 
                  className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm flex items-center justify-center border border-primary-100">
                    {i + 1}
                  </span>
                  <p className="text-neutral-700 leading-relaxed text-sm pt-1">{obj}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grids-cols-5 items-center gap-12">
              <div className="lg:col-span-2">
                 <h2 className="text-4xl font-serif text-neutral-900 mb-6">Our Operating Principles</h2>
                 <p className="text-neutral-500 leading-relaxed mb-8">
                    These core values are not just words on a wall; they are the filters through which we make every decision, hire every staff member, and treat every child.
                 </p>
              </div>
              
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="p-6 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group">
                    <value.icon className="w-8 h-8 text-neutral-400 group-hover:text-primary-600 mb-4 transition-colors" />
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-neutral-500">{value.description}</p>
                  </motion.div>
                ))}
              </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
