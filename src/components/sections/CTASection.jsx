import { motion } from 'framer-motion';
import { ArrowRight, Phone, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] w-[250px] h-[250px] bg-accent-400/5 rounded-full blur-[80px] img-morph" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Get Involved</span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-tight mb-6">
              Help Build a More
              <br />
              Inclusive World
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-10 max-w-lg">
              Whether through partnerships, spreading awareness, or supporting our programs — your involvement can change a child's future forever.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-primary-50 transition-all duration-300 text-[15px]"
                >
                  Contact Us
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+9221XXXXXXX"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 text-[15px] backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - mini info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-4"
          >
            {[
              {
                icon: Heart,
                title: "Partner With Us",
                desc: "Corporate partnerships, sponsorships, and awareness collaborations to amplify our impact.",
              },
              {
                icon: MapPin,
                title: "Visit Our Centers",
                desc: "See our work firsthand. Schedule a guided tour of any of our 6 specialized rehabilitation centers.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ x: 8, transition: { type: "spring", stiffness: 300 } }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
