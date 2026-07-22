import { motion } from 'framer-motion';
import { FiShield, FiCreditCard, FiLock, FiCheckCircle } from 'react-icons/fi';

const PayDuesPage = () => {
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

  return (
    // Unified Wrapper with Safe Area for Header
    <div className="bg-[#FAFAFA] min-h-screen pb-24 pt-36 md:pt-40 relative overflow-hidden font-mono selection:bg-[#10B981] selection:text-white">
      
      {/* --- HERO SECTION (Bento Box Style) --- */}
      <div className="relative bg-[#04331A] min-h-[75vh] flex items-center overflow-hidden z-10 rounded-[3rem] max-w-7xl mx-auto px-6 lg:px-12 py-20 mb-24 shadow-[0_20px_60px_-15px_rgba(4,51,26,0.4)] border border-[#07562C]">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Call to Action */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6 shadow-sm">
              <FiLock className="text-[#10B981]" size={14} />
              <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Official Payment Portal</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6 drop-shadow-lg">
              Fund Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-300 italic pr-2">Future.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/80 font-medium max-w-md mb-10 leading-relaxed">
              Securely pay your NIAESB departmental dues. Your contributions directly fund student projects, tech workshops, and the advancement of Agricultural Engineering at FUNAAB.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-3 bg-[#10B981] hover:bg-white text-[#04331A] font-black text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <FiCreditCard size={20} />
                  Proceed to Payment
                </span>
              </button>
              
              <button className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors duration-300">
                Verify Past Payment
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12 opacity-80">
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-bold tracking-wide">
                <FiShield className="text-[#10B981]" size={18} />
                Bank-Level Security
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-bold tracking-wide">
                <FiCheckCircle className="text-[#10B981]" size={18} />
                Instant Receipt
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT Receipt Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="relative hidden lg:flex justify-end"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl [transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Approved Dues</p>
                  <h3 className="text-white font-black text-xl tracking-tight">2026/2027 Session</h3>
                </div>
                <div className="bg-[#10B981]/20 p-3 rounded-full border border-[#10B981]/30">
                  <FiCreditCard className="text-[#10B981]" size={24} />
                </div>
              </div>

              <div className="space-y-4 mb-8 mt-6">
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                  <span className="text-white/80 font-black tracking-[0.1em] uppercase text-xs">Fresher</span>
                  <span className="text-[#10B981] font-black text-2xl">₦0,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                  <span className="text-white/80 font-black tracking-[0.1em] uppercase text-xs">Staylite</span>
                  <span className="text-white font-black text-2xl">₦0,000</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
                <div className="flex gap-1.5 h-8 opacity-40 w-full justify-center">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`bg-white ${i % 3 === 0 ? 'w-2' : 'w-1'} rounded-full`}></div>
                  ))}
                </div>
                <p className="text-white/50 text-[10px] font-bold mt-4 uppercase tracking-[0.2em]">NIAESB-UID-884920</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 relative mb-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-[2px] w-8 bg-[#10B981]"></div>
             <span className="text-[#10B981] font-black text-xs tracking-[0.2em] uppercase">The Process</span>
             <div className="h-[2px] w-8 bg-[#10B981]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#04331A] tracking-tighter">How it works</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Step 1 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/10 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">1</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Enter Details</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed">Provide your matric number, level, and full name to securely fetch your payment profile.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/10 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 transition-all duration-300 group relative">
            <div className="absolute -top-3 -right-3 bg-[#10B981] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">Fast</div>
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">2</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Make Payment</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed">Use our secure gateway to pay via Bank Transfer, USSD, or Debit Card instantly.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/10 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#04331A]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981]/10 transition-colors">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-[#10B981]">3</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Get Receipt</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed">Download your digitally signed PDF receipt immediately. It's automatically saved to your portal.</p>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default PayDuesPage;