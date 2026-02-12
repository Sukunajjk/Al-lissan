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
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px] animate-blob delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400 mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Stories of Hope</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative glass rounded-3xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-primary-500/20 mb-6" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warm-400 fill-warm-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-10">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{testimonials[current].name}</p>
                  <p className="text-white/40 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 rounded-b-3xl overflow-hidden">
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-400"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current ? 'w-8 bg-primary-500' : 'w-1.5 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
