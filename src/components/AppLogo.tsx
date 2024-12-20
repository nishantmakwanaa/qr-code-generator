import React from 'react';
import { Globe, Smartphone, Monitor } from 'lucide-react';
import { Project } from '../types/Project';

interface AppLogoProps {
  category: Project['category'];
  className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({ category, className }) => {
  const icons = {
    web: Globe,
    mobile: Smartphone,
    desktop: Monitor,
  };

  const Icon = icons[category];

  return (
    <div className={`p-4 bg-white/5 rounded-xl ${className}`}>
      <Icon className="w-full h-full" />
    </div>
  );
};