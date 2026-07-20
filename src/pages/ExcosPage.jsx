import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUser, FiStar, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

// ==========================================
// IMAGE IMPORTS
// ==========================================

// Hero Group Image
import excoGroupImg from '../assets/executives/exco.jpg';

// Executives
import ogbonImg from '../assets/executives/ogbon.jpg';
import ezekielImg from '../assets/executives/olasope.jpg';
import odesanyaImg from '../assets/executives/odesanya.jpg';
import chibuzorImg from '../assets/executives/nwaire.jpg';
import oluwatobilobaImg from '../assets/executives/adedayo.jpg';
import mercyImg from '../assets/executives/itah.jpg';
import opeyemiImg from '../assets/executives/nejo.jpg';
import azeezatImg from '../assets/executives/madamidola.jpg';
import iyanuoluwaImg from '../assets/executives/akintola.jpg';
import joshuaImg from '../assets/executives/oladapo.jpg';

// Past Presidents
import mubarakImg from '../assets/presidents/mubarak.jpg';
import rhodaImg from '../assets/presidents/rhoda.jpg';
import temitopeImg from '../assets/presidents/temitope.jpg';
import samuelImg from '../assets/presidents/samuel.jpg';

// Class Representatives (HOCs)
import akintolaImg from '../assets/executives/akintola.jpg';
import gbengaImg from '../assets/hoc/gbenga.jpg';
import timilehinImg from '../assets/hoc/timilehin.jpg';


// ==========================================
// DATA ARRAYS
// ==========================================

const topExecutives = [
  { name: "Ogbon-Otan Matthew", nickname: "Ogbon", role: "President", image: ogbonImg, quote: "Leadership is action, not position." },
  { name: "Nwaire Chibuzor John", nickname: "Chibest", role: "Vice President", image: chibuzorImg, quote: "Empowering the next generation." },
];

const remainingExecutives = [
  { name: "Akintola Emmanuel Iyanuoluwa", nickname: "MOG", role: "General Secretary", image: iyanuoluwaImg },
  { name: "Itah Mercy Bisola", nickname: "Bisola", role: "Assistant Gen. Secretary", image: mercyImg },
  { name: "Madamidola Azeezat Amoke", nickname: "Hartinuke", role: "Financial Secretary", image: azeezatImg },
  { name: "Odesanya Fawaz Oreoluwa", nickname: "Fabulous", role: "Treasurer", image: odesanyaImg },
  { name: "Adedayo Oluwatobiloba", nickname: "Jare Savage", role: "Welfare Director", image: oluwatobilobaImg },
  { name: "Olasope Ezekiel", nickname: "Zeeksope", role: "Social Director", image: ezekielImg },
  { name: "Oladapo Joshua Ayomide", nickname: "Caychan", role: "Sport Secretary", image: joshuaImg },
  { name: "Nejo Opeyemi Emmanuel", nickname: "Opezy", role: "P.R.O 1", image: opeyemiImg },
];

const pastPresidents = [
  { name: "Comr. Yahaya Mubarak", year: "2025/2026", image: mubarakImg },
  { name: "Engr. Adesanya A. Rhoda", year: "2024/2025", image: rhodaImg },
  { name: "Engr. Ajewole M. Temitope", year: "2023/2024", image: temitopeImg },
  { name: "Engr. Oparinde A. Samuel", year: "2019/2020", image: samuelImg },
];

const hocs = [
  { level: "500L", name: "Taiwo Timilehin Olajolo", image: timilehinImg, status: "Active" },
  { level: "400L", name: "Gbenga Michael Daniel", image: gbengaImg, status: "Active" },
  { level: "300L", name: "Akintola", image: akintolaImg, status: "Active" },
  { level: "200L", name: "To Be Announced", image: null, status: "Pending" },
  { level: "100L", name: "Awaiting Election", image: null, status: "Pending" },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

// ==========================================
// CUSTOM COMPONENTS
// ==========================================

const BackgroundPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#07562C" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#07562C]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
  </div>
);

const SocialLinks = () => (
  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
    <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-colors">
      <FiLinkedin size={14} />
    </a>
    <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-colors">
      <FiTwitter size={14} />
    </a>
    <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#10B981] hover:text-white transition-colors">
      <FiMail size={14} />
    </a>
  </div>
);

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

const ExcosPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#10B981] selection:text-white relative pb-32">
      <BackgroundPattern />

      {/* 1. HERO SECTION WITH IMAGE & SOFT MOTION */}
      <div className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-24 mb-20">
        
        {/* Soft Motion Background Image */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${excoGroupImg})` }}
        />

        {/* Dynamic Green Gradients for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#07562C]/95 via-[#07562C]/80 to-[#10B981]/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-black/20"></div> {/* Contrast Booster */}
        
        {/* Bottom Fade to White */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-[0.15em] mb-8 shadow-sm"
          >
            <FiAward className="text-[#10B981] text-lg" />
            The Leadership Council
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-8 drop-shadow-2xl"
          >
            Architects of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-300 italic pr-2">
              Excellence.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-green-50/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Meet the visionary minds driving innovation, managing operations, and ensuring the continued success of NIAESB FUNAAB.
          </motion.p>
        </div>
      </div>

      {/* 2. TEAM ICONIC BREAKOUT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#10B981]"></div>
            <h2 className="text-sm font-black tracking-[0.3em] text-[#10B981] uppercase">
              The Administration
            </h2>
            <div className="h-[2px] w-12 bg-[#10B981]"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-8">
            Meet <span className="text-[#07562C] italic">Team Iconic.</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
            A collective of driven student engineers united by a singular purpose: to elevate the standard, foster radical innovation, and leave an indelible mark on the NIAESB legacy.
          </p>
        </motion.div>
      </div>

      {/* 3. PRESIDENTIAL SPOTLIGHT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 mb-32">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {topExecutives.map((exco, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#10B981]/40 transition-all duration-500 hover:-translate-y-2 flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="md:w-2/5 aspect-square md:aspect-auto relative bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                   <FiUser className="text-6xl opacity-30" />
                </div>
                <img 
                  src={exco.image} 
                  alt={exco.name} 
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  onError={(e) => e.target.style.opacity = 0}
                />
              </div>

              {/* Content Side: NAME -> NICKNAME -> POSITION */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative bg-white z-20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-2">
                  {exco.name}
                </h2>
                
                <h3 className="text-2xl font-bold text-[#10B981] uppercase tracking-wide mb-5">
                  {exco.nickname}
                </h3>

                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#07562C] text-white rounded-full text-xs font-black tracking-widest uppercase shadow-md">
                    {exco.role}
                  </span>
                </div>
                
                <p className="text-gray-500 italic font-medium border-l-4 border-green-200 pl-4 mb-6">
                  "{exco.quote}"
                </p>
                <SocialLinks />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 4. EXECUTIVES GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 mb-40">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <h3 className="text-gray-400 font-black uppercase tracking-widest text-sm">The Executive Cabinet</h3>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {remainingExecutives.map((exco, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-500 hover:-translate-y-3 relative flex flex-col"
            >
              {/* Image Header */}
              <div className="h-72 relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                   <FiUser className="text-6xl opacity-30" />
                </div>
                <img 
                  src={exco.image} 
                  alt={exco.name} 
                  className="absolute inset-0 w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => e.target.style.opacity = 0}
                />
              </div>
              
              {/* Content Body: NAME -> NICKNAME -> POSITION */}
              <div className="p-8 bg-white flex-grow flex flex-col justify-between relative z-20">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                    {exco.name}
                  </h3>
                  
                  <h4 className="text-lg font-bold text-[#10B981] uppercase tracking-wide mb-4">
                    {exco.nickname}
                  </h4>

                  <span className="inline-block px-3 py-1 bg-green-50/80 text-[#07562C] border border-green-100 rounded-full text-xs font-black tracking-widest uppercase">
                    {exco.role}
                  </span>
                </div>
                
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 5. HALL OF FAME (Past Presidents) */}
      <div className="bg-[#07562C] pt-32 pb-40 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#10B981]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-100 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <FiStar className="text-[#10B981]" /> Legacy
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Hall of <span className="text-[#10B981]">Fame.</span>
            </h2>
            <p className="text-green-50/80 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
              Honoring the visionary leaders whose dedication and sacrifice built the foundation of our prestigious branch.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {pastPresidents.map((president, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-center hover:bg-white/10 transition-all duration-500 group overflow-hidden"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/0 to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-[#10B981]/50 group-hover:border-[#10B981] mb-8 relative shadow-2xl transition-colors duration-500">
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
                     <FiUser className="text-5xl" />
                   </div>
                  <img 
                    src={president.image} 
                    alt={president.name} 
                    className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => e.target.style.opacity = 0}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{president.name}</h3>
                <span className="inline-block bg-[#10B981]/20 text-[#10B981] px-4 py-1.5 rounded-full font-bold text-sm tracking-wider">
                  {president.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 6. CLASS REPRESENTATIVES (HOCs) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#10B981] font-black uppercase tracking-widest text-sm mb-4">
                <FiBookOpen size={18} /> Academic Pillars
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Class <span className="text-[#07562C]">Representatives.</span>
              </h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                The vital communication bridge linking the student body to the academic administration across all university levels.
              </p>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
          >
            {hocs.map((hoc, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="bg-white rounded-[2rem] p-6 border-2 border-gray-50 hover:border-[#10B981]/30 transition-all duration-300 group text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:shadow-[#10B981]/5"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-gray-50 group-hover:border-[#10B981]/20 shadow-md relative bg-gray-100 transition-colors">
                  {hoc.status === "Pending" ? (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                      <FiUser className="text-4xl" />
                    </div>
                  ) : (
                    <img 
                      src={hoc.image} 
                      alt={hoc.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gray-900 text-white text-xs font-black mb-4 tracking-widest">
                  {hoc.level}
                </span>
                <h4 className={`text-lg font-bold leading-tight ${hoc.status === 'Pending' ? 'text-gray-400 italic' : 'text-gray-900 group-hover:text-[#07562C] transition-colors'}`}>
                  {hoc.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default ExcosPage;