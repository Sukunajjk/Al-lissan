import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '../../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center bg-neutral-900 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
          alt=""
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30" />
      </motion.div>

      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">Serving special children since 1996</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-8"
          >
            Every child deserves a chance to{' '}
            <span className="text-primary-400">thrive</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-xl"
          >
            Comprehensive rehabilitation across 6 specialized centers, empowering over 5,000 children with autism, hearing impairment, and intellectual disabilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 text-[15px]"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/15 transition-all duration-300 text-[15px]"
            >
              <Play className="w-4 h-4" />
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-5 py-4"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
