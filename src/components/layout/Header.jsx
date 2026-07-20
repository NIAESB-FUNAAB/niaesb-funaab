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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });
  useEffect(() => {
    setIsOpen(false);
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

  return (
    <>
      {/*DESKTOP & FLOATING HEADER*/}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto w-full max-w-6xl flex justify-between items-center transition-all duration-500 ease-in-out rounded-full border shadow-2xl ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-xl border-white/50 py-2 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' 
              : 'bg-white/95 backdrop-blur-md border-white/20 py-3 px-6 shadow-[0_20px_40px_-15px_rgba(7,86,44,0.15)]'
          }`}
        >
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group relative z-20">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden flex items-center justify-center border-2 border-green-50 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="NIAESB Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-xl tracking-[0.1em] text-[#07562C] group-hover:text-[#10B981] transition-colors duration-300">
              NIAESB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-[15px] font-bold text-gray-700 hover:text-[#07562C] transition-colors z-10"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-green-50/80 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative px-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onMouseEnter={() => setHoveredLink('Quick Access')}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 flex items-center gap-2 text-[15px] font-bold text-gray-700 hover:text-[#07562C] transition-colors z-10 focus:outline-none"
              >
                {hoveredLink === 'Quick Access' && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-green-50/80 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                Quick Access
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[#10B981]"
                >
                  <FiChevronDown size={18} />
                </motion.div>
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[340px] bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-3 overflow-hidden pointer-events-auto"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {quickAccessLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-green-50/80 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#07562C]/5 text-[#10B981] flex items-center justify-center text-lg group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
                            {link.icon}
                          </div>
                          <div>
                            <div className="text-sm font-black text-gray-900 mb-0.5 group-hover:text-[#07562C] transition-colors">
                              {link.name}
                            </div>
                            <div className="text-xs font-medium text-gray-500">
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
          <div className="flex items-center gap-3 z-20">
            <Link 
              to="/signin" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#07562C] text-white text-[14px] font-black tracking-wide rounded-full shadow-lg shadow-green-900/20 hover:bg-[#10B981] hover:shadow-[#10B981]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign In
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-[#07562C] hover:bg-green-50 transition-colors focus:outline-none"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </motion.div>
      </header>


      {/*MOBILE FULL-SCREEN MENU*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl flex flex-col justify-center"
          >
            <div className="px-8 flex flex-col gap-6">
              
              {/* Main Links */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-black tracking-[0.2em] text-[#10B981] uppercase mb-2">Menu</span>
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link 
                      to={link.to} 
                      className="text-4xl font-black text-gray-900 hover:text-[#07562C] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="h-px w-full bg-gray-200 my-4"></div>

              {/* Quick Access */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-black tracking-[0.2em] text-[#10B981] uppercase mb-2">Quick Access</span>
                <div className="grid grid-cols-2 gap-4">
                  {quickAccessLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                    >
                      <Link 
                        to={link.to} 
                        className="flex flex-col gap-3 p-4 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#10B981]/30 transition-colors"
                      >
                        <div className="text-[#10B981] text-2xl">
                          {link.icon}
                        </div>
                        <span className="text-sm font-black text-gray-900">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8"
              >
                <Link 
                  to="/signin" 
                  className="flex items-center justify-between w-full p-5 bg-[#07562C] rounded-2xl text-white font-black group"
                >
                  <span className="text-lg">Sign In to Portal</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#10B981] transition-colors">
                    <FiArrowRight />
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