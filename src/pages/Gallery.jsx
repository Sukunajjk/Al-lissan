import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
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

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-semibold text-white/60 tracking-wide mb-6"
            >
              <Images className="w-3.5 h-3.5 text-primary-400" />
              Gallery
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Moments of{' '}
              <span className="text-gradient">Impact</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              A visual journey through our programs, events, and the beautiful moments that define our work with special children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 bg-neutral-50/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-14"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white shadow-lg shadow-neutral-900/20'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <p className="text-sm text-neutral-500 tabular-nums">
              Showing <span className="font-semibold text-neutral-800">{filtered.length}</span> images
            </p>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-neutral-200"
                >
                  {!loadedImages[image.id] && (
                    <div className="absolute inset-0 bg-neutral-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-shimmer" />
                    </div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md text-white text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-medium">{image.alt}</p>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {currentIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}

            {currentIndex < filtered.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={selectedImage.src.replace('w=600', 'w=1200')}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] rounded-2xl object-contain"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md text-white text-xs font-medium rounded-full mb-2">
                      {selectedImage.category}
                    </span>
                    <p className="text-white font-medium">{selectedImage.alt}</p>
                  </div>
                  <span className="text-white/50 text-sm tabular-nums">{currentIndex + 1} / {filtered.length}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
