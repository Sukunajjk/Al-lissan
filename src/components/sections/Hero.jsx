import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, ChevronDown, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '../../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden">
      {/* Ambient background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[140px] animate-glow" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[5%] left-[40%] w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-[100px] img-morph" />
      </motion.div>
      <div className="absolute inset-0 dot-pattern opacity-25" />

      {/* Content */}
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full" style={{ opacity }}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse-soft" />
                <span className="text-[12px] font-semibold text-white/50 tracking-wide">Empowering Special Children Since 1996</span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-extrabold tracking-tight text-white leading-[1.08] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}>
                Building a world where{' '}
                <span className="relative">
                  <span className="text-gradient">every child</span>
                </span>
                {' '}can thrive
              </h1>

              <p className="text-lg text-white/35 leading-relaxed mb-10 max-w-lg">
                Comprehensive rehabilitation, inclusive education, and family support for children with autism, hearing impairment, intellectual disabilities, and more.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2.5 px-7 py-4 bg-primary-600 text-white font-semibold rounded-2xl shadow-[0_8px_30px_rgba(5,150,71,0.35)] hover:shadow-[0_14px_45px_rgba(5,150,71,0.45)] hover:bg-primary-700 transition-all duration-300 text-[15px]"
                  >
                    Explore Programs
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/[0.04] text-white border border-white/[0.08] font-semibold rounded-2xl hover:bg-white/[0.08] transition-all duration-300 text-[15px] backdrop-blur-sm"
                  >
                    <Play className="w-4 h-4 fill-white/50" />
                    Our Story
                  </Link>
                </motion.div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-[11px] text-white/25 font-medium mt-0.5 tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right image - 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                style={{ scale: imgScale }}
                className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                  alt="Children at Al-Lissan rehabilitation center"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/20" />

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 glass-white rounded-2xl p-4 bg-white/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">6 Specialized Centers</p>
                      <p className="text-[11px] text-neutral-500">Across Pakistan, serving thousands</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative floating accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-20 blur-sm img-morph" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-warm-400 to-warm-500 rounded-xl opacity-15 blur-sm animate-float" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/15">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/15 animate-scroll-down" />
      </motion.div>
    </section>
  );
}
