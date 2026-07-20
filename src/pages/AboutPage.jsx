import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiEye, FiTarget, FiAward, FiBookOpen, 
  FiActivity, FiUsers, FiCalendar, FiClock, 
  FiArrowRight, FiCheckCircle, FiShield, 
  FiCpu, FiGlobe, FiTrendingUp 
} from 'react-icons/fi';

// ==========================================
// IMAGE IMPORTS (Local Assets)
// ==========================================
import buildingBg from '../assets/about/building.jpg';
import upskillImg from '../assets/about/upskill.jpg';
import footballImg from '../assets/about/football.jpg';
import handsonImg from '../assets/about/handson.jpg';

// Executive Avatars for the CTA section
import ogbonImg from '../assets/executives/ogbon.jpg';
import chibuzorImg from '../assets/executives/nwaire.jpg';
import oluwatobilobaImg from '../assets/executives/adedayo.jpg';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // ==========================================
  // PAGE DATA
  // ==========================================
  
  const figures = [
    { label: "Active Members", value: "250+", icon: <FiUsers /> },
    { label: "Executive Leaders", value: "15+", icon: <FiAward /> },
    { label: "Annual Events", value: "10+", icon: <FiCalendar /> },
    { label: "Years of Impact", value: "20+", icon: <FiClock /> },
  ];

  const coreValues = [
    { title: "Innovation", desc: "Pushing the boundaries of agricultural technology.", icon: <FiCpu /> },
    { title: "Integrity", desc: "Upholding the highest ethical standards in engineering.", icon: <FiShield /> },
    { title: "Sustainability", desc: "Designing solutions for a greener, resilient future.", icon: <FiGlobe /> },
    { title: "Excellence", desc: "Relentless pursuit of academic and practical mastery.", icon: <FiTrendingUp /> },
  ];

  const milestones = [
    { year: "2004", title: "The Foundation", desc: "NIAESB FUNAAB was established to unify aspiring agricultural engineers." },
    { year: "2015", title: "National Recognition", desc: "Awarded the most active collegiate branch in the southwest region." },
    { year: "2023", title: "Tech Integration", desc: "Launched comprehensive hands-on bootcamps for precision agriculture and software." },
    { year: "2026", title: "The Next Era", desc: "Pioneering AI and IoT solutions in student-led bio-resources projects." },
  ];

  const impactStats = [
    { label: "Academic Excellence", percentage: 95, icon: <FiBookOpen /> },
    { label: "Practical Exposure", percentage: 88, icon: <FiActivity /> },
    { label: "Leadership Growth", percentage: 92, icon: <FiAward /> },
    { label: "Industry Readiness", percentage: 85, icon: <FiTarget /> },
  ];

  // ==========================================
  // ANIMATION VARIANTS
  // ==========================================
  
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 overflow-hidden font-sans selection:bg-[#10B981] selection:text-white">
      
      {/* ==========================================
          1. IMMERSIVE HERO SECTION
          ========================================== */}
      <div className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, backgroundImage: `url(${buildingBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 origin-bottom"
        />
        
        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07562C]/90 via-[#07562C]/70 to-[#FAFAFA]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_150%)] opacity-60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-50 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Established Legacy
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white leading-[1.05] mb-8 drop-shadow-2xl"
          >
            Pioneering the future <br className="hidden md:block" />
            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-300 italic pr-4">Engineering.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="text-lg md:text-2xl text-green-50/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            The foremost student body representing Agricultural and Bio-resources Engineering professionals at FUNAAB.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
        
        {/* ==========================================
            2. FLOATING GLASS STATS
            ========================================== */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 -mt-32 mb-40 relative z-30"
        >
          {figures.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              className="bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(7,86,44,0.15)] border border-white/50 hover:-translate-y-2 hover:bg-white transition-all duration-500 group text-center"
            >
              <div className="w-14 h-14 mx-auto bg-green-50/80 text-[#10B981] rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-500 shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ==========================================
            3. DYNAMIC WHO WE ARE (Broken Grid)
            ========================================== */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-40">
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#10B981]"></div>
              <h2 className="text-sm font-black tracking-[0.2em] text-[#10B981] uppercase">Identity</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.05] tracking-tighter">
              Building the <br /> <span className="text-[#07562C] italic">Next Gen.</span>
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium mb-6">
              The Nigerian Institution of Agricultural Engineers Students' Branch (NIAESB), FUNAAB, is the premier hub for future engineering leaders.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              We are deeply committed to fostering academic excellence, high-level professional development, and radical technical innovation among our peers.
            </p>
          </motion.div>

          <motion.div 
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 relative"
          >
            {/* Background Abstract */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10B981]/5 rounded-full blur-[100px] -z-10"></div>
            
            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              <div className="overflow-hidden rounded-[2.5rem] shadow-xl mt-12 group">
                <img src={upskillImg} alt="Upskill Session" className="w-full h-64 md:h-[22rem] object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="overflow-hidden rounded-[2rem] shadow-lg group">
                  <img src={footballImg} alt="Football Event" className="w-full h-40 md:h-44 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-lg group">
                  <img src={handsonImg} alt="Hands-on Engineering" className="w-full h-40 md:h-44 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            4. BENTO BOX: VISION & MISSION
            ========================================== */}
        <div className="grid md:grid-cols-2 gap-6 mb-40">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative bg-[#07562C] p-10 md:p-14 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-[#10B981]/40 transition-colors duration-700"></div>
            
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#10B981] text-3xl mb-8 border border-white/10 shadow-inner">
              <FiEye />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Our Vision</h3>
            <p className="text-green-50/80 text-lg leading-relaxed font-light">
              To be a leading student engineering association that inspires innovation, promotes professional excellence, and develops future leaders in Agricultural and Bio-resources Engineering.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px", delay: 0.2 }}
            className="group relative bg-white border border-gray-100 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-[#10B981]/30 transition-colors duration-500"
          >
            <div className="w-16 h-16 bg-green-50 text-[#10B981] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300 shadow-sm">
              <FiTarget />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Our Mission</h3>
            <ul className="space-y-5">
              {['Learning & Collaboration', 'Leadership Development', 'Practical Engineering Exposure', 'Sustainable Ag-Tech Advancement'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-600 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="text-[#10B981] text-sm" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ==========================================
            5. CORE VALUES GRID 
            ========================================== */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-[0.2em] text-[#10B981] uppercase mb-4">The Standard</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Our Core Values</h3>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#10B981]/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-[#10B981] text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 origin-left">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ==========================================
            6. LEGACY TIMELINE 
            ========================================== */}
        <div className="mb-40">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="text-center mb-20 relative z-10">
              <h2 className="text-sm font-black tracking-[0.2em] text-[#10B981] uppercase mb-4">Our History</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">A Legacy of Impact</h3>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {milestones.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right md:pr-16'}`}>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#10B981] rounded-full flex items-center justify-center font-black text-[#07562C] text-sm shadow-lg z-10">
                      {item.year}
                    </div>
                    
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            7. IMPACT BARS 
            ========================================== */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-900 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden mb-40 shadow-2xl flex flex-col lg:flex-row gap-16 items-center"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-sm font-black tracking-[0.2em] text-[#10B981] uppercase mb-4">Metrics</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Measurable <br />
              <span className="text-[#10B981] italic">Excellence.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
              NIAESB FUNAAB contributes significantly to student development, creating distinct opportunities for skill acquisition, peer-to-peer mentorship, and technical readiness.
            </p>
            <button className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-md hover:-translate-y-1">
              Download Annual Report
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 w-full relative z-10 space-y-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-3 text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                    <span className="text-[#10B981] bg-white/5 p-2 rounded-xl border border-white/5">{stat.icon}</span>
                    {stat.label}
                  </span>
                  <span className="text-2xl font-black text-white">{stat.percentage}%</span>
                </div>
                <div className="h-3 w-full bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50 p-0.5 backdrop-blur-sm">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.15), ease: customEase }}
                    className="h-full bg-gradient-to-r from-[#07562C] via-[#10B981] to-green-400 rounded-full relative"
                  >
                    <div className="absolute top-0 inset-x-0 h-[40%] bg-white/20 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
            8. EXECUTIVE TEAM CTA
            ========================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#07562C] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(7,86,44,0.4)] flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10B981] opacity-20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 md:w-3/5 text-center md:text-left">
            <h2 className="text-sm font-black tracking-[0.2em] text-[#10B981] uppercase mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
              Meet the minds <br /> behind the mission.
            </h3>
            <p className="text-green-50/80 text-lg font-light mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Discover the dedicated student leaders driving innovation, managing operations, and ensuring the continued success of the NIAESB chapter.
            </p>
            
            <Link 
              to="/excos" 
              className="group inline-flex items-center gap-3 bg-white text-[#07562C] px-8 py-5 rounded-2xl font-black text-[15px] hover:bg-green-50 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
            >
              Meet The Executives 
              <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative z-10 md:w-2/5 flex justify-center md:justify-end">
            <Link to="/excos" className="flex -space-x-6 relative hover:scale-105 transition-transform duration-500 cursor-pointer">
              {/* REAL IMPORTED IMAGES USED HERE */}
              <img className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#07562C] object-cover relative z-30 shadow-2xl" src={ogbonImg} alt="Ogbon-Otan Matthew - President" />
              <img className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#07562C] object-cover relative z-20 shadow-2xl" src={chibuzorImg} alt="Nwaire Chibuzor - Vice President" />
              <img className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#07562C] object-cover relative z-10 shadow-2xl" src={oluwatobilobaImg} alt="Adedayo Oluwatobiloba - Executive" />
              
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#07562C] bg-white text-[#07562C] flex items-center justify-center font-black text-xl md:text-2xl relative z-0 shadow-2xl">
                +12
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;