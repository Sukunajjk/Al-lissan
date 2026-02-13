import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/siteData';

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-600" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Find answers to common questions about our programs, enrollment, and how you can support our mission.
            </p>

            {/* Still have questions card */}
            <div className="bg-neutral-900 p-8">
              <div className="w-11 h-11 bg-primary-600 flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Our team is ready to help you with any questions about our programs and services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right column - accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`border transition-all duration-300 ${
                  open === i
                    ? 'border-l-primary-600 border-l-[3px] border-t-neutral-200 border-r-neutral-200 border-b-neutral-200 bg-neutral-50'
                    : 'border-neutral-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span
                    className={`font-semibold text-base pr-8 transition-colors ${
                      open === i ? 'text-primary-700' : 'text-neutral-800'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors ${
                      open === i
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {open === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
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
                        <p className="text-neutral-500 leading-relaxed text-[15px]">
                          {faq.answer}
                        </p>
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
