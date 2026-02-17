import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/siteData';

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Images filtered by category
  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);
  
  const currentIndex = selectedImage ? filtered.findIndex(img => img.id === selectedImage.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) setSelectedImage(filtered[currentIndex - 1]);
  }, [currentIndex, filtered]);

  const handleNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) setSelectedImage(filtered[currentIndex + 1]);
  }, [currentIndex, filtered]);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white min-h-[50vh] flex flex-col justify-center">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-6 block">
                    Our Archives
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8">
                    Moments of Impact
                </h1>
                <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                    A visual chronicle of hope, resilience, and the daily victories of our children.
                </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            activeCategory === cat
                            ? 'bg-neutral-900 text-white shadow-lg scale-105'
                            : 'bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-style Grid */}
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                <AnimatePresence>
                    {filtered.map((image, index) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setSelectedImage(image)}
                            className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden bg-neutral-100"
                        >
                            <img
                                src={image.src.replace('w=600', 'w=800')}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                    <ZoomIn className="w-5 h-5" />
                                </div>
                                
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary-300 mb-1 block">{image.category}</span>
                                    <p className="font-serif text-lg">{image.alt}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Controls */}
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20">
              <X className="w-6 h-6" />
            </button>
            
            {currentIndex > 0 && (
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            
            {currentIndex < filtered.length - 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }} 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image Container */}
            <motion.div 
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8 bg-black/50 rounded-3xl overflow-hidden p-1"
            >
               <div className="flex-grow flex items-center justify-center bg-black/20 rounded-2xl overflow-hidden">
                   <img 
                    src={selectedImage.src.replace('w=600', 'w=1600')} 
                    alt={selectedImage.alt} 
                    className="max-w-full max-h-[85vh] object-contain" 
                   />
               </div>
            </motion.div>
             
            {/* Caption (Floating) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm md:text-base border border-white/10">
                <span className="text-primary-400 font-bold mr-3">{selectedImage.category}</span>
                <span className="opacity-80">{selectedImage.alt}</span>
                <span className="ml-4 opacity-40 text-xs border-l border-white/20 pl-4">{currentIndex + 1} / {filtered.length}</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
