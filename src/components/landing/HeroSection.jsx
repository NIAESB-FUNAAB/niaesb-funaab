import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import landingVideo from '../../assets/landing/landing-video.mp4';

const HeroSection = () => {
  // Staggering the entrance of each element
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.4 
      },
    },
  };

  // 3D Flip & Mask Reveal for typography
  const textRevealVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -40, // Adds a 3D hinge effect
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        damping: 18, 
        stiffness: 80, 
        duration: 1 
      } 
    },
  };

  // Smooth blur-in for the subtext
  const blurInVariants = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 20 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Explosive spring pop for the buttons
  const buttonGroupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 150 }
    }
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden perspective-1000">
      
      {/* Video Background with slow zoom-out entrance */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Complex Gradient Overlay: Darker on the left for text readability, sweeping to transparent */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-20 w-full mt-16 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div 
            className="lg:col-span-9 text-left flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 
                Wrapping the H1 in a perspective container to handle the 3D rotateX properly.
                overflow-hidden creates the "mask" so the text looks like it slides up from a floor.
            */}
            <div className="overflow-hidden py-2 perspective-[1000px]">
              <motion.h1 
                variants={textRevealVariants}
                className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
              >
                Innovating the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#A7F3D0] inline-block">
                  Future
                </span> of Agricultural <br className="hidden lg:block"/>
                and Bio-resources.
              </motion.h1>
            </div>
            
            <motion.p 
              variants={blurInVariants}
              className="text-base sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light tracking-wide"
            >
              Join the brightest minds at FUNAAB. We are engineering the next generation of farm mechanization, ecological management, and sustainable bio-resources.
            </motion.p>
            
            <motion.div 
              variants={buttonGroupVariants} 
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#join" 
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span>Join Us</span>
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary Button */}
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                href="#pay-dues" 
                className="inline-flex items-center justify-center bg-transparent backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-[16px] transition-all duration-300 hover:border-white/60"
              >
                Pay Dues
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
