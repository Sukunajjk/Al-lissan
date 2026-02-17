import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { presidentMessage } from '../../data/siteData';

export default function PresidentMessageSection() {
  return (
    <section className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-200">
                <img 
                    src={presidentMessage.image} 
                    alt={presidentMessage.name}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Minimal Frame Border */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
            </div>
            
            {/* Decorative Back Block */}
            <div className="absolute top-8 left-8 w-full h-full bg-white border border-neutral-200 -z-0"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-[200px]">
                <p className="font-serif font-bold text-xl text-neutral-900 leading-tight">Since 1996</p>
                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Serving Humanity</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                A Personal Commitment
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
                "{presidentMessage.title}"
            </h2>

            <div className="prose prose-lg text-neutral-600 mb-10">
                <p className="leading-relaxed">
                    {presidentMessage.message}
                </p>
            </div>

            <div className="flex items-center gap-8 border-t border-neutral-200 pt-8">
                <div>
                    <p className="text-neutral-900 font-bold text-lg">{presidentMessage.name}</p>
                    <p className="text-neutral-500 text-sm">President, Tanzeem Al-Lissan</p>
                </div>
                
                {/* Signature - Using Dancing Script font */}
                <div className="text-3xl text-neutral-800" style={{ fontFamily: '"Dancing Script", cursive' }}>
                    {presidentMessage.signature || "Muhammad Siddique"}
                </div>
            </div>
            
            <div className="mt-8">
                 <Link 
                    to="/president-message"
                    className="text-primary-700 font-medium hover:text-primary-900 underline decoration-primary-300 underline-offset-4 transition-colors"
                >
                    Read Full Message
                </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
