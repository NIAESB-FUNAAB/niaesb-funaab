import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/logo.jpg'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Updated to use 'to' for React Router paths
  const quickAccessLinks = [
    { name: 'Blog', to: '/blog' },
    { name: 'E-Library', to: '/library' },
    { name: 'Lecturers', to: '/lecturers' },
    { name: 'Pay Dues', to: '/pay-dues' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07562C] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* Logo & Brand Section - Wrapped in a Link to go Home */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white shadow-md">
              <img src={logo} alt="NIAESB Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-green-300 drop-shadow-sm">
              NIAESB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="hover:text-green-300 text-[15px] font-semibold transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-300 text-[15px] font-semibold transition-colors duration-300">
              About
            </Link>
            
            {/* Animated Dropdown Menu for Quick Access */}
            <div 
              className="relative flex items-center h-full cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-green-300 text-[15px] font-semibold transition-colors duration-300 focus:outline-none">
                Quick Access
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <FiChevronDown size={16} />
                </motion.div>
              </button>

              {/* Desktop Dropdown Panel */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[60px] w-48 bg-white rounded-lg shadow-2xl py-2 overflow-hidden border border-gray-100"
                  >
                    {quickAccessLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.to}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#07562C] hover:text-white text-sm font-semibold transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section: Sign In Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Sign In Button */}
            <Link 
              to="/signin" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-white text-[#07562C] text-[15px] font-bold rounded-md shadow-sm hover:bg-green-50 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-green-300 focus:outline-none p-2"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#07562C] border-t border-green-800 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-sm font-semibold text-white hover:bg-green-800 transition-colors">
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-sm font-semibold text-white hover:bg-green-800 transition-colors">
                About
              </Link>
              
              {/* Mobile Quick Access Sub-menu */}
              <div className="px-3 py-2">
                <div className="text-xs font-bold text-green-300 uppercase tracking-wider mb-2">
                  Quick Access
                </div>
                <div className="pl-4 border-l-2 border-green-700 space-y-1">
                  {quickAccessLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-semibold text-gray-200 hover:text-white hover:bg-green-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Sign In Button */}
              <div className="pt-4 pb-2">
                <Link 
                  to="/signin" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-white text-[#07562C] text-sm font-bold rounded-md shadow-sm hover:bg-green-50 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;