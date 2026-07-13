import { motion } from 'framer-motion';
import { FiMail, FiBookOpen } from 'react-icons/fi';

const LecturersPage = () => {
  // Mock data for ABE Faculty
  const faculty = [
    { name: "Prof. O. A. Awokola", role: "Head of Department", spec: "Water Resources & Environmental Eng.", img: "https://ui-avatars.com/api/?name=O+A&background=07562C&color=fff&size=150" },
    { name: "Prof. S. O. Adewumi", role: "Professor", spec: "Farm Power & Machinery", img: "https://ui-avatars.com/api/?name=S+O&background=10B981&color=fff&size=150" },
    { name: "Dr. Mrs. K. A. Sanusi", role: "Associate Professor", spec: "Crop Processing & Storage", img: "https://ui-avatars.com/api/?name=K+A&background=07562C&color=fff&size=150" },
    { name: "Engr. T. B. Olanrewaju", role: "Senior Lecturer", spec: "Agricultural Structures", img: "https://ui-avatars.com/api/?name=T+B&background=10B981&color=fff&size=150" },
    { name: "Dr. F. E. Ojo", role: "Lecturer I", spec: "Soil and Water Conservation", img: "https://ui-avatars.com/api/?name=F+E&background=07562C&color=fff&size=150" },
    { name: "Engr. M. D. Adebayo", role: "Lecturer II", spec: "Bio-resources Engineering", img: "https://ui-avatars.com/api/?name=M+D&background=10B981&color=fff&size=150" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FAFAFA] min-h-[calc(100vh-80px)] py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a2b21] mb-4 tracking-tight">
            Meet Our <span className="text-[#07562C]">Faculty</span>
          </h1>
          <p className="text-gray-600 font-medium text-lg">
            The brilliant minds driving innovation and excellence in Agricultural and Bio-resources Engineering at FUNAAB.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {faculty.map((lecturer, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 group text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img 
                  src={lecturer.img} 
                  alt={lecturer.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-green-50 group-hover:border-green-200 transition-colors"
                />
              </div>
              
              <h3 className="text-lg font-black text-gray-900 mb-1">{lecturer.name}</h3>
              <p className="text-[#07562C] font-bold text-sm mb-3 uppercase tracking-wide">{lecturer.role}</p>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                <FiBookOpen className="text-gray-400" />
                <span>{lecturer.spec}</span>
              </div>
              
              <button className="w-full bg-gray-50 text-gray-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#07562C] hover:text-white transition-colors flex items-center justify-center gap-2 border border-gray-200">
                <FiMail />
                Contact
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
};

export default LecturersPage;