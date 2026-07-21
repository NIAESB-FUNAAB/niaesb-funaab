import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, FiX, FiChevronDown, FiBookOpen, 
  FiUsers, FiCreditCard, FiFileText, FiArrowRight 
} from 'react-icons/fi';
import logo from '../../assets/logo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const { scrollY } = useScroll();
  const location = useLocation();

  // Scroll detection for sticky header styles
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // CRITICAL FIX: Close menu and scroll to top smoothly on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const quickAccessLinks = [
    { name: 'Blog', to: '/blog', icon: <FiFileText />, desc: "Latest news & articles" },
    { name: 'E-Library', to: '/library', icon: <FiBookOpen />, desc: "Academic resources" },
    { name: 'Lecturers', to: '/lecturers', icon: <FiUsers />, desc: "Faculty directory" },
    { name: 'Pay Dues', to: '/pay-dues', icon: <FiCreditCard />, desc: "Online payment portal" },
  ];
  
  const mainLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Executives', to: '/excos' },
  ];

  // Helper to check if a route is active
  const isActive = (path) => location.pathname === path;

  // Soft motion ease curve
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <>
      {/* DESKTOP & FLOATING HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 md:px-8 pt-4 md:pt-6 pointer-events-none font-mono">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className={`pointer-events-auto w-full max-w-7xl flex justify-between items-center transition-all duration-500 ease-in-out rounded-full border ${
            scrolled || isOpen
              ? 'bg-white/80 backdrop-blur-xl border-[#04331A]/10 py-2.5 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
              : 'bg-white/95 backdrop-blur-md border-white/20 py-4 px-6 shadow-[0_20px_40px_-15px_rgba(7,86,44,0.1)]'
          }`}
        >
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden flex items-center justify-center border-2 border-[#10B981]/20 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500 ease-out">
              <img src={logo} alt="NIAESB Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-xl tracking-[0.1em] text-[#04331A] group-hover:text-[#10B981] transition-colors duration-300">
              NIAESB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {mainLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-5 py-2.5 text-[14px] font-bold tracking-wide transition-colors z-10 ${
                    active ? 'text-[#07562C]' : 'text-[#04331A]/70 hover:text-[#04331A]'
                  }`}
                >
                  {/* Hover Pill Background */}
                  {hoveredLink === link.name && !active && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-[#07562C]/5 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Active Route Pill */}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative px-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onMouseEnter={() => setHoveredLink('Quick Access')}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2.5 flex items-center gap-2 text-[14px] font-bold tracking-wide text-[#04331A]/70 hover:text-[#04331A] transition-colors z-10 focus:outline-none"
              >
                {hoveredLink === 'Quick Access' && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-[#07562C]/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                Quick Access
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: premiumEase }}
                  className={isDropdownOpen ? "text-[#10B981]" : "text-inherit"}
                >
                  <FiChevronDown size={16} strokeWidth={3} />
                </motion.div>
              </button>

              {/* Advanced Dropdown Panel */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(5px)" }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] w-[360px] bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(4,51,26,0.15)] border border-[#04331A]/5 p-3 overflow-hidden pointer-events-auto z-50"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {quickAccessLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          className="group relative flex items-start gap-4 p-3 rounded-2xl hover:bg-[#07562C] transition-colors duration-300 overflow-hidden"
                        >
                          <div className="relative z-10 w-12 h-12 rounded-xl bg-[#04331A]/5 text-[#07562C] flex items-center justify-center text-xl group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                            {link.icon}
                          </div>
                          <div className="relative z-10 pt-1">
                            <div className="text-[15px] font-bold text-[#04331A] mb-0.5 group-hover:text-white transition-colors duration-300 tracking-tight">
                              {link.name}
                            </div>
                            <div className="text-xs font-medium text-[#04331A]/50 group-hover:text-green-50/70 transition-colors duration-300">
                              {link.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3 z-50">
            <Link 
              to="/signin" 
              className="hidden lg:inline-flex relative items-center justify-center px-6 py-2.5 bg-[#04331A] text-white text-[13px] font-bold tracking-widest uppercase rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(4,51,26,0.5)] hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#07562C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Sign In
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-full bg-[#04331A]/5 flex items-center justify-center text-[#04331A] hover:bg-[#10B981]/10 hover:text-[#07562C] transition-colors focus:outline-none relative"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: premiumEase }}
              >
                {isOpen ? <FiX size={22} strokeWidth={2.5} /> : <FiMenu size={22} strokeWidth={2.5} />}
              </motion.div>
            </button>
          </div>
        </motion.div>
      </header>


      {/* PRO MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: premiumEase }}
            className="fixed inset-0 z-40 lg:hidden bg-[#fafafa]/95 backdrop-blur-3xl flex flex-col pt-32 pb-10 px-6 font-mono overflow-y-auto"
          >
            {/* Animated Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="flex flex-col gap-10 relative z-10 min-h-full">
              
              {/* Main Navigation Links */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black tracking-[0.3em] text-[#04331A]/40 uppercase mb-4 pl-4">Navigation</span>
                {mainLinks.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: premiumEase }}
                    >
                      <Link 
                        to={link.to} 
                        className={`flex items-center justify-between p-4 rounded-2xl transition-colors ${
                          active 
                            ? 'bg-[#07562C] text-white shadow-lg' 
                            : 'text-[#04331A] hover:bg-[#04331A]/5'
                        }`}
                      >
                        <span className="text-3xl font-black tracking-tight">{link.name}</span>
                        {active && (
                          <motion.div layoutId="mobile-active" className="w-2 h-2 rounded-full bg-[#10B981]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="h-px w-full bg-[#04331A]/10 my-2"></div>

              {/* Quick Access Grid */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-[0.3em] text-[#04331A]/40 uppercase mb-2 pl-4">Quick Links</span>
                <div className="grid grid-cols-2 gap-4">
                  {quickAccessLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5, ease: premiumEase }}
                    >
                      <Link 
                        to={link.to} 
                        className="flex flex-col gap-4 p-5 rounded-[1.5rem] bg-white border border-[#04331A]/5 shadow-sm hover:border-[#10B981]/30 hover:shadow-md transition-all active:scale-95"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#04331A]/5 text-[#07562C] flex items-center justify-center text-xl">
                          {link.icon}
                        </div>
                        <span className="text-[13px] font-bold text-[#04331A] tracking-tight">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA (Pushed to bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: premiumEase }}
                className="mt-auto pt-8"
              >
                <Link 
                  to="/signin" 
                  className="flex items-center justify-between w-full p-6 bg-[#04331A] rounded-[2rem] text-white group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="flex flex-col relative z-10">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#10B981] uppercase mb-1">Portal</span>
                    <span className="text-xl font-black">Sign In Securely</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
                    <FiArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;