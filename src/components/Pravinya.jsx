import { motion } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// Import images
import physcImg from '../images/physc.png';
import skillImg from '../images/skill.png';
import placementImg from '../images/placement.jpeg';
import liveImg from '../images/live.jpeg';
import gobalImg from '../images/gobal.jpeg';
import phoneApp1 from '../images/phone.png';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const offerings = [
  {
    title: 'Psychometric Career Assessment',
    content: 'Empower your career with clarity. Our scientifically-backed psychometric tests help students and early professionals discover core strengths, identify ideal career paths, and make informed decisions.',
    fullContent: [
      'Discover core strengths and personality traits',
      'Identify ideal career paths based on aptitude and interest',
      'Make informed academic and professional decisions',
      'Certified Guidance: All assessments are conducted and interpreted by certified career counsellors who provide expert insights and personalized career planning support.'
    ]
  },
  {
    title: 'Skill Development Workshops',
    content: 'We deliver hands-on workshops for both technical and non-technical skills tailored to institutional needs.',
    fullContent: [
      'Communication & Public Speaking',
      'Critical Thinking & Leadership',
      'Resume Building & Interview Prep',
      'Team Management & Business Etiquette',
      'Design Thinking & Innovation',
      'Tailor-Made for Institutions: All our workshops are custom-designed based on specific college or institutional needs, and are facilitated by experienced industry professionals.'
    ]
  },
  {
    title: 'Technical Training',
    content: 'Stay industry-ready with expert-led training in cutting-edge technologies.',
    fullContent: [
      'Full-Stack Web Development',
      'Data Science & AI/ML',
      'Cybersecurity & Cloud Computing',
      'Mobile App Development',
      'Embedded Systems & IoT'
    ]
  },
  {
    title: 'Project-Based Learning',
    content: 'Work on live industry projects to build practical expertise and real-world experience.',
    fullContent: [
      'Collaborative Problem Solving',
      'Real-World Product Development',
      'Documentation & Presentations',
      'Hands-on experience with industry tools and methodologies'
    ]
  },
  {
    title: 'Internship Programs',
    content: 'Bridge the gap between learning and working through our structured internship opportunities.',
    fullContent: [
      'Remote, On-site & Hybrid Models',
      'Industry Mentorship & Weekly Reviews',
      'Certificate & Experience Letter Provided',
      'Practical exposure to real business challenges'
    ]
  },
  {
    title: 'Placement Support',
    content: 'We help you transition from education to employment with confidence.',
    fullContent: [
      'Resume & LinkedIn Profile Optimization',
      'Mock Interviews & Career Coaching',
      'Access to Job Portals & Partner Network',
      'Campus Drives & Hiring Events',
      'Personalized job matching based on skills and interests'
    ]
  },
];

// Phone app images array
const phoneApps = [phoneApp1, phoneApp1, phoneApp1];

function HeroSection() {
  // Pre-calculate particle animations for better performance
  const particles = useMemo(() => 
    Array.from({ length: 15 }).map(() => ({
      size: Math.random() * 10 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      y: (Math.random() - 0.5) * 100,
      x: (Math.random() - 0.5) * 50,
      duration: Math.random() * 10 + 10
    }))
  , []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 text-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-300/80 blur-3xl" />
      </motion.div>

      {/* Optimized particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, particle.y, 0],
            x: [0, particle.x, 0],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Content container with optimized max-width */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Pravinya Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <img 
              src="./pravinya-bulb.png"  
              alt="PravinyaBulb"
              className="h-24 w-auto"  
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 text-white tracking-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.05em',
              textShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            Pravinya
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-6 sm:mb-8 tracking-wider"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.2em',
              marginLeft: '0.2em',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting Skills, Creating Leaders
          </motion.h2>
        </motion.div>

        {/* Description with better line-height */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed sm:leading-loose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Pravinya is a forward-thinking educational and career development company committed to equipping students and professionals with the skills, experiences, and insights they need to thrive in today's fast-changing global landscape.
        </motion.p>

        {/* Scroll indicator with smoother animation */}
        <motion.div
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function OfferingSection() {
  const sectionRef = useRef(null);
  const pages = Math.ceil(offerings.length / 3);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const start = el.offsetTop;
      const end = start + el.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollTop - start) / (end - start), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPage = Math.min(Math.floor(scrollProgress * pages), pages - 1);

  // Card images array
  const cardImages = [
    physcImg,    // Psychometric Career Assessment
    skillImg,    // Skill Development Workshops
    liveImg,     // Technical Training
    liveImg,     // Project-Based Learning
    gobalImg,    // Internship Programs
    placementImg // Placement Support
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ minHeight: '100vh' }}
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center bg-[#fff7fc] overflow-hidden">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 h-full w-full flex flex-col justify-center"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-[#4c1d95] mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Core Offerings
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {offerings
              .slice(currentPage * 3, currentPage * 3 + 3)
              .map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-0 h-[26rem] sm:h-[28rem] rounded-xl shadow-md border border-[#e9d5ff] hover:shadow-xl transition duration-300 ease-in-out flex flex-col"
                >
                  <div className="w-full h-[60%] overflow-hidden rounded-t-xl">
                    <img 
                      src={cardImages[(currentPage * 3) + i]} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6 h-[40%] flex flex-col justify-between bg-white rounded-b-xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#4c1d95] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function PravinyaPage() {
  const [currentPhoneApp, setCurrentPhoneApp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoneApp((prev) => (prev + 1) % phoneApps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f5f3ff] text-[#4c1d95] font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* About Section - More Engaging Version */}
      <section className="py-24 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#7c3aed] opacity-10 blur-xl"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#4c1d95] mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Redefining Career Development
            </motion.h2>
            <motion.p 
              className="text-xl text-[#4c1d95]/90 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer a comprehensive ecosystem that supports individuals at every stage of their career journey — from skill development to placements and overseas education.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-[#7c3aed] opacity-10 blur-xl z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-[#e9d5ff]">
                <h3 className="text-2xl font-bold text-[#4c1d95] mb-4">Our Mission</h3>
                <p className="text-[#4c1d95]/90 mb-6">
                  At Pravinya, we're committed to equipping students and professionals with the skills, experiences, and insights they need to thrive in today's fast-changing global landscape.
                </p>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="bg-[#f3e8ff] p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4c1d95]">Holistic Approach</h4>
                      <p className="text-sm text-[#4c1d95]/80">From psychometric assessments to placement support</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="bg-[#f3e8ff] p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4c1d95]">Industry-Aligned</h4>
                      <p className="text-sm text-[#4c1d95]/80">Programs guided by industry trends and expert mentors</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[#e9d5ff]"
              >
                <h3 className="text-xl font-bold text-[#4c1d95] mb-3">Our Methodology</h3>
                <p className="text-[#4c1d95]/90">
                  We combine psychometric insights with industry needs to create personalized career pathways. Our 360° development model ensures students gain both technical skills and essential soft skills.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[#e9d5ff]"
              >
                <h3 className="text-xl font-bold text-[#4c1d95] mb-3">Global Reach</h3>
                <p className="text-[#4c1d95]/90">
                  Our overseas education consulting helps students navigate university selection, documentation, visa processes, and pre-departure orientation for global opportunities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <OfferingSection />

      {/* Why Choose Pravinya - With Enhanced Animations */}
      <section className="py-24 bg-[#4c1d95] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why <span className="text-[#a78bfa]">Pravinya</span> Stands Out
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We don't just train - we transform careers through our unique approach
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </motion.div>
                ),
                title: "Psychometric Tests",
                description: "Science-backed assessments analyzed by certified career counsellors",
                animation: {
                  hidden: { opacity: 0, x: -50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.6 }
                  }
                }
              },
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </motion.div>
                ),
                title: "Custom Workshops",
                description: "Tailor-made programs designed for your institution's specific needs",
                animation: {
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 }
                  }
                }
              },
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                ),
                title: "Technical Training",
                description: "Expert-led courses in Full-Stack, AI/ML, Cybersecurity, IoT and more",
                animation: {
                  hidden: { opacity: 0, x: 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.6, delay: 0.2 }
                  }
                }
              },
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                ),
                title: "Live Projects",
                description: "Gain practical experience with actual industry case studies",
                animation: {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.3 }
                  }
                }
              },
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </motion.div>
                ),
                title: "Global Education",
                description: "Complete guidance for overseas university applications",
                animation: {
                  hidden: { opacity: 0, rotate: -10 },
                  visible: { 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.6, delay: 0.4 }
                  }
                }
              },
              {
                icon: (
                  <motion.div 
                    className="p-3 bg-[#5b21b6] rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                ),
                title: "Placement Support",
                description: "End-to-end assistance from resume building to job placement",
                animation: {
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.5 }
                  }
                }
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={feature.animation}
                className="bg-[#5b21b6] p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[#7c3aed]"
                whileHover={{ 
                  y: -10,
                  backgroundColor: "#6d28d9",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col items-start">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white mt-6 mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
       </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#c4b5fd] to-[#a78bfa] py-16 sm:py-24 px-4 sm:px-6 text-center text-[#4c1d95] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#d8b4fe] blur-3xl"></div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 relative z-10"
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Shape Your Future with Pravinya
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          At Pravinya, we don't just teach skills — we help you discover your strengths, build your confidence, and pursue your dreams with purpose.
        </motion.p>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)"
            }} 
            whileTap={{ scale: 0.95 }} 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#4c1d95] font-semibold rounded-full shadow-xl transition duration-300"
          >
            <Link to="/contact">Let's Get Started</Link>
          </motion.button>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-[#ede9fe] text-[#4c1d95] px-4 sm:px-6 py-12 sm:py-16 z-10 overflow-hidden">
        {/* Enhanced Watermark */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.h1 
            className="text-[18vw] font-black text-[#4c1d95]"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            PRAVINYA
          </motion.h1>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <motion.h2 
              className="text-xl sm:text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pravinya
            </motion.h2>
            <motion.p 
              className="text-sm leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Building leaders of tomorrow by nurturing today's talent with purpose-driven learning and global vision.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  className="hover:text-[#7c3aed] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-[#d8b4fe] flex items-center justify-center">
                    {social === 'facebook' && 'f'}
                    {social === 'twitter' && 't'}
                    {social === 'linkedin' && 'in'}
                    {social === 'instagram' && 'ig'}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-3 text-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['about', 'programs', 'workshops', 'training', 'placements'].map((link, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                >
                  <Link 
                    to={`/${link}`} 
                    className="hover:text-[#7c3aed] transition-colors flex items-center"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Resources
            </motion.h3>
            <motion.ul 
              className="space-y-3 text-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['blog', 'faq', 'testimonials', 'careers', 'privacy'].map((resource, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                >
                  <Link 
                    to={`/${resource}`} 
                    className="hover:text-[#7c3aed] transition-colors flex items-center"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {resource.charAt(0).toUpperCase() + resource.slice(1)}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h3>
            <motion.ul 
              className="space-y-3 text-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
                  text: 'smgventures18@gmail.com' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', 
                  text: '+91 6366631311' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', 
                  text: '1st Floor, 6th Cross, VV Nagara, Mandya, Karnataka-571401' }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                  className="flex items-start"
                >
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div
          className="relative z-10 text-center text-sm text-[#4c1d95] mt-8 sm:mt-12 border-t border-[#d8b4fe] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Pravinya. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
}