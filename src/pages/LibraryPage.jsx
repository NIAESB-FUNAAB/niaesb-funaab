import React, { useState, useEffect } from 'react';

const ELibraryPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  
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
    // Unified Wrapper with Safe Area for Header
    <div className="bg-[#FAFAFA] min-h-screen pb-24 pt-36 md:pt-40 font-mono selection:bg-[#10B981] selection:text-white relative overflow-hidden">
      
      {/* --- HERO SECTION (Bento Box Style) --- */}
      <div className={`relative bg-[#04331A] min-h-[60vh] rounded-[3rem] max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 mb-20 shadow-[0_20px_60px_-15px_rgba(4,51,26,0.4)] border border-[#07562C] overflow-hidden transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Trapped Ambient Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#10B981]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none z-0" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-[#10B981]/10 rounded-full blur-[100px] mix-blend-screen animate-pulse pointer-events-none z-0" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-sm rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                ABE E-Library
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
              Access <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-300 italic pr-2">
                Course Resources
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-medium max-w-xl leading-relaxed">
              Select your level to access a comprehensive folder of course materials, past questions, and project guides curated for FUNAAB engineering students.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group bg-[#04331A]/50">
              
              <div className="absolute inset-0 flex items-center justify-center text-white/40 font-bold z-0 text-xs tracking-widest uppercase">
                Loading Assets...
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                alt="Students studying in library" 
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              
              <div className="absolute inset-0 bg-[#04331A]/30 mix-blend-overlay z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
          </div>

        </div>
      </div>

      {/* --- LEVELS GRID --- */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {levels.map((level, index) => (
            <button
              key={level.id}
              className={`group relative h-80 w-full bg-white border border-[#04331A]/10 rounded-[2rem] p-6 text-left overflow-hidden transition-all duration-700 ease-out outline-none hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 hover:-translate-y-3 focus:ring-4 focus:ring-[#10B981]/20 flex flex-col justify-between ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              {/* Giant Watermark */}
              <div className="absolute -bottom-4 -right-8 text-[140px] font-black text-[#04331A]/5 group-hover:text-[#10B981]/10 transition-all duration-700 ease-out select-none pointer-events-none group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-x-4">
                {level.id}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#10B981]/10 transition-all duration-500 border border-[#04331A]/5 group-hover:border-[#10B981]/20">
                  <svg 
                    className="w-5 h-5 text-[#04331A]/40 group-hover:text-[#10B981] transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <span className="block text-[10px] md:text-xs font-black text-[#04331A]/40 group-hover:text-[#10B981] mb-2 transition-colors duration-300 uppercase tracking-[0.2em]">
                  {level.label}
                </span>
                <h3 className="text-3xl font-black text-[#04331A] tracking-tight transition-colors duration-300">
                  {level.title}
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-auto pt-8">
                <div className="w-12 h-12 rounded-full bg-[#04331A] flex items-center justify-center group-hover:bg-[#10B981] transition-colors duration-500 group-hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)]">
                  <svg 
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[#04331A] group-hover:text-[#10B981] transition-colors duration-300">
                  Enter Library
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ELibraryPage;