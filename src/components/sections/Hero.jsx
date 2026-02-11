import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats, partners } from '../../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
          alt="Children learning"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/85 to-primary-800/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,126,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,222,128,0.1),transparent_60%)]" />
      </motion.div>

      {/* Animated blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary-400/8 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent-400/6 rounded-full blur-3xl animate-blob delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-warm-400/5 rounded-full blur-3xl animate-blob delay-4000" />

      <motion.div style={{ y: textY, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-full px-4 py-2 text-[13px] text-white/80 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
                </span>
                Serving special children since 1996
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
            >
              Empowering{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-accent-300 to-primary-400">
                  Special Children
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  style={{ originX: 0 }}
                />
              </span>
              <br />
              to Thrive
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-10 max-w-[480px]"
            >
              Dedicated to helping children with diverse disabilities learn, grow their skills, and become confident, independent members of society.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Button to="/donate" variant="primary" size="lg" className="!shadow-xl !shadow-primary-600/30">
                Make a Donation
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
              <Button to="/programs" variant="outline" size="lg">
                <Play className="w-4 h-4" />
                Our Programs
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats with floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 text-center hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[13px] text-white/40 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden grid grid-cols-2 gap-2.5 mt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-white tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[11px] text-white/40 mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Partners Trust Strip */}
      <div className="relative bg-primary-950/40 backdrop-blur-sm border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center gap-8 overflow-hidden">
            <span className="text-[11px] text-white/25 font-medium tracking-wider uppercase whitespace-nowrap shrink-0">
              Trusted by
            </span>
            <div className="flex items-center gap-8 animate-[shimmer_20s_linear_infinite] overflow-hidden">
              {[...partners, ...partners].map((partner, i) => (
                <span key={i} className="text-[13px] text-white/20 font-semibold whitespace-nowrap hover:text-white/40 transition-colors">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
