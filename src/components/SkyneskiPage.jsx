import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import skyneskiLogo from '../images/skyneski-logo.png';

export default function SkyneskiPage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-[#0a0a14] text-white font-sans overflow-hidden relative"
    >
      {/* Animated cosmic background */}
      <motion.div 
        className="fixed inset-0 bg-[url('https://assets.codepen.io/13471/sparkles.gif')] opacity-5 pointer-events-none"
        style={{ y: backgroundY }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-24 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00d9ff] to-[#00ffa3] rounded-full blur-xl opacity-20 animate-pulse"></div>
          <img
            src={skyneskiLogo}
            alt="Skyneski Logo"
            className="relative w-48 h-48 md:w-64 md:h-64 object-contain bg-white/5 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/10 z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
          style={{ y: textY }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#00ffa3] to-[#e11d48] animate-text">
              Driven by Data.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-[#00ffa3] to-[#00d9ff] animate-text">
              Inspired by Innovation.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company offering intelligent, scalable, and secure solutions that empower businesses to thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[#00d9ff] to-[#00a3ff] rounded-full font-semibold shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Solutions</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00a3ff] to-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(225, 29, 72, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#0a0a14] border border-[#e11d48] text-white rounded-full font-semibold hover:bg-[#e11d48]/10 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Our Process</span>
              <span className="absolute inset-0 bg-[#e11d48]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-8 bg-[#0a0a14]/80 backdrop-blur-sm border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#00ffa3]">
                  About Skyneski
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At SYKNESKI, we believe that true innovation begins with insight. We specialize in delivering custom-built, secure, and scalable technology solutions driven by deep data analysis and an understanding of our clients' unique challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a startup aiming for fast growth or an enterprise scaling globally, we tailor our services to match your pace, purpose, and vision. We don't just develop — we partner with you to transform.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00d9ff] to-[#00ffa3] rounded-xl blur-xl opacity-20"></div>
              <div className="relative bg-[#0a0a14]/70 border border-white/10 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-[#00ffa3]">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  {[
                    "Data-Driven Decision Making",
                    "Future-Proof & Scalable Architecture",
                    "End-to-End IT Services Under One Roof",
                    "Focus on Security, Speed & Simplicity"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#00d9ff] mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-8 bg-[#0a0a14] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#00ffa3]">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to propel your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "We design and develop tailor-made software solutions built to meet your specific business goals — intuitive, intelligent, and scalable.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Website Design & Development",
                description: "From sleek front-end designs to powerful back-end frameworks, we create engaging websites that convert and perform.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "BPO/KPO Services",
                description: "Our Business Process and Knowledge Process Outsourcing services help you improve operational efficiency and focus on core growth.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: "Server & Infrastructure Management",
                description: "Ensure uptime, speed, and security with our proactive server and infrastructure management solutions.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                )
              },
              {
                title: "Database Management & Security",
                description: "Data is the core of your business. We secure, structure, and optimize your databases to enhance performance and protection.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
              {
                title: "Cloud Solutions & Technical Support",
                description: "Migrate, manage, and maintain with confidence. Our cloud and tech support solutions are designed for reliability and agility.",
                icon: (
                  <svg className="w-8 h-8 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d9ff] to-[#00ffa3] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-[#0a0a14]/70 border border-white/10 rounded-xl p-8 h-full backdrop-blur-sm hover:border-[#00d9ff]/30 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-[#00ffa3]">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-32 px-8 bg-[#0a0a14]/80 backdrop-blur-sm border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-[#e11d48]">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions adapt to your sector's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Information Technology",
              "E-Commerce",
              "Healthcare",
              "Education",
              "FinTech",
              "Manufacturing",
              "Logistics",
              "Startups & SMBs"
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#0a0a14]/70 border border-white/10 rounded-full hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]/30 transition-all backdrop-blur-sm"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-8 bg-gradient-to-br from-[#00d9ff] to-[#00a3ff] text-[#0a0a14] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://assets.codepen.io/13471/sparkles.gif')]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Build the Future Together</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Have a project in mind or a problem to solve? Talk to our experts today and discover how SYKNESKI can help you innovate smarter.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(10, 10, 20, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#0a0a14] text-white font-semibold rounded-full hover:bg-[#0a0a14]/90 transition shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-[#0a0a14]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="relative bg-[#0a0a14] border-t border-white/5 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={skyneskiLogo} alt="Skyneski Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold">SYKNESKI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with scalable, secure, and intelligent digital solutions.
              </p>

            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#00d9ff]">Services</h3>
              <ul className="space-y-3">
                {[
                  "Custom Software",
                  "Web Development",
                  "Cloud Solutions",
                  "Data Analytics",
                  "IT Consulting",
                  "Technical Support"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#00d9ff]">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#00d9ff]">Contact</h3>
              <address className="not-italic text-gray-400 space-y-3">
                <p>123 Tech Avenue</p>
                <p>San Francisco, CA 94107</p>
                <p>Email: info@skyneski.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Skyneski. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}