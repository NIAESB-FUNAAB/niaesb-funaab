import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
// Import your image here:
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
    <section className="relative bg-[#FAFAFA] min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-12 lg:py-0 border-b border-gray-200">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#07562C 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Text (7 columns) */}
          <motion.div 
            className="lg:col-span-7 text-left lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[42px] font-extrabold tracking-tight text-[#1a2b21] mb-5 leading-[1.2]"
            >
              Innovating the <span className="text-[#10B981]">Future</span> of Agricultural and Bio-resources Engineering in FUNAAB.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-[17px] text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium pr-0 lg:pr-10"
            >
              Join the brightest student Engineers at the Federal University of Agriculture, Abeokuta. We are bridging the gap in agricultural technology, farm mechanization and sustainable bio-resources.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#join" 
                className="group inline-flex items-center justify-center gap-2 bg-[#07562C] text-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-[#054020] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Join Us
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pay-dues" 
                className="inline-flex items-center justify-center bg-white text-[#07562C] border border-[#07562C] px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-gray-50 transition-all duration-300 shadow-sm"
              >
                Pay Dues
              </a>
            </motion.div>
          </motion.div>

{/* Right Column: Neat, Unframed, Floating Image */}
          <motion.div 
            className="lg:col-span-5 mt-16 lg:mt-0 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img 
              src={tractorImg}
              alt="Agricultural Engineering Tractor" 
              // 'w-full max-w-sm' keeps it responsive but prevents it from blowing up.
              // 'object-contain' ensures the whole image is visible without being cropped.
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;