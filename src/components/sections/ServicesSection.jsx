import { motion } from 'framer-motion';
import { Ear, MessageCircle, Activity, Brain, Wrench } from 'lucide-react'; // Import icons directly
import { services } from '../../data/siteData';

const iconMap = {
  Ear: Ear,
  MessageCircle: MessageCircle,
  Activity: Activity,
  Brain: Brain,
  Wrench: Wrench,
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Holistic Care</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Clinical & Support Services</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Beyond education, we provide specialized clinical interventions to support the physical, cognitive, and emotional development of every child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-neutral-200/60 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600 transition-colors">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
