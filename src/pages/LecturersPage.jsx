import { motion } from 'framer-motion';

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
  const facultyMembers = [
    { name: "Prof. ADEOSUN O. Johnson", title: "Prof.", specialty: "Environmental Resources Eng.", img: adeosunImg },
    { name: "Prof. DAIRO O. Usman", title: "Prof.", specialty: "Bio-Resources & Food Process Eng.", img: dairoImg },
    { name: "Prof. OLAYANJU A. Tajudeen", title: "Prof.", specialty: "Bio-Resources & Food Process Eng.", img: olayanjuImg },
    { name: "Prof. ADERINLEWO A. Ayobami", title: "Prof.", specialty: "Agricultural & Bioresources Eng.", img: aderinlewoImg },
    { name: "Prof. ADEWUMI B. Adewale", title: "Prof.", specialty: "Agricultural & Bioresources Eng.", img: adewumiImg },
    { name: "Prof. SOBOWALE Adeyinka", title: "Prof.", specialty: "Water & Ecological Resources Eng.", img: sobowaleImg },
    { name: "Prof. OLA O. Ibukun", title: "Prof.", specialty: "Power & Machinery Eng.", img: olaImg },
    { name: "Prof DADA O. O. Pius", title: "Prof.", specialty: "Water & Ecological Resources Eng.", img: dadaImg },
    { name: "Dr. OMOTAINSE O. Peter", title: "Dr.", specialty: "Agricultural & Rural Structures Eng.", img: omotainseImg },
    { name: "Dr. ADEPOJU O. Victor", title: "Dr.", specialty: "Power & Machinery Eng.", img: adepojuImg }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <div className="bg-white min-h-screen py-20 relative overflow-hidden font-sans">
      
      <div className="absolute top-40 left-0 w-[200vw] flex opacity-[0.03] pointer-events-none select-none z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap"
        >
          <h1 className="text-[12rem] font-black text-gray-900 tracking-tighter mr-8">FUNAAB ENGINEERING • NIAESB •</h1>
          <h1 className="text-[12rem] font-black text-gray-900 tracking-tighter mr-8">FUNAAB ENGINEERING • NIAESB •</h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 border border-[#04331A]/20 bg-[#04331A]/5 px-4 py-1.5 rounded-full"
          >
            <p className="text-[#04331A] font-bold text-xs tracking-[0.3em] uppercase">
              Dept. of Agricultural & Bioresources
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#04331A] uppercase tracking-tighter"
          >
            Get Familiar with Our <span className="text-[#10B981] relative">
             Amazing Lecturer
              {/* Vibrant green accent underline behind the text */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#10B981]/20 -z-10"></span>
            </span>
          </motion.h1>
        </div>

        {/* --- LECTURERS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16"
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className={`group flex flex-col items-center cursor-pointer ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="relative w-full aspect-[4/5] rounded-t-[5rem] rounded-b-2xl overflow-hidden bg-gray-100 border-[6px] border-white shadow-[0_15px_35px_rgba(4,51,26,0.08)] group-hover:shadow-[0_25px_50px_rgba(16,185,129,0.15)] group-hover:-translate-y-4 transition-all duration-500 ease-out z-10">
                
                <img 
                  src={faculty.img} 
                  alt={faculty.name} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(faculty.name) + '&background=f0fdf4&color=04331A&size=512';
                  }}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#04331A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-black text-[#04331A] uppercase tracking-widest whitespace-nowrap">
                    {faculty.title}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col items-center w-full px-2 z-0">
                <h3 className="text-xl sm:text-2xl font-black text-[#04331A] text-center tracking-tight group-hover:text-[#10B981] transition-colors duration-300">
                  {faculty.name}
                </h3>
                
                <div className="w-8 h-1 bg-[#04331A] mt-3 rounded-full group-hover:w-full group-hover:bg-[#10B981] transition-all duration-500 ease-out"></div>
                
                <p className="text-sm font-semibold text-gray-500 text-center mt-3 leading-snug group-hover:text-gray-900 transition-colors duration-300">
                  {faculty.specialty}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default LecturersPage;