import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/siteData';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionHeading
          subtitle="Testimonials"
          title="Voices of Trust"
          description="Hear from the families, professionals, and partners who have experienced our impact firsthand."
        />

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-primary-600/[0.03] border border-primary-100/50 relative"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-8">
                <Quote className="w-6 h-6 text-primary-400" />
              </div>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className={`w-13 h-13 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-neutral-900">{testimonials[current].name}</p>
                  <p className="text-sm text-neutral-500">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Auto-advance progress bar */}
              {!isPaused && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={`progress-${current}`}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current ? 'bg-primary-600 w-8' : 'bg-neutral-200 w-2 hover:bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
