import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

const impactStats = [
  { icon: Users, value: 5000, suffix: "+", label: "Children Supported", description: "Lives transformed through rehabilitation", accent: "from-primary-500 to-accent-500" },
  { icon: Globe, value: 6, suffix: "", label: "Rehabilitation Centers", description: "Specialized facilities across Pakistan", accent: "from-accent-500 to-primary-500" },
  { icon: Award, value: 28, suffix: "+", label: "Years of Impact", description: "Decades of dedicated service since 1996", accent: "from-primary-400 to-primary-600" },
  { icon: TrendingUp, value: 200, suffix: "+", label: "Trained Specialists", description: "Expert therapists and educators", accent: "from-accent-400 to-primary-500" },
];

export default function ImpactSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary-100/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent-100/30 rounded-full blur-3xl animate-blob delay-2000" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-warm-100/20 rounded-full blur-3xl animate-blob delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          subtitle="Our Impact"
          title="Transforming Lives, One Child at a Time"
          description="For over two decades, we have been creating pathways to independence and inclusion for children with diverse disabilities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-600/8 transition-all duration-400 text-center overflow-hidden"
            >
              {/* Gradient accent line on top */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mb-5 transition-colors duration-300"
              >
                <stat.icon className="w-7 h-7 text-primary-600" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-base font-semibold text-neutral-800 mb-1">{stat.label}</h3>
              <p className="text-sm text-neutral-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
