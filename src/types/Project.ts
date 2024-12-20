export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  category: 'web' | 'mobile' | 'desktop';
}