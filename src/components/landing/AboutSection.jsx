import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiEye, FiTarget, FiZap } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#fafafa] relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#07562C 1px, transparent 1px), linear-gradient(90deg, #07562C 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-green-300/20 blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* CTA (LEFT COLUMN) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-green-200 shadow-sm mb-6">
              <FiZap className="text-[#07562C] w-3 h-3 fill-current" />
              <span className="text-[12px] font-bold tracking-wider text-[#07562C] uppercase">
                Discover NIAESB
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Pioneering the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981]">Agri-Tech</span> in Nigeria.
            </h3>
            
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              The Nigerian Institution of Agricultural Engineers Students' Branch (NIAESB), FUNAAB, is the foremost student body representing Agricultural and Bio-resources Engineering. We prepare competent engineers to solve complex global challenges.
            </p>
            
            <Link 
              to="/about" 
              className="group inline-flex items-center justify-center gap-2 bg-[#07562C] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#054020] transition-all duration-300 shadow-[0_8px_25px_rgba(7,86,44,0.25)] hover:shadow-[0_12px_30px_rgba(7,86,44,0.35)] hover:-translate-y-1"
            >
              Read Our Full History
              <FiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column*/}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 lg:pl-10"
          >
            {/* The Card Container */}
            <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              
              {/*Light Section (Vision) */}
              <div className="flex-1 p-8 sm:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <FiEye size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-50 text-[#07562C] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-green-100">
                    <FiEye />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Our Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be a leading student engineering association that inspires innovation, promotes professional excellence, and develops future leaders in Agricultural and Bio-resources Engineering.
                  </p>
                </div>
              </div>

              {/* Mission  */}
              <div className="flex-1 p-8 sm:p-10 bg-[#07562C] relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 text-white">
                  <FiTarget size={120} />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 backdrop-blur-md border border-white/20">
                    <FiTarget />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Mission</h4>
                  <p className="text-green-50/90 text-sm leading-relaxed">
                    To provide opportunities for learning, collaboration, leadership, and practical engineering exposure while promoting the advancement of sustainable development.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;