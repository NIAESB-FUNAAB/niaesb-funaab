import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// Replace this with your actual image path
import landingImage from '../../assets/landing/tractor.jpg'; 

const MotionLink = motion(Link);

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 20, stiffness: 100, duration: 1 } },
  };

  const blurInVariants = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const buttonGroupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 150 } }
  };

  return (
    // Keeping the layout structure that fixed the overlap
    <section className="relative w-full pt-48 pb-24 lg:pt-0 lg:h-[100vh] lg:flex lg:items-center overflow-hidden bg-[#04331A]">
      
      {/* Reverted to Static Image Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <img 
          src={landingImage} 
          alt="Agricultural Bio-resources" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </motion.div>

      {/* Standard Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#04331A]/95 via-[#04331A]/70 to-transparent z-10" />

      {/* Inner Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <motion.div 
            className="lg:col-span-9 text-left flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden py-2">
              <motion.h1 
                variants={textRevealVariants}
                className="font-mono text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F0FDF4] mb-6 leading-tight"
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
              className="font-mono text-lg text-[#F0FDF4]/80 mb-10 max-w-2xl leading-relaxed tracking-wide"
            >
              Join the brightest minds. We are engineering the next generation of farm mechanization, ecological management, and sustainable bio-resources.
            </motion.p>
            
            <motion.div 
              variants={buttonGroupVariants} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-mono"
            >
              <MotionLink 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                to="/auth" 
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#10B981] text-[#F0FDF4] px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span>Join Us</span>
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </MotionLink>

              <MotionLink 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(240,253,244,0.1)" }}
                whileTap={{ scale: 0.95 }}
                to="/pay-dues" 
                className="inline-flex items-center justify-center bg-transparent backdrop-blur-sm text-[#F0FDF4] border border-[#F0FDF4]/30 px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:border-[#F0FDF4]/60"
              >
                Pay Dues
              </MotionLink>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
