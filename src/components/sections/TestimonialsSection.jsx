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
    <section className="py-20 lg:py-28 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm mb-3 tracking-wide">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            What families say about us
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-600" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-400 text-warm-400" />
                  ))}
                </div>
              </div>

              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light mb-10">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{testimonials[current].name}</p>
                  <p className="text-neutral-500 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current ? 'w-8 bg-primary-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-neutral-400 hover:text-primary-600 transition-all cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-neutral-400 hover:text-primary-600 transition-all cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
