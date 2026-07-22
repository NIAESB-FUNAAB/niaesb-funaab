import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    // THE FIX: Added -mt-28 md:-mt-32 and shifted padding to pt-[12rem] md:pt-[14rem]
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 pt-[12rem] md:pt-[14rem] font-mono selection:bg-[#10B981] selection:text-white relative flex items-center justify-center">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04331A05_1px,transparent_1px),linear-gradient(to_bottom,#04331A05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- UNIVERSAL COMING SOON BENTO BOX --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative bg-[#04331A] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(4,51,26,0.4)] border border-[#07562C] py-20 px-8 md:px-16 flex flex-col items-center text-center min-h-[60vh] justify-center"
        >
          {/* Ambient Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#10B981] rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>

          {/* Simple Status Badge */}
          <motion.div variants={fadeUp} className="relative z-10 inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="text-white/90 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              Coming Soon
            </span>
          </motion.div>
          
          {/* Main Headline */}

          {/* Universal Copy */}
          <motion.p variants={fadeUp} className="relative z-10 text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-16">
            Page Not Available
          </motion.p>

          {/* Real Loading Status Bar */}
          <motion.div variants={fadeUp} className="relative z-10 w-full max-w-xs flex flex-col items-center gap-4">
            <div className="flex justify-between w-full text-white/40 text-[10px] font-bold uppercase tracking-widest">
              <span>Loading</span>
              <span className="animate-pulse">99%</span>
            </div>
            
            {/* The Animated Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                animate={{ 
                  x: ["-100%", "200%"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#10B981] to-transparent rounded-full"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;