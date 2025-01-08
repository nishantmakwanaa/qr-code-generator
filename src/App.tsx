import { ProjectGrid } from './components/ProjectGrid';
import { motion } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-sans">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="relative">

        <motion.div
          className="h-screen flex flex-col items-center justify-center text-center container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Tech-Manjari 2025 Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Scroll Down & Scan QR To Explore The Projects.
            </p>
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
            >
              Let's Go !
            </button>
          </div>
        </motion.div>

        <div ref={projectSectionRef}>
          <ProjectGrid />
        </div>
      </div>

      <footer className="text-center py-6 sm:py-8 text-gray-400">
        <p className="text-sm sm:text-base font-light">
          Nishant Makwana © 2024. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;