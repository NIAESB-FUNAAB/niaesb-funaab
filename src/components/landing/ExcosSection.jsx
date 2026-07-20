import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExcosSection = () => {
  const [showAll, setShowAll] = useState(false);

  const excosData = [
    { id: 1, name: 'Emmanuel O.', role: 'President', color: 'bg-green-700' },
    { id: 2, name: 'Sarah A.', role: 'Vice President', color: 'bg-green-600' },
    { id: 3, name: 'David K.', role: 'General Secretary', color: 'bg-green-500' },
    { id: 4, name: 'Aisha M.', role: 'Financial Secretary', color: 'bg-emerald-600' },
  ];

  const displayedExcos = showAll ? excosData : excosData.slice(0, 3);

  return (
    <section id="excos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Meet the <span className="text-niaesb-green">Executives</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated leaders driving the vision and mission of our great association for this academic session.
          </p>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
        >
          <AnimatePresence>
            {displayedExcos.map((exco) => (
              <motion.div
                layout
                key={exco.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >

                <div className={`w-24 h-24 rounded-full ${exco.color} flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-inner`}>
                  {exco.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{exco.name}</h3>
                <p className="text-niaesb-green font-medium mt-1">{exco.role}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-niaesb-green text-niaesb-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-900 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            {showAll ? 'Collapse' : 'See All Executives'}
            <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExcosSection;