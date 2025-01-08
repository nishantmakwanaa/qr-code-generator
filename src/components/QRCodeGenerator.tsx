import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { defaultQRConfig, QRConfig } from '../utils/qrConfig';

interface QRCodeGeneratorProps {
  url: string;
  config?: Partial<QRConfig>;
  className?: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  url,
  config = {},
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const finalConfig = { ...defaultQRConfig, ...config };

  if (!url || typeof url !== 'string') {
    return <div>Error : Invalid URL</div>;
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: isHovered ? 10 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <QRCodeSVG
          value={url}
          size={400}
          level={finalConfig.level}
          fgColor="#000000"
          bgColor="#ffffff"
          includeMargin={finalConfig.includeMargin}
          className="w-full h-full rounded-xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-xl pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};