import React from 'react';
import { ArrowRight, Compass, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full -mt-24 pt-24 bg-[#04130a] text-white flex flex-col justify-between overflow-hidden selection:bg-[#2ecc71] selection:text-[#04130a]">
      {/* Background Gradients & Soft Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(13,59,34,0.8),rgba(4,19,10,1))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2ecc71]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main 404 Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* 404 Watermark */}
          <span className="font-mono text-8xl sm:text-[10rem] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-[#2ecc71]/50 leading-none select-none">
            404
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Off the <span className="text-[#2ecc71]">Beaten Track.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a3b899] max-w-lg mb-8 leading-relaxed font-normal">
            The page, research field, or bio-resource you are attempting to locate does not exist or has been relocated. Let’s get you back on course.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#2ecc71] text-[#04130a] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#27ae60] hover:shadow-[0_0_25px_rgba(46,204,113,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              Return Home
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>

            <Link
              to="/quick-access"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white font-medium text-sm px-7 py-3 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Quick Access
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}