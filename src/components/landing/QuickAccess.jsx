import { motion } from 'framer-motion';
import { FiEdit3, FiBookOpen, FiUsers, FiCreditCard } from 'react-icons/fi';

const QuickAccess = () => {
  // Staggered animation variants for the grid entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Data array to keep our JSX clean
  const accessCards = [
    {
      id: 1,
      title: 'Blogs & News',
      description: 'Catch up on the latest technical articles, events, and updates from the FUNAAB chapter.',
      icon: <FiEdit3 size={32} />,
      link: '#blogs',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'E-Library',
      description: 'Access past questions, research materials, and core engineering textbooks.',
      icon: <FiBookOpen size={32} />,
      link: '#library',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Lecturers',
      description: 'View profiles, office hours, and contact information for our esteemed faculty.',
      icon: <FiUsers size={32} />,
      link: '#lecturers',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Pay Dues',
      description: 'Securely process your annual association dues and generate your receipt.',
      icon: <FiCreditCard size={32} />,
      link: '#pay-dues',
      delay: 0.4,
    }
  ];

  return (
    <section id="quick-access" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Quick <span className="text-niaesb-green">Access</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for a smooth academic session, right at your fingertips.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {accessCards.map((card) => (
            <motion.a
              key={card.id}
              href={card.link}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-niaesb-green/30 flex flex-col items-center text-center group transition-all duration-300"
            >
              {/* Icon Container with a background that fills in on hover */}
              <div className="w-16 h-16 rounded-full bg-niaesb-green/10 text-niaesb-green flex items-center justify-center mb-6 group-hover:bg-niaesb-green group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-niaesb-green transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default QuickAccess;