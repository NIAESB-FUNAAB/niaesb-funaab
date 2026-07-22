import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiArrowLeft, FiDatabase, FiFileText } from 'react-icons/fi';
import { curriculumData } from '../../data/curriculumData';

const LevelDetails = () => {
  const { levelId } = useParams(); // Extracts '100', '200', '300', '400', or '500' from URL
  const [activeSemester, setActiveSemester] = useState('first');

  // Fallback to 100 level if an invalid param is passed
  const levelInfo = curriculumData[levelId] || curriculumData["100"]; 
  const currentCourses = levelInfo.semesters[activeSemester];

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 pt-36 md:pt-40 font-mono selection:bg-[#10B981] selection:text-white relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04331A05_1px,transparent_1px),linear-gradient(to_bottom,#04331A05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-12">
          {/* Back Button / Breadcrumb */}
          <Link to="/library" className="inline-flex items-center gap-2 text-[#04331A]/60 hover:text-[#10B981] transition-colors font-bold text-sm mb-8 group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Library Hub
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-[#04331A]/5 border border-[#04331A]/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[#04331A] text-[10px] font-black uppercase tracking-[0.2em]">
                  {levelInfo.levelTitle} Curriculum
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#04331A] tracking-tighter leading-tight">
                {levelInfo.levelTitle} Courses <br />
                <span className="text-[#07562C] italic">& Resources.</span>
              </h1>
            </div>

            {/* Semester Tabs */}
            <div className="flex bg-[#04331A]/5 p-1 rounded-2xl border border-[#04331A]/10 w-fit">
              <button 
                onClick={() => setActiveSemester('first')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeSemester === 'first' ? 'bg-white text-[#04331A] shadow-sm' : 'text-[#04331A]/40 hover:text-[#04331A]'}`}
              >
                First Semester
              </button>
              <button 
                onClick={() => setActiveSemester('second')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeSemester === 'second' ? 'bg-white text-[#04331A] shadow-sm' : 'text-[#04331A]/40 hover:text-[#04331A]'}`}
              >
                Second Semester
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- COURSE GRID --- */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSemester}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {currentCourses.map((course) => (
              <motion.div 
                key={course.code}
                variants={fadeUp}
                className="group relative bg-white border border-[#04331A]/10 rounded-[2rem] p-6 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 transition-all duration-500 flex flex-col"
              >
                {/* Subtle Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="bg-[#04331A] text-white px-3 py-1.5 rounded-lg text-xs font-black tracking-wider shadow-sm">
                    {course.code}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#04331A]/40 text-xs font-bold">
                    <FiBookOpen />
                    {course.units} {course.units > 1 ? 'Units' : 'Unit'}
                  </div>
                </div>

                <h3 className="relative z-10 text-xl font-black text-[#04331A] leading-snug mb-2 group-hover:text-[#10B981] transition-colors">
                  {course.title}
                </h3>
                
                <span className="relative z-10 text-[#04331A]/50 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-1">
                  {course.type === 'Practical' ? <FiDatabase size={12}/> : <FiFileText size={12}/>}
                  {course.type}
                </span>

                <div className="relative z-10 mt-auto pt-4 border-t border-[#04331A]/5 flex items-center justify-between">
                  <span className="text-[#04331A]/40 text-xs font-medium">
                    Folder Ready
                  </span>
                  {/* Converted to a clickable tag using the course link */}
                  <a 
                    href={course.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10B981] text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    View Materials <FiArrowLeft className="rotate-180" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LevelDetails;
