import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
          alt="Children"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,126,0.1),transparent_70%)]" />
      </div>

      {/* Animated blobs */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-accent-400/8 rounded-full blur-3xl animate-blob delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight"
          >
            Every Child Deserves
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
              a Chance to Shine
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/60 leading-relaxed mb-10"
          >
            Your generosity can transform the life of a special child. Whether through donations, volunteering, or spreading awareness — every contribution creates ripples of change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button to="/donate" variant="primary" size="lg" className="!bg-white !text-primary-700 hover:!bg-primary-50 !shadow-xl !shadow-black/10">
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            <Button to="/volunteer" variant="outline" size="lg">
              Become a Volunteer
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
