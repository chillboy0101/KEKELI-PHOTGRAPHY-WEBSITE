import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';

const Gallery = ({ activeFilter, setActiveFilter }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      category: 'portrait',
      title: 'Urban Portrait',
      description: 'Professional portrait photography in urban setting'
    },
    {
      id: 2,
      category: 'landscape',
      title: 'Mountain Vista',
      description: 'Breathtaking mountain landscape at golden hour'
    },
    {
      id: 3,
      category: 'product',
      title: 'Luxury Watch',
      description: 'High-end product photography for luxury timepiece'
    },
    {
      id: 4,
      category: 'portrait',
      title: 'Studio Portrait',
      description: 'Professional studio portrait with dramatic lighting'
    },
    {
      id: 5,
      category: 'landscape',
      title: 'Coastal Sunset',
      description: 'Beautiful coastal landscape during sunset'
    },
    {
      id: 6,
      category: 'product',
      title: 'Fashion Accessories',
      description: 'Elegant product photography for fashion brand'
    },
    {
      id: 7,
      category: 'portrait',
      title: 'Natural Light',
      description: 'Portrait using natural window light'
    },
    {
      id: 8,
      category: 'landscape',
      title: 'Forest Path',
      description: 'Misty morning forest landscape'
    },
    {
      id: 9,
      category: 'product',
      title: 'Tech Gadget',
      description: 'Modern technology product photography'
    },
    {
      id: 10,
      category: 'portrait',
      title: 'Creative Portrait',
      description: 'Artistic portrait with creative composition'
    },
    {
      id: 11,
      category: 'landscape',
      title: 'Desert Dunes',
      description: 'Stunning desert landscape with dramatic shadows'
    },
    {
      id: 12,
      category: 'product',
      title: 'Cosmetics',
      description: 'Beauty product photography with elegant styling'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our diverse collection of professional photography work
          </p>
        </motion.div>

        <GalleryFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <GalleryGrid 
          photos={filteredPhotos} 
          selectedImage={selectedImage} 
          setSelectedImage={setSelectedImage} 
        />
      </div>
    </section>
  );
};

export default Gallery;