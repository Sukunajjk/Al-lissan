import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Header Column */}
            <div className="lg:col-span-4">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">
                        Voices of Change
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                        Real Stories,<br/>Real Impact.
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed mb-10">
                        The true measure of our success is the difference we make in the lives of our students and their families.
                    </p>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Testimonial Card Column */}
            <div className="lg:col-span-8">
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
                        >
                            <Quote className="w-12 h-12 text-primary-500 mb-8 opacity-50" />
                            
                            <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed mb-10 text-white/90">
                                "{testimonials[current].text}"
                            </blockquote>
                            
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                                    {testimonials[current].avatar}
                                </div>
                                <div>
                                    <cite className="not-italic text-lg font-bold block text-white">{testimonials[current].name}</cite>
                                    <span className="text-white/50 text-sm">{testimonials[current].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-600/20 rounded-full blur-xl -z-10"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
