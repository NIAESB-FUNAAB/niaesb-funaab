import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import tractorImg from '../../assets/landing/hero.png';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#FAFAFA] pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-gray-100">
      
<<<<<<< HEAD
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
          poster="image_fff0e4.jpg"
          className="w-full h-full object-cover"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#04331A]/95 via-[#04331A]/60 to-transparent z-10" />

      {/* Main Container - Increased pt-40 on mobile so text clears the fixed floating header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-40 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
=======
      {/*Engineering Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(#07562C 1px, transparent 1px), linear-gradient(90deg, #07562C 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Glows */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-green-200/40 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#10B981]/15 blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
>>>>>>> dac1e667da69b861674f7cf493776b9bc61a657c
          
          {/* Left Column*/}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1a2b21] mb-6 leading-[1.15]"
            >
              Innovating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981]">Future</span> of Agricultural and Bio-resources Engineering in FUNAAB.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed font-medium lg:pr-10"
            >
              Join the brightest student Engineers at the Federal University of Agriculture, Abeokuta. We are bridging the gap in agricultural technology, farm mechanization and sustainable bio-resources.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a 
                href="#join" 
                className="group inline-flex items-center justify-center gap-2 bg-[#07562C] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#054020] transition-all duration-300 shadow-[0_8px_25px_rgba(7,86,44,0.25)] hover:shadow-[0_12px_30px_rgba(7,86,44,0.35)] hover:-translate-y-1"
              >
                Join Us
                <FiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a 
                href="#pay-dues" 
                className="inline-flex items-center justify-center bg-white text-[#07562C] border-2 border-[#07562C] px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-green-50 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Pay Dues
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column*/}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-md"
            >
              <img 
                src={tractorImg}
                alt="Agricultural Engineering Tractor" 
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
