import React from 'react';
import { motion } from 'framer-motion';
import { Scan } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center mb-4 sm:mb-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Scan className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-indigo-400" />
      </motion.div>
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 font-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Scan Below QR Code's To Explore Projects.
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Eat, Sleep, Code, Repeat.
      </motion.p>
    </motion.div>
  );
};