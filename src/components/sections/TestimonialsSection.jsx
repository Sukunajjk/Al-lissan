import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/siteData';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What People Say About Our Work
          </h2>
        </motion.div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="relative border border-white/10 bg-white/[0.03] p-8 md:p-12"
            >
              {/* Quote icon */}
              <Quote className="w-14 h-14 text-primary-500/20 mb-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic font-serif mb-10">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-white/40 text-sm">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                <motion.div
                  key={`progress-${current}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  className="h-full bg-primary-500"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 transition-all duration-400 cursor-pointer ${
                    i === current
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
