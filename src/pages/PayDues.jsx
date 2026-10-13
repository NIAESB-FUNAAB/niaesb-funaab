import SEO from '../components/SEO';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShield, 
  FiCreditCard, 
  FiFileText,
  FiX,
  FiArrowRight
} from 'react-icons/fi';

// Import images from your local assets folder
import step1Img from '../assets/paydues/step1.jpg';
import step2Img from '../assets/paydues/step2.jpg';
import step3Img from '../assets/paydues/step3.jpg';

const PayDuesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const handlePaymentRedirect = () => {
    setIsModalOpen(false);
    window.open('https://link.funaabsupay.com/pay/4720727897', '_blank', 'noopener,noreferrer');
  };

  // Payment Instructions Modal
  const PaymentStepsModal = () => {
    const modalVariants = {
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.1, delayChildren: 0.1 }
      },
      exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }
    };

    const stepVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#04331A]/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4 py-12 md:p-8">
              <motion.div 
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-[1.5rem] p-6 md:p-10 max-w-3xl w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors z-20"
                >
                  <FiX size={20} />
                </button>

                <motion.div variants={stepVariants} className="relative z-10 mb-8 text-center md:text-left mt-2 md:mt-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#04331A]">
                    How to Pay
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">Follow these quick steps to complete your dues payment securely.</p>
                </motion.div>

                {/* The 3 Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                  {/* Step 1 */}
                  <motion.div variants={stepVariants} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col items-center text-center">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden border border-gray-200">
                      <img 
                        src={step1Img} 
                        alt="Step 1: Web Portal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm">Step One</h4>
                    <p className="text-xs text-gray-600">Click on "Continue with Web Portal".</p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div variants={stepVariants} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col items-center text-center">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden border border-gray-200">
                      <img 
                        src={step2Img} 
                        alt="Step 2: Input Info" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm">Step Two</h4>
                    <p className="text-xs text-gray-600">Fill in your correct matric number and details.</p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div variants={stepVariants} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col items-center text-center">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden border border-gray-200">
                      <img 
                        src={step3Img} 
                        alt="Step 3: Invoice" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm">Step Three</h4>
                    <p className="text-xs text-gray-600">Transfer the exact amount to the invoice account.</p>
                  </motion.div>
                </div>

                {/* Continue Button */}
                <motion.div variants={stepVariants} className="relative z-10 flex justify-center md:justify-end">
                  <button 
                    onClick={handlePaymentRedirect}
                    className="flex items-center justify-center gap-2 bg-[#04331A] text-white font-bold text-base px-8 py-3.5 rounded-xl hover:bg-[#064e27] transition-colors w-full md:w-auto"
                  >
                    Proceed to Portal <FiArrowRight />
                  </button>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 relative overflow-hidden">
      
      <PaymentStepsModal />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#04331A] min-h-[90vh] flex items-center z-10 rounded-b-[3rem] md:rounded-b-[4rem] pt-[10rem] md:pt-[14rem] pb-24 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          
          {/* Left Call to Action */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7 mt-8 md:mt-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">Powered by Funaab Pay</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Pay Your <br /> NIAESB Dues
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
              Your contribution helps us organize tutorials, field trips, and keep the departmental association running smoothly. Let's build a better community together.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-[#10B981] text-[#04331A] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#0e9f6e] transition-colors"
              >
                <FiCreditCard size={20} />
                Pay Now
              </button>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FiFileText /> Fetch Receipt
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT Receipt Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="relative flex justify-center lg:justify-end w-full lg:col-span-5"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)]">
              
              {/* Receipt Main Body */}
              <div className="bg-[#0A1A12] border border-[#10B981]/30 rounded-t-[2rem] p-8 shadow-xl relative overflow-hidden">
                <FiShield className="absolute -right-8 -bottom-8 text-[#10B981]/5 text-[200px] pointer-events-none rotate-12" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider">Verified Payment</p>
                    </div>
                    <h3 className="text-white font-bold text-2xl">2026/2027 Session</h3>
                  </div>
                </div>

                <div className="space-y-4 relative z-10 font-mono">
                  <div className="group">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">Fresher Quota</p>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/90 text-xs sm:text-sm">Level 100/200 DE</span>
                      <span className="text-[#10B981] font-bold text-xl sm:text-2xl">₦6,000</span>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">Staylite Quota</p>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/90 text-xs sm:text-sm">Level 200 - 500</span>
                      <span className="text-white font-bold text-xl sm:text-2xl">₦5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tear-off divider */}
              <div className="relative bg-[#0A1A12] border-x border-[#10B981]/30 h-8 flex items-center justify-between overflow-hidden">
                <div className="absolute left-0 w-4 h-4 bg-[#04331A] rounded-r-full -translate-x-px border-r border-[#10B981]/30"></div>
                <div className="w-full border-t-2 border-dashed border-white/10 mx-6"></div>
                <div className="absolute right-0 w-4 h-4 bg-[#04331A] rounded-l-full translate-x-px border-l border-[#10B981]/30"></div>
              </div>

              {/* Receipt Footer (Barcode) */}
              <div className="bg-[#0A1A12] border-b border-x border-[#10B981]/30 rounded-b-[2rem] p-8 flex flex-col items-center">
                <div className="font-mono text-white/20 text-3xl tracking-[-0.15em] flex justify-center w-full select-none overflow-hidden h-10">
                  ||||| || ||| | ||| |||| | || ||| || |||
                </div>
                <p className="text-white/40 text-[10px] font-bold mt-3 uppercase tracking-wider">Powered by Funaab Pay</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default PayDuesPage;