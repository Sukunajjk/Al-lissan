import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Heart, Star, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';

const slides = [
  {
    id: 1,
    keyword: "Empowering Lives",
    text: "From 6 students in 1996 to thousands of success stories. We provide specialized education for hearing-impaired and special children.",
    image: "/bn_slider.jpg", 
    theme: "from-primary-300 via-white to-primary-300",
    badge: {
        icon: <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />,
        title: "Danish Centre",
        subtitle: "Since 1996",
        color: "bg-neutral-900/90 border-white/10"
    }
  },
  {
    id: 2,
    keyword: "Holistic Care",
    text: "Comprehensive therapy for Autism, CP, and Speech disorders through Al-Masoom and IFRA centres.",
    image: "/900.600.png", 
    theme: "from-blue-300 via-white to-blue-300",
    badge: {
        icon: <Heart className="w-6 h-6 fill-red-500 text-red-500" />,
        title: "Therapy & Rehab",
        subtitle: "Expert Care",
        color: "bg-neutral-900/90 border-white/10"
    }
  },
  {
    id: 3,
    keyword: "Future Ready",
    text: "Reviewing vocational skills and economic independence through Huner Gah and Computer Training Centres.",
    image: "/720.800.png", 
    theme: "from-amber-300 via-white to-amber-300",
    badge: {
        icon: <Award className="w-6 h-6 fill-amber-500 text-amber-500" />,
        title: "Vocational Skills",
        subtitle: "Economic Freedom",
        color: "bg-neutral-900/90 border-white/10"
    }
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const moveImage = useTransform(mouseXSpring, [-0.5, 0.5], ["1%", "-1%"]);
  const moveText = useTransform(mouseXSpring, [-0.5, 0.5], ["-0.5%", "0.5%"]);
  const moveFloating = useTransform(mouseXSpring, [-0.5, 0.5], ["3%", "-3%"]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Updated Background: Richer gradient
    <section ref={ref} className="relative min-h-[100vh] flex items-center bg-[#050505] overflow-hidden pt-20">
        
        {/* Richer Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-900 opacity-80" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-noise"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content Left (7 cols) */}
          <motion.div style={{ y: textY, x: moveText }} className="lg:col-span-7 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
               <div className="h-[1px] w-12 bg-primary-500/50"></div>
               <span className="text-primary-300 tracking-[0.2em] text-sm font-medium uppercase">Est. 1996</span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-10 h-[2.7em]">
              <span className="block mb-2">Empowering</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className={`block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r ${slides[current].theme} pr-4`}
                >
                  {slides[current].keyword}.
                </motion.span>
              </AnimatePresence>
            </h1>

            <div className="h-24 mb-8">
                <AnimatePresence mode="wait">
                    <motion.p
                    key={current}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl text-neutral-300 leading-relaxed max-w-xl font-light border-l-2 border-primary-500/30 pl-6"
                    >
                    {slides[current].text}
                    </motion.p>
                </AnimatePresence>
            </div>

            <motion.div
              layout
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                to="/programs"
                className="group relative px-8 py-5 bg-white text-neutral-900 rounded-full font-bold text-lg transition-all hover:bg-neutral-200 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-primary-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                    Our Programs <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </Link>
              
              {/* Slider Controls */}
              <div className="flex gap-2">
                <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
          </motion.div>


          {/* Image Right (5 cols) */}
          <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] w-full flex items-center justify-center">
             
             {/* Main Image Container */}
             <motion.div 
                style={{ x: moveImage, y }}
                className="relative w-full h-[85%] rounded-[3rem] shadow-2xl shadow-black/50 group"
             >
                <div className="absolute inset-0 bg-neutral-900/10 z-10 mix-blend-multiply rounded-[3rem]"></div>
                
                 {/* Masked Image */}
                 <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.img
                            key={current}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            src={slides[current].image}
                            alt={slides[current].keyword}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                 </div>
                
                {/* Stats Badge - Overlapping Edge (Half inside, Half outside) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        style={{ x: moveFloating, y: 0 }}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`absolute top-12 -right-8 lg:-right-16 z-30 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-2xl ${slides[current].badge.color}`}
                    >
                        <div className="bg-white/10 rounded-full p-3 shadow-inner">
                            {slides[current].badge.icon}
                        </div>
                        <div className="pr-2">
                            <p className="text-white font-bold text-lg leading-tight">{slides[current].badge.title}</p>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wider mt-1">{slides[current].badge.subtitle}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-8 left-8 z-20 flex gap-2">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${current === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} 
                        />
                    ))}
                </div>
             </motion.div>

            {/* Sticky Decoration - Bottom Left */}
             <motion.div
                style={{ x: moveFloating, y: 40 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[10%] -left-6 lg:-left-12 z-0 opacity-30 pointer-events-none"
             >
                 <div className="w-40 h-40 rounded-full border border-dashed border-white/20 animate-spin-slow"></div>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
