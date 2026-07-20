import { motion } from 'framer-motion';
import { FiShield, FiCreditCard, FiLock, FiCheckCircle } from 'react-icons/fi';

const PayDuesPage = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-[#10B981] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#04331A] min-h-[85vh] flex items-center overflow-hidden z-0">
        
        {/* Background Tech Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20 lg:py-0">
          
          {/* LEFT COLUMN: Copy & Call to Action */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Security Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <FiLock className="text-[#10B981]" size={14} />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Official Payment Portal</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              Fund Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">Future.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-300 font-medium max-w-md mb-10 leading-relaxed">
              Securely pay your NIAESB departmental dues. Your contributions directly fund student projects, tech workshops, and the advancement of Agricultural Engineering at FUNAAB.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#0ea5e9] text-[#04331A] font-black text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <FiCreditCard size={20} />
                  Proceed to Payment
                </span>
                <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <button className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors duration-300">
                Verify Past Payment
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12 opacity-80">
              <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold">
                <FiShield className="text-[#10B981]" size={18} />
                Bank-Level Security
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold">
                <FiCheckCircle className="text-[#10B981]" size={18} />
                Instant Receipt
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Floating Receipt Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden md:flex justify-center lg:justify-end perspective-1000"
          >
            {/* The Floating Animation Wrapper */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Approved Dues</p>
                  <h3 className="text-white font-black text-xl">2026/2027 Session</h3>
                </div>
                <div className="bg-[#10B981]/20 p-3 rounded-full">
                  <FiCreditCard className="text-[#10B981]" size={24} />
                </div>
              </div>

              {/* Fee Structure - Simplified */}
              <div className="space-y-4 mb-8 mt-6">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-gray-200 font-bold tracking-wider uppercase text-sm">Fresher</span>
                  <span className="text-[#10B981] font-black text-2xl">₦0,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-gray-200 font-bold tracking-wider uppercase text-sm">Staylite</span>
                  <span className="text-white font-black text-2xl">₦0,000</span>
                </div>
              </div>

              {/* Decorative Barcode / Footer */}
              <div className="mt-6 pt-6 border-t border-white/20 flex flex-col items-center">
                <div className="flex gap-1 h-8 opacity-50 w-full justify-center">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`bg-white ${i % 3 === 0 ? 'w-2' : 'w-1'} rounded-full`}></div>
                  ))}
                </div>
                <p className="text-gray-400 text-[10px] font-mono mt-3 uppercase tracking-widest">NIAESB-UID-884920</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#04331A] tracking-tight">How it works</h2>
          <div className="w-16 h-1 bg-[#10B981] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Details</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Provide your matric number, level, and full name to securely fetch your payment profile.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative">
            <div className="absolute -top-3 -right-3 bg-[#10B981] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Fast</div>
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Make Payment</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Use our secure gateway to pay via Bank Transfer, USSD, or Debit Card instantly.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get Receipt</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Download your digitally signed PDF receipt immediately. It's automatically saved to your portal.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PayDuesPage;