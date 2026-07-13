import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

const BlogPage = () => {
  const posts = [
    {
      title: "NIAESB Wins Big at Hack4Freedom Lagos 2026",
      category: "Achievement",
      date: "May 15, 2026",
      author: "PRO Team",
      excerpt: "Our outstanding 400-level students secured fourth place overall with their decentralized software application, KoboSat, pushing the boundaries of what is possible in tech.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "New Engineering Research Lab Opens this July",
      category: "Infrastructure",
      date: "June 02, 2026",
      author: "Dept. Admin",
      excerpt: "The Systems Engineering Research Lab is set to open its doors for the upcoming mid-year IT students, offering state-of-the-art facilities for software and hardware integration.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Guide: Securing Top Tier Industrial Training (IT)",
      category: "Student Guide",
      date: "April 28, 2026",
      author: "NIAESB President",
      excerpt: "A comprehensive guide for 300L and 400L students on how to land placements at top manufacturing and tech companies like Seven-Up Bottling Company.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FAFAFA] min-h-[calc(100vh-80px)] py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a2b21] mb-4 tracking-tight">
              Departmental <span className="text-[#07562C]">Updates</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg">
              Stay informed with the latest news, tech innovations, and student achievements from the ABE community.
            </p>
          </div>
          <button className="bg-white border-2 border-[#07562C] text-[#07562C] px-6 py-2.5 rounded-lg font-bold hover:bg-[#07562C] hover:text-white transition-colors">
            Subscribe
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#07562C] uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3">
                  <span className="flex items-center gap-1.5"><FiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><FiUser /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#07562C] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 text-[#07562C] font-bold text-sm hover:text-green-600 transition-colors mt-auto">
                  Read Full Article <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default BlogPage;