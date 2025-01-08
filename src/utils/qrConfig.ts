export interface QRConfig {
  size: number;
  level: 'L' | 'M' | 'Q' | 'H';
  fgColor: string;
  bgColor: string;
  includeMargin: boolean;
}

export const defaultQRConfig: QRConfig = {
  size: 400,
  level: 'H',
  fgColor: '#000000',
  bgColor: '#ffffff',
  includeMargin: true,
};