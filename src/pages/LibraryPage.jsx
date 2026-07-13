import { motion } from 'framer-motion';
import { FiSearch, FiBook, FiDownload, FiFilter } from 'react-icons/fi';

const LibraryPage = () => {
  // Mock data for your resources
  const resources = [
    { title: "Advanced Farm Mechanization", course: "AGE 401", type: "Textbook", size: "4.2 MB" },
    { title: "Irrigation Engineering Fundamentals", course: "AGE 403", type: "Handout", size: "1.8 MB" },
    { title: "Soil and Water Conservation", course: "AGE 305", type: "Past Question", size: "850 KB" },
    { title: "Structural Design for Agric Engineers", course: "CVE 302", type: "Textbook", size: "5.5 MB" },
    { title: "Thermodynamics & Heat Transfer", course: "MEE 201", type: "Handout", size: "2.1 MB" },
    { title: "Post-Harvest Technology", course: "AGE 407", type: "Past Question", size: "900 KB" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FAFAFA] min-h-[calc(100vh-80px)] py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a2b21] mb-2 tracking-tight">
              Digital <span className="text-[#07562C]">Library</span>
            </h1>
            <p className="text-gray-600 font-medium">Access course materials, textbooks, and past questions.</p>
          </div>
          
          <div className="w-full md:w-96 flex gap-3">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input 
                type="text" 
                placeholder="Search by course code or title..." 
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#07562C] focus:ring-2 focus:ring-[#07562C]/20 transition-all outline-none shadow-sm"
              />
            </div>
            <button className="bg-white border border-gray-200 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#07562C] transition-colors shadow-sm">
              <FiFilter size={20} />
            </button>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-green-50 text-[#07562C] rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FiBook />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{item.title}</h3>
              <p className="text-[#07562C] font-black text-sm mb-6">{item.course}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400">{item.size}</span>
                <button className="flex items-center gap-2 text-sm font-bold text-[#07562C] hover:text-green-500 transition-colors">
                  Download <FiDownload />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default LibraryPage;