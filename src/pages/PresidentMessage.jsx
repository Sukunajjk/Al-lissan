import { motion } from 'framer-motion';
import { Quote, Award, Calendar } from 'lucide-react';
import { presidentMessage } from '../data/siteData';

export default function PresidentMessage() {
  // Function to convert newlines to paragraphs
  const renderMessageWithParagraphs = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-6 last:mb-0 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
                <Quote className="w-3 h-3" /> From the Desk of the Founder
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
              A Message of Hope & Resilience
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Sidebar / Profile */}
                <div className="lg:col-span-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        className="sticky top-10"
                    >
                        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl">
                            <img 
                                src={presidentMessage.image} 
                                alt={presidentMessage.name} 
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-xl font-bold">{presidentMessage.name}</h3>
                                <p className="text-white/70 text-sm">{presidentMessage.signature}</p>
                            </div>
                        </div>

                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                             <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary-600" />
                                Leadership Highlights
                             </h4>
                             <ul className="space-y-4">
                                <li className="text-sm text-neutral-600 flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                                    Founded Tanzeem-al-Lissan in 1996 with just 6 students.
                                </li>
                                <li className="text-sm text-neutral-600 flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                                    Pioneered inclusive education and rural outreach in Punjab.
                                </li>
                                <li className="text-sm text-neutral-600 flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                                    Established Danish Degree College & IFRA Autism Centre.
                                </li>
                             </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Main Text */}
                <div className="lg:col-span-8">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none"
                     >
                        <blockquote className="text-2xl md:text-3xl font-serif italic text-neutral-900 leading-normal mb-10 border-l-4 border-primary-500 pl-6">
                            "{presidentMessage.message.split('\n\n')[0]}"
                        </blockquote>

                        {renderMessageWithParagraphs(presidentMessage.message.substring(presidentMessage.message.indexOf('\n\n') + 2))}
                        
                        <div className="mt-16 pt-10 border-t border-neutral-100 flex items-center justify-between">
                            <div>
                                <img src={import.meta.env.BASE_URL + "signature-placeholder.png"} alt="Signature" className="h-12 opacity-50 mb-2" /> 
                                {/* If we don't have a real signature image, we can just use text styled as one or remove the img tag */}
                                <p className="font-serif italic text-2xl text-neutral-800">{presidentMessage.name}</p>
                                <p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mt-1">Founding President</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-right">
                                    <p className="text-neutral-900 font-bold text-lg">1996 - Present</p>
                                    <p className="text-neutral-500 text-sm">Serving Humanity</p>
                                </div>
                            </div>
                        </div>
                     </motion.div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
