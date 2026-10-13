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
      hidden: { opacity: 0, scale: 0.8, rotateX: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        transition: { type: "spring", damping: 20, stiffness: 200, staggerChildren: 0.2, delayChildren: 0.2 }
      },
      exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
    };

    const stepVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
      <AnimatePresence>
        {isModalOpen && (
          // 1. Outer overlay set to overflow-y-auto to handle tall content on mobile
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#04331A]/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            {/* 2. Inner wrapper to center the modal and provide safe scroll padding */}
            <div className="flex min-h-full items-center justify-center p-4 py-12 md:p-8">
              <motion.div 
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-[2rem] p-6 md:p-10 max-w-3xl w-full relative shadow-[0_0_80px_rgba(16,185,129,0.3)] border border-[#10B981]/30 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-3xl pointer-events-none"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"
                />

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors z-20 hover:rotate-90 duration-300"
                >
                  <FiX size={20} />
                </button>

                <motion.div variants={stepVariants} className="relative z-10 mb-8 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-3xl md:text-4xl font-black text-[#04331A] tracking-tight">
                    How to Pay
                  </h3>
                  <p className="text-[#04331A]/60 font-medium mt-2">Follow these quick steps to complete your dues payment securely.</p>
                </motion.div>

                {/* The 3 Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                  {/* Step 1 */}
                  <motion.div 
                    variants={stepVariants}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col items-center text-center group"
                  >
                    <div className="w-full h-32 rounded-xl mb-4 overflow-hidden border border-gray-200 shadow-sm relative">
                      <img 
                        src={step1Img} 
                        alt="Step 1: Web Portal" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm uppercase tracking-wide">Step One</h4>
                    <p className="text-xs text-gray-500 font-medium">Click on "Continue with Web Portal".</p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div 
                    variants={stepVariants}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col items-center text-center group"
                  >
                    <div className="w-full h-32 rounded-xl mb-4 overflow-hidden border border-gray-200 shadow-sm relative">
                      <img 
                        src={step2Img} 
                        alt="Step 2: Input Info" 
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm uppercase tracking-wide">Step Two</h4>
                    <p className="text-xs text-gray-500 font-medium">Fill in your correct matric number and details.</p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div 
                    variants={stepVariants}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col items-center text-center group"
                  >
                    <div className="w-full h-32 rounded-xl mb-4 overflow-hidden border border-gray-200 shadow-sm relative">
                      <img 
                        src={step3Img} 
                        alt="Step 3: Invoice" 
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-[#04331A] mb-1 text-sm uppercase tracking-wide">Step Three</h4>
                    <p className="text-xs text-gray-500 font-medium">Transfer the exact amount to the invoice account.</p>
                  </motion.div>
                </div>

                {/* Continue Button */}
                <motion.div variants={stepVariants} className="relative z-10 flex justify-center md:justify-end">
                  <button 
                    onClick={handlePaymentRedirect}
                    className="group relative flex items-center justify-center gap-3 bg-[#04331A] text-white font-black text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(4,51,26,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 w-full md:w-auto overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Proceed to Portal <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
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
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 relative overflow-hidden font-mono selection:bg-[#10B981] selection:text-white">

      <PaymentStepsModal />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#04331A] min-h-[90vh] flex items-center overflow-hidden z-10 rounded-b-[3rem] md:rounded-b-[4rem] pt-[10rem] md:pt-[14rem] pb-24 shadow-[0_20px_60px_-15px_rgba(4,51,26,0.4)] border-b border-[#07562C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Call to Action */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7 mt-8 md:mt-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 bg-[#07562C]/50 backdrop-blur-md border border-[#10B981]/30 px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#10B981]/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="text-[#10B981] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Powered by Funaab Pay</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tighter mb-6 drop-shadow-2xl">
              Pay Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-200 pr-2">NIAESB Dues</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-xl text-white/70 font-medium max-w-lg mb-10 leading-relaxed border-l-2 border-[#10B981] pl-4">
              Your contribution helps us organize tutorials, field trips, and keep the departmental association running smoothly. Let's build a better community together.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center justify-center gap-3 bg-[#10B981] text-[#04331A] font-black text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FiCreditCard size={20} />
                  Pay Now
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT Receipt Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="relative flex justify-center lg:justify-end w-full lg:col-span-5 mt-6 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] z-10 lg:[transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)]"
            >
              {/* Receipt Main Body */}
              <div className="bg-[#0A1A12]/80 backdrop-blur-xl border border-[#10B981]/20 rounded-t-[2rem] p-8 shadow-2xl relative overflow-hidden">
                <FiShield className="absolute -right-8 -bottom-8 text-[#10B981]/5 text-[200px] pointer-events-none rotate-12" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">Verified Payment</p>
                    </div>
                    <h3 className="text-white font-black text-2xl tracking-tight">2026/2027 Session</h3>
                  </div>
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="group">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.1em] mb-1">Fresher Quota</p>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2 group-hover:border-[#10B981]/30 transition-colors">
                      <span className="text-white/90 font-medium text-sm">Level 100/200 DE</span>
                      <span className="text-[#10B981] font-black text-2xl">₦6,000</span>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.1em] mb-1">Staylite Quota</p>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2 group-hover:border-[#10B981]/30 transition-colors">
                      <span className="text-white/90 font-medium text-sm">Level 200 - 500</span>
                      <span className="text-white font-black text-2xl">₦5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tear-off divider */}
              <div className="relative bg-[#0A1A12]/80 backdrop-blur-xl border-x border-[#10B981]/20 h-8 flex items-center justify-between overflow-hidden">
                <div className="absolute left-0 w-4 h-4 bg-[#04331A] rounded-r-full -translate-x-px border-r border-[#10B981]/20"></div>
                <div className="w-full border-t-2 border-dashed border-white/10 mx-6"></div>
                <div className="absolute right-0 w-4 h-4 bg-[#04331A] rounded-l-full translate-x-px border-l border-[#10B981]/20"></div>
              </div>

              {/* Receipt Footer (Barcode) */}
              <div className="bg-[#0A1A12]/80 backdrop-blur-xl border-b border-x border-[#10B981]/20 rounded-b-[2rem] p-8 flex flex-col items-center shadow-2xl">
                <div className="font-mono text-white/20 text-3xl tracking-[-0.15em] flex justify-center w-full select-none overflow-hidden h-10">
                  ||||| || ||| | ||| |||| | || ||| || |||
                </div>
                <p className="text-white/40 text-[9px] font-black mt-3 uppercase tracking-[0.3em]">Powered by Funaab Pay</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default PayDuesPage;