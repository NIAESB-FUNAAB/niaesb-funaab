import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          >
            About <span className="text-niaesb-green">NIAESB</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            The Nigerian Institution of Agricultural Engineering Student Body is the premier community for aspiring engineers dedicated to revolutionizing agriculture through technology and innovation.
          </motion.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-niaesb-green/5 p-8 rounded-2xl border-l-4 border-niaesb-green shadow-sm"
          >
            <h3 className="text-2xl font-bold text-niaesb-green mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading student body fostering agricultural mechanization, sustainable food production, and bioresources engineering solutions across Nigeria and beyond.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-niaesb-green p-8 rounded-2xl shadow-lg text-niaesb-white"
          >
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-100 leading-relaxed">
              To empower agricultural engineering students through capacity building, professional networking, and technical skill development to solve real-world agricultural challenges.
            </p>
          </motion.div>
        </div>

        {/* Expandable History Section */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
          
          {/* Framer Motion AnimatePresence handles the smooth expand/collapse */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-8 pt-8 pb-4"
              >
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Who We Are</h4>
                    <p>
                      NIAESB is a vibrant community of thinkers, creators, and problem-solvers. We bridge the gap between academic theory and industry practice, ensuring our members are industry-ready upon graduation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Our History</h4>
                    <p>
                      Founded on the principles of innovation and agricultural sustainability, our institution has grown over the years to become a vital pillar in the academic journey of engineering students, hosting annual events, technical workshops, and field exposures.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <div className="bg-gray-50 p-4 text-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-niaesb-green font-semibold hover:text-green-900 transition-colors bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md"
            >
              {isExpanded ? 'Collapse' : 'Read Our Full History'}
              {/* Simple arrow rotation using inline style based on state */}
              <svg 
                className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;