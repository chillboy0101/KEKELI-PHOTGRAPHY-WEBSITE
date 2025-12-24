import React from 'react';
import { motion } from 'framer-motion';
import { User, Mountain, Package, Grid3x3 } from 'lucide-react';

const GalleryFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Work', icon: Grid3x3 },
    { id: 'portrait', label: 'Portraits', icon: User },
    { id: 'landscape', label: 'Landscapes', icon: Mountain },
    { id: 'product', label: 'Products', icon: Package }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <motion.button
            key={filter.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm sm:text-base">{filter.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default GalleryFilters;