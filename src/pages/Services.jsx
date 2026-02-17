import { motion } from 'framer-motion';
import { Ear, MessageCircle, Activity, Brain, Wrench, Sparkles, HeartPulse, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

const iconMap = {
  Ear, MessageCircle, Activity, Brain, Wrench, Sparkles, HeartPulse, Stethoscope
};

// =========== SERVICE DETAIL VIEW ===========
function ServiceDetail({ service }) {
  const Icon = iconMap[service.icon] || Activity;
  
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-neutral-900">
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
        >
          <img src={service.image.replace('w=600', 'w=1600')} alt={service.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors uppercase tracking-widest">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Return to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-900/50">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-primary-600 font-bold text-sm tracking-wider uppercase mb-3 block">Overview</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-8">Comprehensive Care</h2>
                        <div className="prose prose-lg prose-neutral mb-12">
                            <p className="lead text-xl text-neutral-600 font-medium">
                                {service.longDesc || service.desc}
                            </p>
                            <p>
                                At Tanzeem-al-Lissan, we believe in a holistic approach. This service is integrated with our educational and vocational programs to ensure that every individual receives continuous, 360-degree support tailored to their specific life stage and goals.
                            </p>
                        </div>
                        
                        <h3 className="text-2xl font-serif text-neutral-900 mb-6">Key Features</h3>
                        <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
                            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {["Evidence-Based Practices", "Certified Specialists", "Modern Diagnostic Tools", "Family-Centered Approach", "Regular Progress Monitoring", "Interdisciplinary Team"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-neutral-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
                
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-neutral-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <h3 className="text-2xl font-serif mb-4 relative z-10">Start the Journey</h3>
                        <p className="text-white/60 mb-8 relative z-10">
                            Early intervention changes lives. Schedule an initial consultation with our specialists today.
                        </p>
                        <Link to="/contact" className="block w-full py-4 bg-white text-neutral-900 font-bold text-center rounded-xl hover:bg-neutral-100 transition-colors relative z-10">
                            Book Appointment
                        </Link>
                    </div>

                    <div className="p-8 rounded-3xl border border-neutral-200 bg-white">
                        <h4 className="font-bold text-neutral-900 mb-4">Related Services</h4>
                        <ul className="space-y-4">
                            {services.filter(s => s.id !== service.id).slice(0, 3).map(s => (
                                <li key={s.id}>
                                    <Link to={`/services/${s.id}`} className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                            <ArrowRight className="w-4 h-4 -rotate-45" />
                                        </div>
                                        <span className="text-neutral-600 font-medium group-hover:text-primary-700 transition-colors">{s.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

// =========== SERVICES LIST VIEW ===========
export default function Services() {
  const { id } = useParams();

  if (id) {
    const service = services.find((s) => s.id === id);
    if (service) return <ServiceDetail service={service} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-neutral-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-900/30 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-6 block">
                  Holistic Ecosystem
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 tracking-tight">
                Clinical Excellence
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
                We view rehabilitation as a connected journey. Our services overlap and integrate to support the whole child—physically, mentally, and emotionally.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Services "Ecosystem" Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Link 
                    to={`/services/${service.id}`}
                    className="flex flex-col flex-grow bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-50 group-hover:bg-primary-600 flex items-center justify-center mb-8 transition-colors duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary-600/30">
                          <Icon className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                        
                        <h3 className="text-2xl font-serif text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-neutral-500 leading-relaxed mb-8 line-clamp-3">
                          {service.desc}
                        </p>
                    </div>
                    
                    <div className="mt-auto relative z-10 pt-6 border-t border-neutral-100 group-hover:border-primary-100 transition-colors">
                        <span className="inline-flex items-center gap-2 text-neutral-900 font-bold text-sm uppercase tracking-wide group-hover:text-primary-700 transition-colors">
                            Explore Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process "Connected" Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-4xl font-serif text-neutral-900 mb-4">A Unified Path to Progress</h2>
                 <p className="text-neutral-500">How our services connect to build a future.</p>
             </div>

             <div className="relative">
                 {/* Connection Line */}
                 <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 -translate-y-1/2 hidden md:block border-t border-dashed border-neutral-300"></div>

                 <div className="grid md:grid-cols-4 gap-8 relative z-10">
                     {[
                         { step: "01", title: "Diagnosis", desc: "Scientific Assessment" },
                         { step: "02", title: "Therapy", desc: "Targeted Intervention" },
                         { step: "03", title: "Education", desc: "Academic Integration" },
                         { step: "04", title: "Skills", desc: "Vocational Training" }
                     ].map((item, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white p-8 rounded-2xl text-center shadow-sm border border-neutral-100"
                         >
                             <div className="inline-block px-3 py-1 bg-neutral-900 text-white text-xs font-bold rounded-full mb-4">
                                 STEP {item.step}
                             </div>
                             <h3 className="text-xl font-serif font-medium text-neutral-900 mb-2">{item.title}</h3>
                             <p className="text-sm text-neutral-500">{item.desc}</p>
                         </motion.div>
                     ))}
                 </div>
             </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
