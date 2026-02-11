import { motion } from 'framer-motion';
import { Shield, Lightbulb, Heart, Users, Clock, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const reasons = [
  { icon: Clock, num: "01", title: "28+ Years of Experience", description: "Three decades of dedicated service in child rehabilitation, refining our methods and expanding our impact." },
  { icon: Users, num: "02", title: "Expert Specialists", description: "200+ trained therapists, educators, and psychologists committed to evidence-based intervention." },
  { icon: Heart, num: "03", title: "Holistic Approach", description: "We address the complete needs of each child — educational, therapeutic, emotional, and social." },
  { icon: Lightbulb, num: "04", title: "Innovative Methods", description: "Integrating modern rehabilitation techniques with culturally sensitive approaches for maximum effectiveness." },
  { icon: Shield, num: "05", title: "Full Transparency", description: "Detailed annual reports, open governance, and accountability to every donor and stakeholder." },
  { icon: Award, num: "06", title: "Proven Results", description: "Thousands of success stories of children gaining independence, skills, and confidence." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle bg numbers */}
      <div className="absolute top-16 right-10 text-[200px] font-black text-neutral-50 leading-none select-none pointer-events-none">01</div>
      <div className="absolute bottom-16 left-10 text-[200px] font-black text-neutral-50 leading-none select-none pointer-events-none">06</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          subtitle="Why Al-Lissan"
          title="Trusted by Thousands of Families"
          description="Discover what makes us Pakistan's leading organization for the rehabilitation of children with diverse disabilities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-transparent hover:border-primary-100 hover:bg-primary-50/30 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-400"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <span className="absolute -top-2 -left-2 text-[40px] font-black text-primary-100 group-hover:text-primary-200 transition-colors leading-none select-none">
                    {reason.num}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-100 group-hover:to-primary-200 flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <reason.icon className="w-5.5 h-5.5 text-primary-600" />
                  </motion.div>
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-bold text-neutral-900 mb-1.5 group-hover:text-primary-700 transition-colors">{reason.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
