export interface QRConfig {
  size: number;
  level: 'L' | 'M' | 'Q' | 'H';
  fgColor: string;
  bgColor: string;
  includeMargin: boolean;
}

export const defaultQRConfig: QRConfig = {
  size: 300,
  level: 'H',
  fgColor: '#6366f1',
  bgColor: 'rgba(255, 255, 255, 0.05)',
  includeMargin: true,
};