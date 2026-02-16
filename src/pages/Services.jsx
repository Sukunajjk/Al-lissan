import { motion } from 'framer-motion';
import { Ear, MessageCircle, Activity, Brain, Wrench, Sparkles, HeartPulse, Stethoscope, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img src={service.image.replace('w=600', 'w=1400')} alt={service.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">About This Service</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            {service.longDesc || service.desc}
                        </p>
                        
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">What We Provide</h3>
                        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 mb-10">
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {["Comprehensive Assessment", "Personalized Treatment Plans", "Qualified Specialists", "Modern Equipment", "Progress Monitoring", "Family Counseling"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                        <span className="text-neutral-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
                
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                        <p className="text-white/60 mb-6">
                            Contact us to schedule an appointment or visit our campus for a consultation.
                        </p>
                        <Link to="/contact" className="block w-full py-3 bg-white text-neutral-900 font-bold text-center rounded-xl hover:bg-primary-50 transition-colors">
                            Book Appointment
                        </Link>
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

  // If ID present, show detail view
  if (id) {
    const service = services.find((s) => s.id === id);
    if (service) return <ServiceDetail service={service} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Clinical & Rehabilitation <span className="text-primary-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive, evidence-based therapies designed to empower individuals with special needs. From diagnosis to rehabilitation, we are with you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/services/${service.id}`}
                    className="block h-full bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                      {service.desc}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      View Service <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Need a Consultation?</h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Visit our Dhobi Ghat campus or any Sehara Centre for a comprehensive assessment. Our team is ready to support your child's journey.
            </p>
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary-600 px-8 font-medium text-white transition-colors hover:bg-primary-700 shadow-lg shadow-primary-600/20">
                Book an Appointment
            </Link>
        </div>
      </section>
    </div>
  );
}
