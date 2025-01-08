import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-sans">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="relative">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <Header />
          <ProjectGrid />
        </div>

        <footer className="text-center py-6 sm:py-8 text-gray-400">
          <p className="text-sm sm:text-base font-light">
            Nishant Makwana © 2024. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;