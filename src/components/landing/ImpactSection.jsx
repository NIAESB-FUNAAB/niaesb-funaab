import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        }
      });
      return controls.stop; 
    }
  }, [from, to, duration, inView]);

  return <>{count.toLocaleString()}</>;
};

const ImpactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { id: 1, label: 'Active Members', value: 250, suffix: '+' },
    { id: 2, label: 'Department Executives', value: 10, suffix: '' },
    { id: 3, label: 'Annual Events', value: 12, suffix: '+' },
    { id: 4, label: 'Years of Impact', value: 15, suffix: '+' },
  ];

  // Choreographed Stagger Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  // 3D Hinge & Scale effect for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1, 
      transition: { type: "spring", stiffness: 90, damping: 14 } 
    }
  };

  // The green accent line that draws itself
  const lineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%", 
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.6 } 
    }
  };

  // Typography sliding up from a mask
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden perspective-1000 font-mono">
      
      {/* Very subtle architectural dot pattern for texture on white */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#07562C 2px, transparent 2px)', backgroundSize: '36px 36px' }}>
      </div>

      {/* Standardized Container Sizing (Matched with Hero & QuickAccess) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold text-[#04331A] tracking-tight"
          >
            Our Impact at a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981]">Glance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-[#04331A]/70 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Decades of building agricultural engineering leaders, fostering community, and driving technical excellence.
          </motion.p>
        </div>

        {/* Stats Grid Container */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center text-center group"
            >
              {/* Animated Top Accent Line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#07562C] to-[#10B981] rounded-t-2xl w-full overflow-hidden">
                <motion.div 
                  variants={lineVariants}
                  className="h-full bg-gradient-to-r from-[#07562C] to-[#10B981]"
                />
              </div>

              <div className="relative z-10 w-full mt-2">
                {/* Numbers */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-black text-[#04331A] mb-4 tracking-tighter flex items-center justify-center"
                >
                  {inView ? (
                    <AnimatedCounter from={0} to={stat.value} duration={2.5} inView={inView} />
                  ) : (
                    "0"
                  )}
                  <span className="text-[#10B981] ml-1">{stat.suffix}</span>
                </motion.div>
                
                {/* Masked Label Reveal */}
                <div className="overflow-hidden py-1">
                  <motion.p 
                    variants={textRevealVariants}
                    className="text-[#04331A]/70 font-bold text-sm md:text-base uppercase tracking-[0.2em]"
                  >
                    {stat.label}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ImpactSection;