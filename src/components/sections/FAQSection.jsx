import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/siteData';

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-6">
              Common<span className="text-gradient"> Questions</span>
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Find answers to frequently asked questions about our programs, enrollment process, and how you can get involved.
            </p>

            <div className="bg-neutral-900 rounded-3xl p-8 text-white">
              <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                Our team is ready to help you with any questions about our programs and services.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors">
                Contact Us →
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  open === i ? 'border-primary-200 shadow-[0_8px_30px_-10px_rgba(5,150,71,0.1)]' : 'border-neutral-100'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className={`font-semibold text-base pr-8 transition-colors ${
                    open === i ? 'text-primary-700' : 'text-neutral-800'
                  }`}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      open === i ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-neutral-500 leading-relaxed text-[15px]">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
