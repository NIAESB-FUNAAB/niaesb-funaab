import SEO from '../components/SEO';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMail, FiBookOpen, FiAward, FiStar } from 'react-icons/fi';

// --- LOCAL IMAGE IMPORTS ---
import adeosunImg from '../assets/lecturers/adeosun.jpg';
import dairoImg from '../assets/lecturers/dairo.jpg';
import olayanjuImg from '../assets/lecturers/olayanju.jpg';
import aderinlewoImg from '../assets/lecturers/aderinlewo.jpg';
import adewumiImg from '../assets/lecturers/adewumi.jpg';
import sobowaleImg from '../assets/lecturers/sobowale.jpg';
import olaImg from '../assets/lecturers/ola.jpg';
import dadaImg from '../assets/lecturers/dada.jpg';
import omotainseImg from '../assets/lecturers/omotainse.jpg';
import adepojuImg from '../assets/lecturers/adepoju.jpg';

const LecturersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facultyMembers = [
    // HOD is now first with a special flag
    { 
      name: "Prof. DADA O. O. Pius", 
      title: "Head of Department", 
      specialty: "Water & Ecological Resources Eng.", 
      img: dadaImg, 
      email: "dada@funaab.edu.ng",
      isHOD: true
    },
    { name: "Prof. ADEOSUN O. Johnson", title: "Professor", specialty: "Environmental Resources Eng.", img: adeosunImg, email: "adeosun@funaab.edu.ng" },
    { name: "Prof. DAIRO O. Usman", title: "Professor", specialty: "Bio-Resources & Food Process Eng.", img: dairoImg, email: "dairo@funaab.edu.ng" },
    { name: "Prof. OLAYANJU A. Tajudeen", title: "Professor", specialty: "Bio-Resources & Food Process Eng.", img: olayanjuImg, email: "olayanju@funaab.edu.ng" },
    { name: "Prof. ADERINLEWO A. Ayobami", title: "Professor", specialty: "Agricultural & Bioresources Eng.", img: aderinlewoImg, email: "aderinlewo@funaab.edu.ng" },
    { name: "Prof. ADEWUMI B. Adewale", title: "Professor", specialty: "Agricultural & Bioresources Eng.", img: adewumiImg, email: "adewumi@funaab.edu.ng" },
    { name: "Prof. SOBOWALE Adeyinka", title: "Professor", specialty: "Water & Ecological Resources Eng.", img: sobowaleImg, email: "sobowale@funaab.edu.ng" },
    { name: "Prof. OLA O. Ibukun", title: "Professor", specialty: "Power & Machinery Eng.", img: olaImg, email: "ola@funaab.edu.ng" },
    { name: "Dr. OMOTAINSE O. Peter", title: "Doctor", specialty: "Agricultural & Rural Structures Eng.", img: omotainseImg, email: "omotainse@funaab.edu.ng" },
    { name: "Dr. ADEPOJU O. Victor", title: "Doctor", specialty: "Power & Machinery Eng.", img: adepojuImg, email: "adepoju@funaab.edu.ng" }
  ];

  // Filter logic
  const filteredFaculty = facultyMembers.filter(faculty => 
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customEase = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 pt-[12rem] md:pt-[14rem] relative overflow-hidden font-mono selection:bg-[#10B981] selection:text-white">
      
      {/* PREMIUM ENGINEERING BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04331A05_1px,transparent_1px),linear-gradient(to_bottom,#04331A05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#07562C]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: customEase }}
            className="inline-flex items-center gap-2 mb-6 border border-[#04331A]/10 bg-white/50 backdrop-blur-sm shadow-sm px-5 py-2 rounded-full"
          >
            <FiAward className="text-[#10B981]" size={16} />
            <p className="text-[#04331A] font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              Dept. of Agricultural & Bioresources
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: customEase, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-[#04331A] tracking-tighter leading-[1.05] mb-6"
          >
            The Minds Behind <br className="hidden sm:block" />
            <span>
              The Engineering
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: customEase, delay: 0.2 }}
            className="text-base md:text-lg text-[#04331A]/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Meet the distinguished professors and doctors driving innovation, research, and academic excellence at FUNAAB.
          </motion.p>

          {/* --- SEARCH BAR --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: customEase, delay: 0.3 }}
            className="w-full max-w-xl relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <FiSearch className="text-[#04331A]/40 group-focus-within:text-[#10B981] transition-colors duration-300" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#04331A]/10 rounded-2xl py-4 pl-14 pr-6 text-[#04331A] placeholder-[#04331A]/30 font-medium outline-none focus:border-[#10B981]/50 focus:ring-4 focus:ring-[#10B981]/10 transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(4,51,26,0.05)]"
            />
          </motion.div>
        </div>

        {/* --- LECTURERS GRID --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredFaculty.map((faculty) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: customEase }}
                key={faculty.name} 
                className={`group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-[#10B981]/15 hover:-translate-y-2
                  ${faculty.isHOD ? 'border-2 border-[#10B981]/50 shadow-[#10B981]/10 md:col-span-2 xl:col-span-1' : 'border border-[#04331A]/10 hover:border-[#10B981]/30'}
                `}
              >
                
{/* IMAGE CONTAINER */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#04331A]/5">
                  
                  {/* FIXED: Full color on mobile (grayscale-0), Grayscale on Desktop (lg:grayscale) until hovered */}
                  <img 
                    src={faculty.img} 
                    alt={faculty.name} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=f0fdf4&color=04331A&size=512`;
                    }}
                    className="w-full h-full object-cover object-top grayscale-0 lg:grayscale group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  
                  {/* Title Badge Top Right */}
                  <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm z-10 border flex items-center gap-1.5
                    ${faculty.isHOD ? 'bg-[#04331A] text-[#10B981] border-[#10B981]/30' : 'bg-white/90 text-[#04331A] border-white/50'}
                  `}>
                    {faculty.isHOD && <FiStar size={12} />}
                    {faculty.title}
                  </div>

                  {/* DESKTOP Hover Overlay Actions (Hidden on mobile) */}
                  <div className="hidden lg:flex absolute inset-0 bg-gradient-to-t from-[#04331A]/90 via-[#04331A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-6">
                    <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex gap-3">
                      <a href={`mailto:${faculty.email}`} className="flex-1 bg-[#10B981] text-[#04331A] py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-white transition-colors">
                        <FiMail /> Email
                      </a>
                      <button className="flex-1 bg-white/20 backdrop-blur-sm text-white border border-white/30 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-white/30 transition-colors">
                        <FiBookOpen /> Profile
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* TEXT CONTENT */}
                <div className="p-6 flex flex-col flex-grow bg-white relative z-20">
                  <h3 className="text-xl font-black text-[#04331A] tracking-tight leading-tight mb-3 group-hover:text-[#07562C] transition-colors">
                    {faculty.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-[#04331A]/5">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold leading-relaxed border transition-colors
                      ${faculty.isHOD ? 'bg-[#10B981]/10 text-[#07562C] border-[#10B981]/40' : 'bg-green-50 text-[#07562C] border-[#10B981]/20 group-hover:border-[#10B981]/40'}
                    `}>
                      {faculty.specialty}
                    </span>
                  </div>

                  {/* MOBILE Actions (Hidden on Desktop) */}
                  <div className="flex lg:hidden gap-3 mt-5 pt-5 border-t border-[#04331A]/5">
                    <a href={`mailto:${faculty.email}`} className="flex-1 bg-[#10B981]/10 text-[#07562C] py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-xs hover:bg-[#10B981] hover:text-[#04331A] transition-colors border border-[#10B981]/20">
                      <FiMail size={14} /> Email
                    </a>
                    <button className="flex-1 bg-[#04331A]/5 text-[#04331A] py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-xs hover:bg-[#04331A] hover:text-white transition-colors">
                      <FiBookOpen size={14} /> Profile
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State for Search */}
        {filteredFaculty.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-[#04331A]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiSearch className="text-[#04331A]/30" size={32} />
            </div>
            <h3 className="text-2xl font-black text-[#04331A] mb-2">No lecturers found</h3>
            <p className="text-[#04331A]/60 font-medium">Try adjusting your search terms.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default LecturersPage;