import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function GalleryLightbox() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = WEDDING_DATA.gallery;

  const handleOpen = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="galerie" className="py-24 bg-white relative border-y border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>Instants Précieux</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Galerie de Modeste &amp; Plamédie
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Des regards, une complicité, le prélude d’une vie commune pleine de lumière. Cliquez sur une image pour l'agrandir.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Main feature portrait (5.jpeg) - Spans 6 cols on lg */}
          <div
            onClick={() => handleOpen(0)}
            className="sm:col-span-2 lg:col-span-6 group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-stone-100 aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-[540px]"
          >
            <img
              src={photos[0].src}
              alt={photos[0].title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/80 backdrop-blur-sm text-stone-950 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Modeste &amp; Plamédie</span>
              </span>
              <h3 className="font-serif text-2xl font-bold text-white pt-1">
                {photos[0].title}
              </h3>
              <p className="text-xs text-stone-200">
                {photos[0].caption}
              </p>
            </div>
          </div>

          {/* Right Column Grid - 4 photos spanning remaining 6 cols */}
          <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-2 gap-5 h-full">
            {photos.slice(1).map((photo, index) => {
              const photoIndex = index + 1;
              return (
                <div
                  key={photo.id}
                  onClick={() => handleOpen(photoIndex)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-stone-100 aspect-[3/4] sm:aspect-square lg:aspect-auto lg:h-[258px]"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-gold-200 leading-tight">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-stone-300 line-clamp-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de photos"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={handleClose}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-gold-300">
                {WEDDING_DATA.couple.monogram}
              </span>
              <span className="text-stone-500">•</span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-sans">
                Photo {selectedIndex + 1} sur {photos.length}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer la galerie"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-gold-600 text-white border border-white/20 transition-all shadow-xl"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-gold-600 text-white border border-white/20 transition-all shadow-xl"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Image View */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].title}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-gold-200">
                {photos[selectedIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300">
                {photos[selectedIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
