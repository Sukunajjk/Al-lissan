import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/siteData';

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

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
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Moments of Impact</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              A visual journey through our programs, events, and the moments that define our work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/20'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-sm text-neutral-500 tabular-nums">
              <span className="font-semibold text-neutral-800">{filtered.length}</span> images
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-neutral-200"
                >
                  {!loadedImages[image.id] && <div className="absolute inset-0 bg-neutral-200 animate-pulse rounded-xl" />}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [image.id]: true }))}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{image.category}</span>
                    <p className="text-white text-sm font-medium mt-1">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10">
              <X className="w-5 h-5" />
            </button>
            {currentIndex > 0 && (
              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-4 md:left-8 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {currentIndex < filtered.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 md:right-8 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10">
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <motion.div key={selectedImage.id} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full">
              <img src={selectedImage.src.replace('w=600', 'w=1200')} alt={selectedImage.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">{selectedImage.category}</span>
                    <p className="text-white font-medium mt-1">{selectedImage.alt}</p>
                  </div>
                  <span className="text-white/40 text-sm tabular-nums">{currentIndex + 1} / {filtered.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
