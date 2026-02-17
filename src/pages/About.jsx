import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Calendar, Building2, Users, BookOpen, Lightbulb, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTASection from '../components/sections/CTASection';
import { timeline, stats } from '../data/siteData';

const SnakeConnector = ({ isEven, isLast }) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            if (entry) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    if (isLast) return null;

    // Dimensions
    const w = dimensions.width;
    const h = dimensions.height;
    const radius = 40; // Fixed corner radius
    
    let d = "";
    if (w > 0 && h > 0) {
        // Calculate exact dot positions
        // Item Structure: [45% Card] [10% Spacer] [45% Empty]
        // Left Card Dot (isEven): 45% + 3.5rem (56px).
        // Right Card Dot (!isEven): 55% - 3.5rem (56px).
        // Since container is centered, these dots are effectively in the very center spine of the layout.
        const dotLeftX = (w * 0.45) + 56;
        const dotRightX = (w * 0.55) - 56;

        let startX, endX;

        if (isEven) {
            // Left Card (Item 0) -> Connect to Right Card (Item 1)
            // Connection: Center(ish) -> Center(ish).
            // Style: "Snake" / Bracket Shape.
            // Shape: Start -> Curve Right -> Down -> Curve Left -> End.
            // This creates a ")" shape.
            
            startX = dotLeftX;
            endX = dotRightX;
            
            // "Bulge" to the right. 
            // We want to go slightly into the empty space on the right.
            // Start is approx Center. Go Right 100px?
            const bulgeX = startX + 100;
            
            d = `
                M ${startX} 0 
                Q ${bulgeX} 0 ${bulgeX} ${radius}
                V ${h - radius}
                Q ${bulgeX} ${h} ${endX} ${h}
            `;
        } else {
            // Right Card (Item 1) -> Connect to Left Card (Item 2)
            // Shape: Start -> Curve Left -> Down -> Curve Right -> End.
            // This creates a "(" shape.
            
            startX = dotRightX;
            endX = dotLeftX;
            
            // "Bulge" to the left.
            const bulgeX = startX - 100;
            
            d = `
                M ${startX} 0 
                Q ${bulgeX} 0 ${bulgeX} ${radius}
                V ${h - radius}
                Q ${bulgeX} ${h} ${endX} ${h}
            `;
        }
    }

    return (
        <div 
            ref={containerRef}
            className="absolute top-1/2 left-0 right-0 pointer-events-none z-0" 
            style={{ height: '100%' }} // Connects Center of Current to Center of Next
        >
            <svg className="w-full h-full overflow-visible">
                 <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00c64d" />
                        <stop offset="100%" stopColor="#00a540" />
                    </linearGradient>
                </defs>
                
                {d && (
                    <>
                        {/* Track */}
                        <path d={d} stroke="#e5e5e5" strokeWidth="3" fill="none" />
                        
                        {/* Progress */}
                        <motion.path 
                            d={d} 
                            stroke="url(#gradient-line)" 
                            strokeWidth="3" 
                            fill="none" 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </>
                )}
            </svg>
        </div>
    );
};

const values = [
  { icon: BookOpen, title: "Evidence-Based", desc: "Programs built on research-validated methods and internationally recognized standards." },
  { icon: Heart, title: "Compassion First", desc: "Every interaction guided by empathy, dignity, and genuine commitment." },
  { icon: Users, title: "Family Centered", desc: "Families as active partners in the rehabilitation process." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously adopting cutting-edge methods and technologies." },
  { icon: Shield, title: "Integrity", desc: "Full transparency, accountability, and ethical standards." },
  { icon: Globe, title: "Inclusion", desc: "Equal opportunity for every child to learn, grow, and thrive." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-sm text-white/30 mb-6">
              <Link to="/" className="hover:text-white/50 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">About</span>
            </div>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              A Journey of Compassion<br />and Empowerment
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Since 1996, Tanzeem-al-Lissan has been a beacon of hope, growing from a small center with six students to a leading institution serving thousands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
              <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                Tanzeem-al-Lissan: A Voluntary Organization for Special Children
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Established in 1996 in Faisalabad, Tanzeem-al-Lissan is a nonprofit charitable organization dedicated to the uplift and welfare of children with special needs. We work to enable them to lead meaningful, independent lives through education, rehabilitation, and professional training.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Our journey began with the Danish Center for Hearing-Impaired Children with just six students. Today, we operate from a purpose-built facility with 57 rooms on 8 canals of land, serving hundreds of students in our main campuses and rural Sehara centers. We provide specialized services for hearing-impaired, intellectually challenged, physically disabled, and autistic individuals.
              </p>
              <div className="flex items-center gap-8 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-neutral-900">1996</div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Established</p>
                </div>
                <div className="w-px h-10 bg-neutral-200" />
                <div>
                  <div className="text-3xl font-bold text-neutral-900">Faisalabad</div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Pakistan</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Children in rehabilitation" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/80 text-sm">Empowering children since 1996</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" alt="Special education classroom" className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/80 text-sm">State-of-the-art facilities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((m, i) => {
              // Map icon string to component
              const Icon = m.icon === "Users" ? Users : m.icon === "Calendar" ? Calendar : m.icon === "Building" ? Building2 : Heart;
              
              return (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center bg-white/5 rounded-2xl p-6">
                <Icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <p className="text-xs text-white/40">{m.label}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Snake Timeline Redesigned */}
      <section className="py-20 lg:py-28 bg-neutral-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-16 md:mb-32"
          >
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Milestones</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
               Our Journey (1996 - 2026)
            </h2>
          </motion.div>

          {/* New Snake Layout Structure */}
          <div className="hidden md:block relative pb-20">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0; // Left
              const isLast = i === timeline.length - 1;
              
              return (
                <div key={item.year} className="relative min-h-[300px] flex items-center">
                   
                   {/* Layout Grid */}
                   <div className={`w-full flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      
                      {/* 1. Content Card */}
                      <motion.div 
                        className="w-[45%] relative z-20"
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                      >
                         <div className={`relative p-8 bg-white rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group`}>
                            {/* Connector Dot */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-500 z-30 ${isEven ? '-right-14' : '-left-14'}`} />

                            <span className="inline-block px-4 py-1 bg-primary-50 text-primary-700 text-sm font-bold rounded-full mb-4">
                               {item.year}
                            </span>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                            <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>

                      {/* 2. Spacer */}
                      <div className="w-[10%]" />

                      {/* 3. Empty Space / Image */}
                      <div className="w-[45%]" />
                      
                   </div>

                   {/* Connector Lines (The Snake) */}
                   <SnakeConnector isEven={isEven} isLast={isLast} />
                </div>
              )
            })}
          </div>

          {/* Mobile Logic */}
          <div className="md:hidden space-y-8 pl-4 relative">
             {/* Continuous Vertical Line */}
             <div className="absolute left-[27px] top-6 bottom-6 w-1 bg-neutral-200"></div>
             <motion.div 
                className="absolute left-[27px] top-6 w-1 bg-primary-500 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear" }}
                style={{ height: 'calc(100% - 48px)' }}
             />

             {timeline.map((item, i) => (
               <motion.div 
                 key={item.year} 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 className="relative pl-12"
               >
                  {/* Dot */}
                  <div className="absolute top-6 left-0 w-6 h-6 rounded-full bg-white border-4 border-primary-500 z-10" />
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                     <span className="text-primary-600 font-bold text-sm mb-2 block">{item.year}</span>
                     <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                     <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-14">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Guiding Principles</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-neutral-50 rounded-2xl p-7 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-4 transition-colors">
                  <val.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{val.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
