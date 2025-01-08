import React from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';

interface ProjectQRProps {
  url: string;
}

export const ProjectQR: React.FC<ProjectQRProps> = ({ url }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative aspect-square w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[500px] mx-auto">
        <QRCodeGenerator
          url={url}
          config={{
            size: 600,
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