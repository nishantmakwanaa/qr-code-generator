import React from 'react';
import { motion } from 'framer-motion';
import { ProjectInfo } from './ProjectInfo';
import { ProjectQR } from './ProjectQR';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative group bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
        <ProjectInfo project={project} />
        <ProjectQR url={project.url} />
      </div>
    </motion.div>
  );
};