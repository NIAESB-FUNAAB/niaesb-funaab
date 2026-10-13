import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowUpRight, FiMail, FiMapPin, 
  FiLinkedin, FiTwitter, FiInstagram, FiGithub,
  FiCode, FiX, FiExternalLink
} from 'react-icons/fi';

const Footer = () => {
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About NIAESB', path: '/about' },
      { name: 'The Executives', path: '/excos' },
      { name: 'Blog & News', path: '/blog' },
      { name: 'Career & Opportunities', path: '/career' },
    ],
    resources: [
      { name: 'E-Library', path: '/library' },
      { name: 'Lecturers Directory', path: '/lecturers' },
      { name: 'Pay Dues', path: '/pay-dues' },
      { name: 'Academic Calendar', path: '/calendar' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Branch Constitution', path: '/constitution' },
    ]
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  };

  // Developer Profile Modal
  const DeveloperModal = () => (
    <AnimatePresence>
      {isDevModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#04331A]/80 backdrop-blur-md"
          onClick={() => setIsDevModalOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#0A1A12] rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full relative shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] border border-[#10B981]/30 overflow-hidden text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Ambient Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <button 
              onClick={() => setIsDevModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors z-10"
            >
              <FiX size={18} />
            </button>

            <div className="w-20 h-20 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10B981]/10 relative z-10">
              <FiCode className="text-[#10B981]" size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-1 relative z-10">Timilehin Olajolo</h3>
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 relative z-10">Frontend Engineer</p>
            <p className="text-white/60 font-medium text-sm leading-relaxed mb-8 relative z-10">
              System architecture, UI/UX design, and core development for the NIAESB FUNAAB platform.
            </p>
            
            <div className="flex flex-col gap-3 relative z-10">
              <a 
                href="https://linkedin.com/in/timilehinolajolo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-[#10B981] hover:text-[#04331A] hover:border-[#10B981] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FiLinkedin size={18} /> LinkedIn
                </div>
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://github.com/timilehinolajolo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-[#10B981] hover:text-[#04331A] hover:border-[#10B981] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FiGithub size={18} /> GitHub
                </div>
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://x.com/_timilehintaiwo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-[#10B981] hover:text-[#04331A] hover:border-[#10B981] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FiTwitter size={18} /> Twitter / X
                </div>
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <DeveloperModal />
      <footer className="relative bg-[#04331A] text-white overflow-hidden pt-24 pb-8 font-mono selection:bg-[#10B981] selection:text-white border-t border-[#07562C]">
        
        {/* 1. Premium Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

        {/* 2. Architectural Watermark */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none flex items-center justify-center overflow-hidden z-0">
          <h1 className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black text-white leading-none tracking-tighter whitespace-nowrap">
            NIAESB
          </h1>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#07562C]/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Top Section: CTA & Brand */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20 border-b border-white/10 pb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                NIAESB <span className="text-[#10B981]">FUNAAB</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-md">
                The official student body of the Department of Agricultural and Bio-Resources Engineering, Federal University of Agriculture, Abeokuta.
              </p>
            </motion.div>
            
            {/* Newsletter Input */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-auto"
            >
              <div className="group relative bg-[#07562C]/30 border border-white/10 p-2 rounded-2xl flex items-center backdrop-blur-md max-w-md w-full focus-within:border-[#10B981]/50 focus-within:bg-[#07562C]/50 transition-all duration-300 shadow-inner">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="bg-transparent border-none outline-none text-white px-4 w-full placeholder-white/40 text-sm font-medium tracking-wide"
                />
                <button className="bg-[#10B981] hover:bg-white text-[#04331A] px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 flex-shrink-0 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  Subscribe 
                  <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Contact Col */}
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={columnVariants}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              <h3 className="text-[#10B981] font-bold uppercase tracking-[0.1em] text-sm">Contact Us</h3>
              <div className="flex flex-col gap-5 text-white/70 text-sm font-medium">
                <a href="mailto:NIAESBfunaab.25@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#10B981]/20 group-hover:border-[#10B981]/30 group-hover:text-[#10B981] transition-all duration-300">
                    <FiMail size={18} />
                  </div>
                  <span className="tracking-wide">NIAESBfunaab.25@gmail.com</span>
                </a>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#10B981]/20 group-hover:border-[#10B981]/30 group-hover:text-[#10B981] transition-all duration-300 flex-shrink-0 mt-1">
                    <FiMapPin size={18} />
                  </div>
                  <span className="leading-relaxed tracking-wide">
                    Federal University of Agriculture,<br />
                    Abeokuta (FUNAAB)<br />
                    <span className="text-white/50 text-xs mt-1 block">Alabata Road, Ogun State.</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Col */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={columnVariants} className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
              <h3 className="text-[#10B981] font-bold uppercase tracking-[0.1em] text-sm">Directory</h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-3 group w-fit">
                      <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-4 transition-all duration-300 ease-out"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Col */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={columnVariants} className="lg:col-span-3 flex flex-col gap-6">
              <h3 className="text-[#10B981] font-bold uppercase tracking-[0.1em] text-sm">Resources</h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-3 group w-fit">
                      <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-4 transition-all duration-300 ease-out"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Col */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={columnVariants} className="lg:col-span-2 flex flex-col gap-6">
              <h3 className="text-[#10B981] font-bold uppercase tracking-[0.1em] text-sm">Legal</h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-3 group w-fit">
                      <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-4 transition-all duration-300 ease-out"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright, Developer Credits & Socials */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            
            {/* Copyright & Dev Trigger */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <p className="text-white/50 text-xs font-medium tracking-wide">
                &copy; {currentYear} NIAESB FUNAAB. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></div>
              <button 
                onClick={() => setIsDevModalOpen(true)} 
                className="flex items-center gap-1.5 text-white/50 hover:text-[#10B981] transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest group"
              >
                <FiCode className="group-hover:rotate-12 transition-transform" /> 
                Built by <span>the Developer</span>
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FiTwitter, FiLinkedin, FiInstagram, FiGithub].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:bg-[#10B981] hover:border-[#10B981] hover:text-[#04331A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]"
                >
                  <Icon size={16} strokeWidth={2.5} />
                </a>
              ))}
            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;