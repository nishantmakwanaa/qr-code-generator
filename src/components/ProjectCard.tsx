// ProjectCard.tsx
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
  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full h-full flex flex-col justify-center items-center lg:items-start"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <ProjectInfo project={project} />
        <ProjectQR url={project.url} />
      </div>
    </motion.div>
  );
};
