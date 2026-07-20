import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiEye, FiTarget } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-50 opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Hook & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-black tracking-widest text-[#10B981] uppercase mb-4">
              Who We Are
            </h2>
            
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1a2b21] mb-6 leading-[1.15] tracking-tight">
              Shaping the future of <span className="text-[#07562C]">agricultural technology</span> and sustainable development.
            </h3>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium pr-0 lg:pr-8">
              The Nigerian Institution of Agricultural Engineers Students' Branch (NIAESB), FUNAAB, is the foremost student body representing Agricultural and Bio-resources Engineering students. We are preparing students to become competent engineers capable of addressing environmental challenges in Nigeria and beyond.
            </p>
            
            {/* Swapped the button for a React Router Link */}
            <Link 
              to="/about" 
              className="group inline-flex items-center justify-center gap-2 bg-[#07562C] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-[#054020] transition-all duration-300 shadow-[0_10px_30px_rgba(7,86,44,0.2)] hover:shadow-[0_15px_40px_rgba(7,86,44,0.3)] hover:-translate-y-1"
            >
              Read Our Full History
              <FiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column: Floating Vision & Mission Cards */}
          <div className="relative space-y-6">
            
            {/* Vision Card - Light Mode */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-green-50 text-[#07562C] rounded-xl flex items-center justify-center text-2xl">
                  <FiEye />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 tracking-tight">Our Vision</h4>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                To be a leading student engineering association that inspires innovation, promotes professional excellence, and develops future leaders in Agricultural and Bio-resources Engineering.
              </p>
            </motion.div>

            {/* Mission Card - Dark Mode for high contrast */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#07562C] p-8 sm:p-10 rounded-3xl shadow-xl lg:ml-12 relative z-20 hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
            >
              {/* Subtle pattern inside the dark card */}
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                <FiTarget size={120} />
              </div>

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                  <FiTarget />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">Our Mission</h4>
              </div>
              <p className="text-green-50 leading-relaxed font-medium relative z-10">
                To provide opportunities for learning, collaboration, leadership, and practical engineering exposure while promoting the advancement of agricultural technology and sustainable development.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;