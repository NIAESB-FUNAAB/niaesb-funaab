import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Import your images here. 
// Update the filenames (finsec.jpg, gensec.jpg, vp.jpg) to match the actual files in your folder!
import finsecImg from '../../assets/executives/akintola.jpg';
import gensecImg from '../../assets/executives/itah.jpg';
import vpImg from '../../assets/executives/nwaire.jpg';
import ogbonImg from '../../assets/executives/ogbon.jpg';

const ExcosTeaserSection = () => {
  // Card Data updated to use images for everyone
  const previewExcos = [
    { 
      id: 1, name: 'Financial Sec.', role: 'Executive', 
      image: finsecImg,
      hoverX: -100, hoverY: 20, hoverRotate: -15 
    },
    { 
      id: 2, name: 'General Sec.', role: 'Executive',
      image: gensecImg,
      hoverX: -40, hoverY: -10, hoverRotate: -5 
    },
    { 
      id: 3, name: 'Vice President', role: 'Executive',
      image: vpImg,
      hoverX: 40, hoverY: -10, hoverRotate: 5 
    },
    { 
      id: 4, name: 'Ogbon-Otan M.', role: 'President',
      image: ogbonImg,
      hoverX: 100, hoverY: 20, hoverRotate: 15 
    },
  ];

  return (
    <section className="relative py-32 bg-[#fafafa] overflow-hidden flex items-center min-h-[80vh]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#07562C 1px, transparent 1px), linear-gradient(90deg, #07562C 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-green-300/20 blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-1" // <-- Changed this line
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-bold text-[#07562C] tracking-widest uppercase">The Leadership</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Driven by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07562C] to-[#10B981]">
                Visionary Minds
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium mb-10 leading-relaxed">
              Meet the dedicated student executives steering the chapter towards innovation, community growth, and academic excellence.
            </p>

            <a 
              href="/excos" 
              className="group relative inline-flex items-center justify-center gap-3 bg-[#07562C] text-white px-8 py-4 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-[0_8px_25px_rgba(7,86,44,0.25)] hover:bg-[#054020] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(7,86,44,0.35)]"
            >
              <span>Explore Directory</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right Side: The Magnetic Card Fan */}
          <div className="relative h-[400px] w-full flex items-center justify-center order-2 perspective-1000 mt-8 lg:mt-0"> {/* <-- Changed this line */}
            <motion.div 
              initial="idle"
              whileHover="hover"
              className="relative w-[280px] h-[360px] cursor-pointer z-10"
            >
              {previewExcos.map((exco, index) => (
                <motion.div
                  key={exco.id}
                  variants={{
                    idle: { 
                      x: 0, 
                      y: index * -5, 
                      rotate: 0,
                      scale: 1 - (previewExcos.length - 1 - index) * 0.05, 
                    },
                    hover: { 
                      x: exco.hoverX, 
                      y: exco.hoverY, 
                      rotate: exco.hoverRotate,
                      scale: 1.05,
                    }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ 
                    zIndex: index,
                    backgroundImage: `url(${exco.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl border border-[#10B981]/40 p-6 flex flex-col justify-between shadow-xl overflow-hidden group"
                >
                  {/* Dark Gradient Overlay (Ensures text is readable over any image) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07562C]/95 via-[#07562C]/40 to-black/10 z-0 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Bottom of Card: Name & Role */}
                  <div className="relative z-10 mt-auto transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold mb-1 tracking-tight text-white">{exco.name}</h3>
                    <p className="font-medium text-sm text-emerald-300">
                      {exco.role}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* +10 Dropdown Badge */}
              <motion.div
                variants={{
                  idle: { opacity: 0, y: 0 },
                  hover: { opacity: 1, y: 50 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white border border-green-100 text-[#07562C] text-sm font-bold whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)] z-0"
              >
                + Full Council & Reps
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExcosTeaserSection;