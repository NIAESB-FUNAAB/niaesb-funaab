import React, { useState, useEffect } from 'react';

const ELibraryPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Trigger entrance animations on load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const levels = [
    { id: '100', title: '100 Level', label: 'Resources' },
    { id: '200', title: '200 Level', label: 'Resources' },
    { id: '300', title: '300 Level', label: 'Resources' },
    { id: '400', title: '400 Level', label: 'Resources' },
    { id: '500', title: '500 Level', label: 'Final Year' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden selection:bg-green-200 selection:text-green-900 z-0">
      
      {/* Animated Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-green-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse pointer-events-none -z-10" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-green-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse pointer-events-none -z-10" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        
        {/* Dynamic Header - Split Layout for Image */}
        <div className={`mb-20 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-green-200 bg-white shadow-sm shadow-green-100 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-green-700 text-xs font-bold uppercase tracking-wider">
               ABE E-Library
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
              Access <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-400">
                your Course Resources
              </span>
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-xl leading-relaxed">
              Select your level to access a folder of course materials, past questions, and project guides.
            </p>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/15 border-4 border-white group">
              {/* Fallback background */}
              <div className="absolute inset-0 bg-green-50 flex items-center justify-center text-green-600 font-medium z-0">
                Loading Image...
              </div>
              
              {/* TODO: Replace this placeholder URL with your actual image path */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                alt="Students studying in library" 
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle green overlay to tie the image into the brand colors perfectly */}
              <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
          </div>

        </div>

        {/* High-Energy Card Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {levels.map((level, index) => (
            <button
              key={level.id}
              className={`group relative h-80 w-full bg-white border-2 border-gray-100 rounded-3xl p-6 text-left overflow-hidden transition-all duration-700 ease-out outline-none hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)] hover:-translate-y-4 focus:ring-4 focus:ring-green-500/30 flex flex-col justify-between ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Hover Sweep (Green) */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Animated Giant Number */}
              <div className="absolute -bottom-4 -right-8 text-[140px] font-black text-gray-50 group-hover:text-green-500/10 transition-all duration-700 ease-out select-none pointer-events-none group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-x-4">
                {level.id}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Sleek Minimalist SVG Icon */}
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-green-200">
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <span className="block text-sm font-bold text-gray-400 group-hover:text-green-600 mb-1 transition-colors duration-300 uppercase tracking-widest">
                  {level.label}
                </span>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight group-hover:text-green-950 transition-colors duration-300">
                  {level.title}
                </h3>
              </div>

              {/* Action Button */}
              <div className="relative z-10 flex items-center gap-3 mt-auto pt-8">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500 group-hover:shadow-lg group-hover:shadow-green-600/40">
                  <svg 
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Enter Library
                </span>
              </div>
              
              {/* Active Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </button>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ELibraryPage;