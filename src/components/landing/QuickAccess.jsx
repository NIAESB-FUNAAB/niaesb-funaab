import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiBookOpen, FiUsers, FiCreditCard, FiArrowUpRight } from 'react-icons/fi';

const QuickAccess = () => {
  const [isPaused, setIsPaused] = useState(false);

  const accessCards = [
    {
      id: 1,
      title: 'Blogs & News',
      description: 'Catch up on the latest technical articles, events, and updates from the FUNAAB chapter.',
      icon: <FiEdit3 size={26} />,
      link: '/blog',
    },
    {
      id: 2,
      title: 'E-Library',
      description: 'Access past questions, research materials, and core engineering textbooks.',
      icon: <FiBookOpen size={26} />,
      link: '/library',
    },
    {
      id: 3,
      title: 'Lecturers',
      description: 'View profiles, office hours, and contact information for our esteemed faculty.',
      icon: <FiUsers size={26} />,
      link: '/lecturers',
    },
    {
      id: 4,
      title: 'Pay Dues',
      description: 'Securely process your annual association dues and generate your receipt.',
      icon: <FiCreditCard size={26} />,
      link: '/pay-dues',
    },
  ];

  // Tripling the array to ensure a seamless infinite scrolling loop
  const loopCards = [...accessCards, ...accessCards, ...accessCards];

  return (
    <section id="quick-access" className="py-24 bg-white overflow-hidden font-mono">
      {/* Standardized Container Sizing (Matched with Hero & About) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 relative z-10">
        
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.2em] text-[#07562C]/80 uppercase font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#07562C]" />
            STUDENT RESOURCES
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#04331A] tracking-tight">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981]">Access</span>
          </h2>
          <p className="mt-4 text-lg text-[#04331A]/70 font-medium max-w-2xl mx-auto">
            Everything you need for a smooth academic session, right at your fingertips.
          </p>
        </div>

      </div>

      {/* Infinite Motion Slider */}
      <div 
        className="relative w-full overflow-hidden flex py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 pl-6"
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            }
          }}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {loopCards.map((card, idx) => (
            <motion.a
              key={`${card.id}-${idx}`}
              href={card.link}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0px 14px 35px rgba(7, 86, 44, 0.1)",
                borderColor: "rgba(7, 86, 44, 0.3)",
                transition: { duration: 0.2 }
              }}
              className="w-[300px] sm:w-[325px] shrink-0 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col items-start text-left cursor-pointer transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              {/* Animated Icon Container on Card Hover */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5, backgroundColor: '#07562C', color: '#ffffff' }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-green-50 text-[#07562C] flex items-center justify-center mb-6 shadow-sm"
              >
                {card.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-[#04331A] mb-3">
                {card.title}
              </h3>

              <p className="text-[#04331A]/70 text-sm leading-relaxed font-medium mb-6 flex-grow">
                {card.description}
              </p>

              <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#07562C]">
                Explore <FiArrowUpRight size={16} className="ml-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccess;