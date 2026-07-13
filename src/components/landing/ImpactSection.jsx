import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// A clean, reusable counter component using framer-motion
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
      return controls.stop; // Cleanup animation on unmount
    }
  }, [from, to, duration, inView]);

  return <>{count.toLocaleString()}</>; // toLocaleString adds the commas automatically
};

const ImpactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { id: 1, label: 'Active Members', value: 850, suffix: '+' },
    { id: 2, label: 'Department Executives', value: 10, suffix: '' },
    { id: 3, label: 'Annual Events', value: 12, suffix: '+' },
    { id: 4, label: 'Years of Impact', value: 25, suffix: '+' },
  ];

  return (
    <section className="relative py-24 bg-niaesb-green text-niaesb-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Our Impact at a <span className="text-green-300">Glance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="mt-4 text-lg text-green-100 max-w-2xl mx-auto"
          >
            Decades of building agricultural engineering leaders, fostering community, and driving technical excellence.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-green-800/50">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="text-center py-6 sm:py-0"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">
                {inView ? (
                  <AnimatedCounter from={0} to={stat.value} duration={2.5} inView={inView} />
                ) : (
                  "0"
                )}
                <span className="text-green-400">{stat.suffix}</span>
              </div>
              <p className="text-green-100 font-semibold text-lg uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;