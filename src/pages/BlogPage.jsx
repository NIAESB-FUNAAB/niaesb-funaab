import SEO from '../components/SEO';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiArrowRight, FiAward, FiVideo, FiFileText, FiInbox } from 'react-icons/fi';

// Assets
import swepImg from '../assets/events/swep-volleyball.jpg'; 
import webinarImg from '../assets/events/asap-ewebinar.jpg';    
import orientImg from '../assets/events/orientation.jpg';
// DATA
const pastEvents = [
  {
    id: 1,
    title: "Building Connected Systems: Embedded Systems, IoT & AI",
    date: "July 26th, 2026",
    time: "7:00 PM – 9:00 PM",
    location: "Google Meet",
    category: "Technical Webinar",
    icon: <FiVideo />,
    content: "We brought together top minds to dive deep into the future of connected systems. Participants got familiar with the voices behind the microphones, exploring the intersection of Embedded Systems, IoT, and Artificial Intelligence.",
    link: "https://meet.google.com/bym-buif-poi?hs=224",
    linkText: "Join / Access Session",
    image: webinarImg,
  },
  {
    id: 2,
    title: "DEPARTMENTAL ORIENTATION PROGRAM FOR FRESHMEN",
    date: "Wednesday, 23th September 2026",
    time: "1:00 PM",
    location: "Elias Bogoro Auditorium [Elbog]",
    category: "Conference",
    icon: <FiVideo />,
    content: "This is to inform all freshmen that Agricultural and bio resources engineering orientation, Attendance is compulsory. Please be punctual.",
    link: "https://meet.google.com/bym-buif-poi?hs=224",
    linkText: "Register",
    image: orientImg,
  }
];

const upcomingEvents = []; // Currently empty for the new session

const newsData = [
  {
    id: 1,
    title: "SWEP Volleyball Inter-Departmental Tournament Champions",
    date: "Recent Highlight",
    category: "Sports & Community",
    icon: <FiAward />,
    content: "Congratulations to Team ABE for their exceptional performance, teamwork, and sportsmanship throughout the competition, culminating in a well-deserved championship victory.",
    badge: "TEAM ICONIC",
    image: swepImg,
  }
];

// ANIMATION VARIANTS
const customEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: customEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const BlogPage = () => {
  const [eventTab, setEventTab] = useState('past'); // Default to past since webinar exists

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 pt-[12rem] md:pt-[14rem] font-mono selection:bg-[#10B981] selection:text-white relative">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04331A05_1px,transparent_1px),linear-gradient(to_bottom,#04331A05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#04331A]/10 text-[#10B981] text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            <FiFileText size={16} />
            The Dispatch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#04331A] tracking-tighter leading-tight mb-6"
          >
            Events & <span>News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="text-base md:text-lg text-[#04331A]/60 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Stay informed with upcoming workshops, past session recordings, and the latest news across NIAESB FUNAAB.
          </motion.p>
        </div>

        {/* ================= SECTION 1: EVENTS ================= */}
        <section className="mb-28">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#04331A]/10">
            <div>
              <div className="flex items-center gap-2 text-[#10B981] font-black uppercase tracking-[0.2em] text-xs mb-2">
                <FiCalendar /> Gatherings & Webinars
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#04331A] tracking-tight">
                Events
              </h2>
            </div>

            {/* EVENT NAV TOGGLE */}
            <div className="inline-flex items-center p-1.5 bg-white rounded-2xl border border-[#04331A]/10 shadow-sm self-start md:self-auto">
              <button
                onClick={() => setEventTab('upcoming')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  eventTab === 'upcoming'
                    ? 'bg-[#04331A] text-white shadow-md'
                    : 'text-[#04331A]/60 hover:text-[#04331A]'
                }`}
              >
                <FiCalendar className={eventTab === 'upcoming' ? 'text-[#10B981]' : ''} />
                Upcoming Events
              </button>
              <button
                onClick={() => setEventTab('past')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  eventTab === 'past'
                    ? 'bg-[#04331A] text-white shadow-md'
                    : 'text-[#04331A]/60 hover:text-[#04331A]'
                }`}
              >
                <FiClock className={eventTab === 'past' ? 'text-[#10B981]' : ''} />
                Past Events ({pastEvents.length})
              </button>
            </div>
          </div>

          {/* EVENTS CONTENT CONTAINER */}
          <AnimatePresence mode="wait">
            {/* UPCOMING EVENTS */}
            {eventTab === 'upcoming' && (
              <motion.div key="upcoming" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Render upcoming events when available */}
                  </div>
                ) : (
                  <div className="bg-white rounded-[2.5rem] border border-dashed border-[#04331A]/20 py-16 px-8 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-[#10B981]">
                      <FiInbox size={28} />
                    </div>
                    <h3 className="text-xl font-black text-[#04331A] mb-2">No Upcoming Events</h3>
                    <p className="text-[#04331A]/60 font-medium text-sm max-w-md">
                      The academic session is just starting up. Stay tuned as we plan upcoming technical sessions and workshops!
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* PAST EVENTS */}
            {eventTab === 'past' && (
              <motion.div key="past" variants={staggerContainer} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <motion.article key={event.id} variants={fadeUp} className="group bg-white rounded-[2.5rem] overflow-hidden border border-[#04331A]/10 shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] hover:shadow-2xl hover:shadow-[#10B981]/10 hover:border-[#10B981]/30 transition-all duration-500 flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-[#04331A]/5">
                      <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-[#07562C] rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-[#10B981]/20">
                          {event.category}
                        </div>
                        <h3 className="text-xl font-black text-[#04331A] leading-tight mb-4 group-hover:text-[#07562C] transition-colors">
                          {event.title}
                        </h3>
                        
                        <div className="flex flex-col gap-2 mb-6">
                          <div className="flex items-center gap-2 text-xs text-[#04331A]/60 font-medium">
                            <FiCalendar className="text-[#10B981]" /> {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#04331A]/60 font-medium">
                            <FiClock className="text-[#10B981]" /> {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#04331A]/60 font-medium">
                            <FiMapPin className="text-[#10B981]" /> {event.location}
                          </div>
                        </div>

                        <p className="text-[#04331A]/70 text-xs font-medium leading-relaxed mb-6">
                          {event.content}
                        </p>
                      </div>

                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#04331A] text-white font-bold text-xs hover:bg-[#10B981] transition-colors mt-auto"
                      >
                        {event.linkText} <FiArrowRight />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ================= SECTION 2: NEWS ================= */}
        <section>
          <div className="mb-10 pb-6 border-b border-[#04331A]/10">
            <div className="flex items-center gap-2 text-[#10B981] font-black uppercase tracking-[0.2em] text-xs mb-2">
              <FiFileText /> Press & Highlights
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#04331A] tracking-tight">
              News & Updates
            </h2>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <motion.article key={news.id} variants={fadeUp} className="group bg-white rounded-[2.5rem] overflow-hidden border border-[#04331A]/10 shadow-[0_20px_40px_-15px_rgba(4,51,26,0.05)] hover:shadow-2xl hover:shadow-[#10B981]/10 hover:border-[#10B981]/30 transition-all duration-500 flex flex-col">
                <div className="h-64 overflow-hidden relative bg-[#04331A]/5">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#04331A] shadow-sm flex items-center gap-1.5">
                    <span className="text-[#10B981]">{news.icon}</span> {news.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#10B981] text-xs font-bold uppercase tracking-widest">{news.date}</span>
                    {news.badge && (
                      <span className="px-2.5 py-0.5 bg-[#04331A] text-white text-[9px] font-black tracking-widest rounded-full uppercase">
                        {news.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-black text-[#04331A] leading-tight mb-4 group-hover:text-[#07562C] transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-[#04331A]/70 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {news.content}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-xs font-bold text-[#04331A] group-hover:text-[#10B981] transition-colors mt-auto w-fit">
                    Read Story <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default BlogPage;
