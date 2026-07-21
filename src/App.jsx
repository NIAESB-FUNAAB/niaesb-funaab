import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import LecturersPage from './pages/LecturersPage';
import LibraryPage from './pages/LibraryPage';
import PayDues from './pages/PayDues';
import ExcosPage from './pages/ExcosPage';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow">
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/lecturers" element={<LecturersPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/pay-dues" element={<PayDues />} />
          <Route path="/excos" element={<ExcosPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;