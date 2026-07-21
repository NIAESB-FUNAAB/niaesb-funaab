import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiZap, FiCpu, FiGlobe } from 'react-icons/fi';

const AboutSection = () => {
  const containerRef = useRef(null);

  // Advanced Scroll Tracking for Parallax Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Independent movement rates for floating elements
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateSlight = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-32 bg-[#fafafa] font-mono selection:bg-[#10B981] selection:text-white"
    >
      {/* 1. PREMIUM TEXTURE: Subtle animated noise overlay for physical depth */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      {/* 2. ARCHITECTURAL GRID: Fades out at top and bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="w-full h-full absolute inset-0 bg-[linear-gradient(to_right,#04331A0A_1px,transparent_1px),linear-gradient(to_bottom,#04331A0A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Massive Background Typography Parallax */}
      <motion.div 
        style={{ x: yFast }}
        className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] z-0 flex whitespace-nowrap"
      >
        <h2 className="text-[15rem] font-black text-[#04331A] tracking-tighter uppercase leading-none">
          AGRICULTURAL BIO-RESOURCES
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL LAYOUT: Sticky Left, Scrolling Right */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">
          
          {/* Left Column: Sticky Typography Area */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* High-end Technical Badge */}
              <div className="inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-white/40 backdrop-blur-xl border border-[#04331A]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
                <div className="w-8 h-8 rounded-full bg-[#04331A] flex items-center justify-center shadow-inner">
                  <FiZap className="text-[#10B981] w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#04331A] uppercase">
                  System Overview
                </span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#04331A] mb-8 leading-[1.05] tracking-tighter">
                Engineering <br />
                the <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981] px-2">
                  Tomorrow
                  <span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-[#10B981]/20 -z-10 rounded-sm skew-x-12"></span>
                </span> <br />
                of Agriculture.
              </h3>
              
              <p className="text-[#04331A]/60 text-lg mb-12 leading-relaxed font-medium max-w-md">
                NIAESB is the nucleus of agricultural innovation at FUNAAB. We transform complex theoretical concepts into tangible global solutions.
              </p>
              
              <Link 
                to="/about" 
                className="group relative inline-flex items-center gap-4 text-[#04331A] font-bold text-sm tracking-widest uppercase hover:text-[#10B981] transition-colors duration-300"
              >
                <span className="relative z-10">Initialize Full History</span>
                <span className="w-12 h-[2px] bg-[#04331A] group-hover:bg-[#10B981] group-hover:w-16 transition-all duration-300 ease-out relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-current rotate-45 transform translate-x-[1px]"></span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Parallax Floating Cards */}
          <div className="lg:col-span-7 relative h-full pt-10 lg:pt-0">
            
            {/* Ambient Background Glow for the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#10B981]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col gap-8">
              
              {/* Parallax Card 1: The Vision (Moves slower) */}
              <motion.div 
                style={{ y: ySlow }}
                className="group relative w-full lg:w-[90%] lg:ml-auto bg-white/70 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] border border-white shadow-[0_30px_60px_-15px_rgba(4,51,26,0.08)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#07562C]/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                
                <div className="w-16 h-16 bg-[#fafafa] rounded-2xl flex items-center justify-center text-[#07562C] mb-8 border border-[#04331A]/10 shadow-sm relative z-10 overflow-hidden">
                  <FiGlobe className="w-6 h-6 z-10" />
                  <div className="absolute inset-0 bg-[#10B981]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
                
                <h4 className="text-2xl font-bold text-[#04331A] mb-4 tracking-tight relative z-10">Strategic Vision</h4>
                <p className="text-[#04331A]/70 text-base leading-relaxed font-medium relative z-10">
                  To establish a premier developmental ecosystem that inspires technical innovation, cultivates professional excellence, and forges the next generation of Bio-resources leaders.
                </p>
              </motion.div>

              {/* Parallax Card 2: The Mission (Moves faster, overlaps slightly) */}
              <motion.div 
                style={{ y: yFast, rotate: rotateSlight }}
                className="group relative w-full lg:w-[85%] bg-[#04331A] p-8 lg:p-12 rounded-[2rem] border border-[#07562C] shadow-[0_40px_80px_-20px_rgba(4,51,26,0.4)] overflow-hidden lg:-mt-12 z-20"
              >
                {/* Dynamic Inner Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(16,185,129,0.15),transparent_80%)]"></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                <div className="w-16 h-16 bg-[#07562C] rounded-2xl flex items-center justify-center text-[#10B981] mb-8 border border-[#10B981]/20 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <FiCpu className="w-6 h-6" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight relative z-10">Core Mission</h4>
                <p className="text-[#10B981]/80 text-base leading-relaxed font-medium relative z-10">
                  Deploying unparalleled opportunities for collaborative learning, leadership training, and practical engineering exposure to drive sustainable agricultural development.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;