import React from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';

interface ProjectQRProps {
  url: string;
}

export const ProjectQR: React.FC<ProjectQRProps> = ({ url }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative aspect-square w-full max-w-[600px] sm:max-w-[700px] lg:max-w-[800px] mx-auto">
        <QRCodeGenerator
          url={url}
          config={{
            size: 700,
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
