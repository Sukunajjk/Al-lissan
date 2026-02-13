import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '../../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end bg-neutral-950 overflow-hidden pb-20">
      {/* Background image with overlay */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 w-full" style={{ opacity }}>
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-400">
              Empowering Special Children Since 1996
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
          >
            Comprehensive rehabilitation
            <br className="hidden md:block" />
            for <span className="text-primary-400">every child</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg text-white/40 leading-relaxed mb-12 max-w-2xl"
          >
            Six specialized centers. 200+ trained professionals. Serving children with autism,
            hearing impairment, intellectual disabilities, and more across Pakistan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold text-[15px] hover:bg-primary-700 transition-colors duration-300"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-semibold text-[15px] hover:bg-white/5 transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.08 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-white/30 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/15">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/15 animate-scroll-down" />
      </motion.div>
    </section>
  );
}
