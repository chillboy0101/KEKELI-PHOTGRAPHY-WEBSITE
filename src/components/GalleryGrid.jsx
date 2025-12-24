import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const GalleryGrid = ({ photos, selectedImage, setSelectedImage }) => {
  const getImageDescription = (photo) => {
    const descriptions = {
      1: 'Professional portrait of young adult in urban environment with artistic street lighting',
      2: 'Majestic mountain range with golden hour lighting and dramatic clouds',
      3: 'Luxury wristwatch with metallic finish on elegant black background',
      4: 'Studio portrait with dramatic side lighting and professional backdrop',
      5: 'Beautiful coastal sunset with waves crashing on rocky shore',
      6: 'Elegant fashion accessories including handbag and jewelry on marble surface',
      7: 'Natural portrait with soft window light creating gentle shadows',
      8: 'Misty forest path with tall trees and morning fog',
      9: 'Modern smartphone with sleek design on minimalist white background',
      10: 'Creative artistic portrait with unique composition and color grading',
      11: 'Desert sand dunes with dramatic shadows and warm golden tones',
      12: 'Luxury cosmetics products with elegant packaging and soft lighting'
    };
    return descriptions[photo.id];
  };

  return (
    <>
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <AnimatePresence>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(photo)}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-slate-900 aspect-square"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={photo.description}
               src="https://images.unsplash.com/photo-1633362967859-fde6c856274d" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{photo.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{photo.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img 
                className="w-full h-auto rounded-lg shadow-2xl"
                alt={selectedImage.description}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;