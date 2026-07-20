import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'The Executives', path: '/excos' },
      { name: 'Blog & News', path: '/blog' },
    ],
    resources: [
      { name: 'E-Library', path: '/library' },
      { name: 'Lecturers Directory', path: '/lecturers' },
      { name: 'Pay Dues', path: '/pay-dues' },
      { name: 'Academic Calendar', path: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Constitution', path: '#' },
    ]
  };

  return (
    <footer className="relative bg-[#022412] text-white overflow-hidden pt-24 pb-8 border-t border-[#10B981]/20">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none flex items-center justify-center overflow-hidden">
        <h1 className="text-[15rem] md:text-[25rem] font-black text-white leading-none tracking-tighter">
          NIAESB
        </h1>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#07562C]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Top Section: CTA & Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-white/10 pb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Cultivating the <span className="text-[#10B981] italic">Future</span> of Engineering.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-md">
              The Nigerian Institution of Agricultural Engineering Student Body. Empowering technical excellence and driving innovation in bioresources.
            </p>
          </div>
          
          <div className="w-full lg:w-auto">
            <div className="bg-white/5 border border-white/10 p-2 rounded-full flex items-center backdrop-blur-md max-w-md w-full">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter..." 
                className="bg-transparent border-none outline-none text-white px-4 w-full placeholder-gray-500 text-sm"
              />
              <button className="bg-[#10B981] hover:bg-[#0ea5e9] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 flex-shrink-0 group">
                Subscribe 
                <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Contact Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#10B981] font-black uppercase tracking-widest text-xs">Reach Out</h3>
            <div className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <a href="mailto:info@niaesbfunaab.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#10B981]/20 group-hover:text-[#10B981] transition-all">
                  <FiMail size={16} />
                </div>
                hello@niaesbfunaab.com
              </a>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#10B981]/20 group-hover:text-[#10B981] transition-all flex-shrink-0">
                  <FiMapPin size={16} />
                </div>
                <span className="leading-relaxed">
                  Federal University of Agriculture, Abeokuta (FUNAAB)<br />
                  Alabata Road, Ogun State.
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#10B981] font-black uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#10B981] font-black uppercase tracking-widest text-xs">Resources</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#10B981] font-black uppercase tracking-widest text-xs">Legal</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-[#10B981] group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            &copy; {currentYear} NIAESB. All rights reserved. Built for the future.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <FiTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <FiLinkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <FiInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <FiGithub size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;