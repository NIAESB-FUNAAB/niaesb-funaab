import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout components load immediately so the shell of the app is always visible
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy load all heavy page components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const LecturersPage = lazy(() => import('./pages/LecturersPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const LevelDetails = lazy(() => import('./components/library/LevelDetails')); 
const PayDues = lazy(() => import('./pages/PayDues'));
const ExcosPage = lazy(() => import('./pages/ExcosPage'));
const Auth = lazy(() => import('./pages/Auth'));

// A sleek loading spinner that matches your brand colors
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <div className="w-12 h-12 border-4 border-[#10B981]/20 border-t-[#10B981] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-28 md:pt-32">
        {/* Suspense catches the lazy-loaded components and shows the loader while they fetch */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/lecturers" element={<LecturersPage />} />
            <Route path="/library" element={<LibraryPage />} />
            
            {/* Dynamic route that captures 100, 200, 300, 400, or 500 */}
            <Route path="/library/:levelId" element={<LevelDetails />} />
            
            <Route path="/pay-dues" element={<PayDues />} />
            <Route path="/excos" element={<ExcosPage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;