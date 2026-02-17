import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Heart, Calendar, Building2, Users } from 'lucide-react';

const impactStats = [
  { 
    icon: Heart, 
    value: 5000, 
    suffix: "+", 
    label: "Children Supported", 
    description: "Providing care, education, and therapy irrespective of financial status." 
  },
  { 
    icon: Calendar, 
    value: 28, 
    suffix: "+", 
    label: "Years of Service", 
    description: "A legacy of trust and continuous service to humanity since 1996." 
  },
  { 
    icon: Building2, 
    value: 6, 
    suffix: "", 
    label: "Specialized Centers", 
    description: "State-of-the-art facilities for Speech, Hearing, and Physical therapy." 
  },
  { 
    icon: Users, 
    value: 200, 
    suffix: "+", 
    label: "Expert Staff", 
    description: "Dedicated psychologists, therapists, and special educators." 
  },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0f0d] text-white relative overflow-hidden">
        
      {/* Background Pattern - Subtle Map/Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Transparent Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            We believe in accountability. Every donation helps us expand our reach and improve the quality of life for special children.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:bg-primary-600 group-hover:border-primary-500 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
              </div>
              
              <div className="text-5xl font-bold mb-3 font-serif">
                {inView && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{stat.label}</h3>
              <p className="text-sm text-white/40 leading-relaxed px-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Badge at bottom */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm"
        >
            <p>© AUDITED & VERIFIED NON-PROFIT</p>
            <div className="flex gap-6">
                <span>Registered in Pakistan</span>
                <span>Tax Exempt Status</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
