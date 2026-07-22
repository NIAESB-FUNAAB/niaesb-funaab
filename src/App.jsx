import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import LecturersPage from './pages/LecturersPage';
import LibraryPage from './pages/LibraryPage';
import LevelDetails from './components/library/LevelDetails'; 
import PayDues from './pages/PayDues';
import ExcosPage from './pages/ExcosPage';
import Auth from './pages/Auth';

function App() {
  return (
    // THE FIX: Added relative, w-full, and overflow-x-hidden to this wrapper
    // This acts as a strict cage so no child element can force the page wider than the screen.
    <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-28 md:pt-32">
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
      </main>

      <Footer />
    </div>
  );
}

export default App;