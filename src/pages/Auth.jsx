import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiHash, FiArrowRight } from 'react-icons/fi';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Animation variants for the form switching
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      
      {/* Left Panel - Branding (Hidden on mobile, visible on lg screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#07562C]">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#10B981]/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#04331A]/50 blur-[100px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 w-full flex flex-col justify-between p-16 lg:p-24 h-full">
          {/* Logo / Brand Name */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#07562C] flex items-center justify-center shadow-lg border border-white/10">
              <span className="text-white font-black text-xl tracking-tighter">N</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">NIAESB</span>
          </motion.div>

          {/* Core Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">
                Future of Agriculture.
              </span>
            </h1>
            <p className="text-emerald-100/80 text-lg max-w-md leading-relaxed font-medium">
              Join the community of innovators and bioresources engineers. Access resources, connect with peers, and shape your academic journey.
            </p>
          </motion.div>

          {/* Footer / Copyright */}
          <div className="text-emerald-400/60 text-sm font-medium">
            © {new Date().getFullYear()} NIAESB FUNAAB Chapter. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative overflow-hidden">
        
        {/* Mobile Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-200/30 blur-[80px] lg:hidden" />
        
        <div className="w-full max-w-md relative z-10">
          
          {/* Mobile Logo Header */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#07562C] flex items-center justify-center shadow-md">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <span className="text-[#07562C] text-2xl font-bold tracking-tight">NIAESB</span>
          </div>

          {/* Toggle Buttons */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-10 shadow-inner">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                isLogin ? 'bg-white text-[#07562C] shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                !isLogin ? 'bg-white text-[#07562C] shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
                  {isLogin ? 'Welcome back' : 'Join the Chapter'}
                </h2>
                <p className="text-gray-500 font-medium">
                  {isLogin ? 'Enter your credentials to access your portal.' : 'Setup your student profile to get started.'}
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Registration Only Fields */}
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10B981] transition-colors">
                          <FiUser className="text-lg" />
                        </div>
                        <input
                          type="text"
                          placeholder="Timilehin Olajolo"
                          className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Matric Number</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10B981] transition-colors">
                          <FiHash className="text-lg" />
                        </div>
                        <input
                          type="text"
                          placeholder="e.g. 2021/1234"
                          className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Common Fields */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10B981] transition-colors">
                      <FiMail className="text-lg" />
                    </div>
                    <input
                      type="email"
                      placeholder="student@funaab.edu.ng"
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5 ml-1">
                    <label className="block text-sm font-bold text-gray-700">Password</label>
                    {isLogin && (
                      <a href="#" className="text-xs font-bold text-[#10B981] hover:text-[#07562C] transition-colors">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10B981] transition-colors">
                      <FiLock className="text-lg" />
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 group relative flex items-center justify-center gap-3 bg-[#07562C] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-[0_8px_20px_rgba(7,86,44,0.15)] hover:bg-[#054020] hover:shadow-[0_12px_25px_rgba(7,86,44,0.25)] overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span>{isLogin ? 'Sign In to Portal' : 'Create Account'}</span>
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </motion.button>

              </form>
            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>
      
      {/* Required custom animation for the button sheen */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;