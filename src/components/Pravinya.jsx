import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import pravinyaLogo from '../images/pravinya-logo.png';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: -10, transition: { duration: 0.3 } }
};

const offerings = [
  {
    title: 'Psychometric Career Assessment',
    content: 'Empower your career with clarity through scientifically-backed tests interpreted by certified counsellors.',
    icon: '🧠'
  },
  {
    title: 'Skill Development Workshops',
    content: 'Hands-on training in communication, leadership, interview prep, and more — tailored to institutional needs.',
    icon: '🛠️'
  },
  {
    title: 'Technical Training',
    content: 'Get industry-ready with training in Full-Stack Development, AI/ML, Cybersecurity, IoT, and more.',
    icon: '💻'
  },
  {
    title: 'Live Industry Projects',
    content: 'Collaborate on real-world projects to build a powerful portfolio and gain confidence.',
    icon: '🏗️'
  },
  {
    title: 'Global Education Consulting',
    content: 'Guidance for overseas education from university selection to application and visa process.',
    icon: '✈️'
  },
  {
    title: 'Placement & Internship Support',
    content: 'We help you land roles that align with your passion and skills — both locally and globally.',
    icon: '🤝'
  },
];

function OfferingSection() {
  const sectionRef = useRef(null);
  const pages = Math.ceil(offerings.length / 3);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const start = el.offsetTop;
      const end = start + el.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollTop - start) / (end - start), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPage = Math.min(Math.floor(scrollProgress * pages), pages - 1);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${pages * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center bg-[#0f0f15] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 py-24 h-full w-full flex flex-col justify-center relative z-10"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#4f46e5] mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Offerings
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {offerings
              .slice(currentPage * 3, currentPage * 3 + 3)
              .map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="bg-[#1a1a2e] p-8 h-[28rem] rounded-xl shadow-lg border border-[#2a2a3c] hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 flex-grow">{item.content}</p>
                  <div className="mt-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm text-[#6366f1] hover:text-[#818cf8] font-medium transition-colors"
                    >
                      Learn more →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: pages }).map((_, i) => (
              <div 
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'w-8 bg-[#6366f1]' : 'w-4 bg-gray-700'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function PravinyaPage() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.img 
            src={pravinyaLogo} 
            alt="Pravinya Logo" 
            className="w-60 h-24 md:w-72 md:h-28 mb-8 rounded-lg shadow-2xl bg-white/10 p-2 object-contain mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#c7d2fe]" 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            Crafting Skills. Creating Leaders.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
          >
            Pravinya is a forward-thinking educational and career development company committed to equipping students and professionals with the skills, experiences, and insights they need to thrive in today's fast-changing global landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#4f46e5] font-semibold rounded-full shadow-lg transition-all"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <div className="absolute -left-20 top-1/3 w-64 h-64 bg-[#6366f1] rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-[#4f46e5] rounded-full filter blur-3xl opacity-20 -z-10"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[#0f0f15] rounded-2xl p-8 md:p-12 shadow-xl border border-[#1a1a2e]"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-6">About Pravinya</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We offer a comprehensive ecosystem that supports individuals at every stage of their career journey — from skill development and technical training to live projects, internships, placements, and overseas education consulting.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our programs are guided by industry trends, expert mentors, and a deep understanding of individual potential, supported by psychometric testing and personalized career guidance.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-[#4f46e5] text-white font-medium rounded-lg shadow-md w-fit"
              >
                Learn About Our Approach
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a3c] shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-[#2a2a3c] rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">🎯</div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-400">To bridge the gap between education and employment through holistic development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Offerings */}
      <OfferingSection />

      {/* Why Pravinya */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <div className="absolute -left-40 top-0 w-80 h-80 bg-[#6366f1] rounded-full filter blur-3xl opacity-10 -z-10"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="flex-shrink-0 w-full lg:w-1/2 relative"
          >
            <div className="bg-[#1a1a2e] rounded-3xl p-2 shadow-2xl border border-[#2a2a3c]">
              <div className="bg-[#2a2a3c] rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Experience</h3>
                  <p className="text-gray-400">Access our platform anywhere, anytime</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4f46e5] rounded-full filter blur-xl opacity-30 -z-10"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4f46e5] mb-8">Why Choose Pravinya?</h2>
            <ul className="space-y-6">
              {[
                'Psychometric Tests by Certified Career Counsellors',
                'Tailor-Made Workshops for Colleges & Institutions',
                'Trained by Experienced Industry Professionals',
                'Career-Aligned Technical & Non-Technical Training',
                'Real-Time Projects & Internship Opportunities',
                'End-to-End Placement & Global Education Support',
              ].map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0f0f15]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-[#6366f1] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Impact in Numbers
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "50+", label: "Workshops Conducted" },
              { number: "30+", label: "Industry Partners" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#4f46e5] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Students Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Pravinya's career assessment helped me discover my true potential and choose the right career path.",
              author: "Rahul Sharma",
              role: "Software Engineer at TechCorp"
            },
            {
              quote: "The technical training was exceptional. I got placed within a month of completing the program!",
              author: "Priya Patel",
              role: "Data Analyst at DataVision"
            },
            {
              quote: "Their global education consulting made my dream of studying abroad a reality with minimal stress.",
              author: "Arjun Mehta",
              role: "Student at University of Toronto"
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#1a1a2e] p-8 rounded-xl border border-[#2a2a3c] shadow-lg"
            >
              <div className="text-yellow-400 text-2xl mb-4">"</div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="font-semibold text-white">{testimonial.author}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8" 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Shape Your Future with Pravinya
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Pravinya, we don't just teach skills — we help you discover your strengths, build your confidence, and pursue your dreams with purpose.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 bg-white text-[#4f46e5] font-semibold rounded-full shadow-xl transition-all"
            >
              <Link to="/contact">Let's Get Started</Link>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-xl transition-all"
            >
              Book a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0b0d15] text-white px-4 py-16 z-10 overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5 z-0">
          <h1 className="text-[18vw] font-black text-white">PRAVINYA</h1>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <img src={pravinyaLogo} alt="Pravinya Logo" className="h-8 mr-2" />
              Pravinya
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building leaders of tomorrow by nurturing today's talent with purpose-driven learning and global vision.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                    {social === 'facebook' && 'f'}
                    {social === 'twitter' && 't'}
                    {social === 'linkedin' && 'in'}
                    {social === 'instagram' && 'ig'}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Training</Link></li>
              <li><Link to="/placements" className="hover:text-white transition-colors">Placements</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                hello@pravinya.com
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +91 98765 43210
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                123 Learning Street, Knowledge City, India
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Pravinya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}