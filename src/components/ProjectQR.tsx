import React from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';

interface ProjectQRProps {
  url: string;
}

export const ProjectQR: React.FC<ProjectQRProps> = ({ url }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="relative aspect-square w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto">
        <QRCodeGenerator
          url={url}
          config={{
            size: 300,
            level: 'H',
            fgColor: '#6366f1',
            bgColor: 'rgba(255, 255, 255, 0.05)',
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};