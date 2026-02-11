import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary-50/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              subtitle="FAQ"
              title="Common Questions"
              description="Find answers to frequently asked questions about our programs, enrollment, and how you can help."
              center={false}
            />
            <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-primary-50/50 border border-primary-100/50">
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Can't find what you're looking for? Our team is happy to help.
              </p>
              <a href="/contact" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                Contact Us →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className={`w-full flex items-start justify-between gap-4 p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    openIndex === i
                      ? 'bg-primary-50/60 border border-primary-100'
                      : 'bg-neutral-50 border border-transparent hover:bg-neutral-100/70'
                  }`}
                >
                  <span className={`text-[15px] font-semibold leading-snug transition-colors pr-4 ${
                    openIndex === i ? 'text-primary-700' : 'text-neutral-800'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === i ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-500'
                    }`}
                  >
                    {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pt-2 text-sm text-neutral-500 leading-relaxed">
                        {faq.answer}
                      </p>
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
