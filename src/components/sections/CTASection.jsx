import { motion } from 'framer-motion';
import { ArrowRight, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteData';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
              <Heart className="w-7 h-7 text-primary-200" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Help us build a more inclusive world
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
              Every contribution — whether time, resources, or expertise — helps us provide critical rehabilitation services to children who need them most.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-neutral-100 transition-colors text-[15px] shadow-lg"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors text-[15px]"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
