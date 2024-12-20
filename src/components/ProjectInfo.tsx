import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { AppLogo } from './AppLogo';
import { Project } from '../types/Project';

interface ProjectInfoProps {
  project: Project;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  return (
    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
      <AppLogo
        category={project.category}
        className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-400"
      />

      <div>
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-sm sm:text-base text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
      </div>

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group text-sm sm:text-base"
        whileHover={{ x: 5 }}
      >
        <span>View Project</span>
        <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
      </motion.a>
    </div>
  );
};