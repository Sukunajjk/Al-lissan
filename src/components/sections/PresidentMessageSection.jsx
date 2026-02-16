import { motion } from 'framer-motion';
import { Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { presidentMessage } from '../../data/siteData';

export default function PresidentMessageSection() {
  
  return (
    <section className="py-20 lg:py-28 bg-neutral-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <Link to="/president-message" className="block relative max-w-sm mx-auto lg:mx-0 group cursor-pointer">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-4 ring-white/5 transition-all duration-500 group-hover:ring-primary-500/50">
                <img
                  src={presidentMessage.image}
                  alt="President of Tanzeem Al-Lissan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 rounded-xl px-5 py-3 shadow-lg shadow-primary-900/50">
                <p className="text-white font-bold text-sm">Since 1996</p>
              </div>
            </Link>
            <div className="mt-8 text-center lg:text-left">
              <p className="text-white font-bold text-lg">{presidentMessage.name}</p>
              <p className="text-white/40 text-sm">{presidentMessage.signature}</p>
            </div>
          </motion.div>

          {/* Message Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-primary-400 font-semibold text-sm tracking-wide">President's Message</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-8 tracking-tight">
              {presidentMessage.title}
            </h2>

            <div className="relative">
                <blockquote className="text-lg md:text-xl text-white/60 leading-relaxed font-light italic border-l-4 border-primary-600/40 pl-6 mb-8 line-clamp-4">
                {presidentMessage.message}
                </blockquote>
                {/* Gradient overlay for text cut-off */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-900 to-transparent" />
            </div>

            <Link 
                to="/president-message"
                className="group flex items-center gap-2 text-white font-semibold hover:text-primary-400 transition-colors"
            >
                Read Full Message
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                </div>
            </Link>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 max-w-16 bg-white/10" />
              <span className="text-sm text-white/30 font-medium">
                Faisalabad, Pakistan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
