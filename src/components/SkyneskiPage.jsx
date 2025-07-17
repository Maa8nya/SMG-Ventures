import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import skyneskiLogo from '../images/skyneski.png';
import Navbar from './Navbar';

// Import industry images
import techIndustry from '../images/tech-industry.png';
import ecommerceIndustry from '../images/ecommerce-industry.png';
import healthcareIndustry from '../images/healthcare-industry.png';
import educationIndustry from '../images/education-industry.png';
import fintechIndustry from '../images/fintech-industry.png';
import manufacturingIndustry from '../images/manufacturing-industry.png';
import logisticsIndustry from '../images/logistics-industry.png';
import startupIndustry from '../images/startup-industry.png';

export default function SkyneskiPage() {
  const ref = useRef();
  const expertiseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToExpertise = () => {
    expertiseSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative"
    >
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-50" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 5 + 1 + 'px',
              height: Math.random() * 5 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-24 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            duration: 1,
            ease: [0.2, 0.8, 0.2, 1]
          }}
          className="relative mb-16"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ 
              y: 0,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                transition: { duration: 1 }
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(99, 102, 241, 0.2)",
                  "0 0 0 15px rgba(99, 102, 241, 0)",
                  "0 0 0 30px rgba(99, 102, 241, 0)"
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full pointer-events-none"
            />
            <img
              src={skyneskiLogo}
              alt="Skyneski Logo"
              className="relative w-48 h-48 md:w-64 md:h-64 object-contain bg-white/5 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/10 z-10"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
          style={{ y: textY }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#6366f1]">
              Driven by Data.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#4f46e5]">
              Inspired by Innovation.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking technology company offering intelligent, scalable, and secure solutions that empower businesses to thrive in the digital age.
          </motion.p>
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

      <section className="relative py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-left mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-0.5 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-[#3b82f6] uppercase tracking-widest text-sm font-medium"
              >
                Our Difference
              </motion.span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-[#3b82f6]"
            >
              About Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 0.77, 0.47, 0.97],
              delay: 0.4
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-[#0f0f15] border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md shadow-xl text-gray-300 cursor-default overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#3b82f6] blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-20 bottom-0 w-40 h-40 rounded-full bg-[#3b82f6] blur-xl"
            />
            
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="font-semibold text-white"
                >
                  Skyneski
                </motion.span> isn't just another tech firm — we're the strategic innovation partner for businesses navigating digital transformation. We blend cutting-edge technology, data intelligence, and ethical design to build solutions that feel intuitive and future-proof.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed mt-6"
              >
                Our interdisciplinary team brings together software engineering, AI, and business strategy to deliver systems that go beyond requirements. You don't just get code — you get a competitive advantage engineered for growth.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>  

      {/* Services Section */}
      <section ref={expertiseSectionRef} className="relative py-32 px-8 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#6366f1]">
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
                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              },
              {
                title: "Website Design & Development",
                description: "From sleek front-end designs to powerful back-end frameworks, we create engaging websites that convert and perform.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              },
              {
                title: "BPO/KPO Services",
                description: "Our Business Process and Knowledge Process Outsourcing services help you improve operational efficiency and focus on core growth.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              {
                title: "Server & Infrastructure Management",
                description: "Ensure uptime, speed, and security with our proactive server and infrastructure management solutions.",
                icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              },
              {
                title: "Database Management & Security",
                description: "Data is the core of your business. We secure, structure, and optimize your databases to enhance performance and protection.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              },
              {
                title: "Cloud Solutions & Technical Support",
                description: "Migrate, manage, and maintain with confidence. Our cloud and tech support solutions are designed for reliability and agility.",
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
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
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-[#0f0f15] border border-white/10 rounded-xl p-8 h-full hover:border-[#4f46e5]/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      whileHover={{ rotate: 10 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <svg className="w-8 h-8 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section with Images */}
      <section className="relative py-32 px-8 bg-[#0f0f15] backdrop-blur-sm border-t border-b border-white/5">
        <div className="max-w-8xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#4f46e5]">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions adapt to your sector's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Information Technology",
                image: techIndustry,
                description: "Cutting-edge solutions for tech companies"
              },
              {
                name: "E-Commerce",
                image: ecommerceIndustry,
                description: "Scalable platforms for online retailers"
              },
              {
                name: "Healthcare",
                image: healthcareIndustry,
                description: "Secure systems for medical providers"
              },
              {
                name: "Education",
                image: educationIndustry,
                description: "Innovative learning technologies"
              },
              {
                name: "FinTech",
                image: fintechIndustry,
                description: "Financial technology solutions"
              },
              {
                name: "Manufacturing",
                image: manufacturingIndustry,
                description: "Industrial automation systems"
              },
              {
                name: "Logistics",
                image: logisticsIndustry,
                description: "Supply chain optimization"
              },
              {
                name: "Startups & SMBs",
                image: startupIndustry,
                description: "Growth-focused technology"
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[#4f46e5] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-8 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
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
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-[#4f46e5] font-semibold rounded-full hover:bg-white/90 transition shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">
                <Link to="/contact">Contact Us</Link>
              </span>
              <span className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="relative bg-[#0a0a0a] border-t border-white/5 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <img src={skyneskiLogo} alt="Skyneski Logo" className="w-10 h-10 object-contain" />
                </motion.div>
                <span className="text-xl font-bold">SYKNESKI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with scalable, secure, and intelligent digital solutions.
              </p>

              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://www.instagram.com/smg_ventures?igsh=eXFiNzdsamZvOW9q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E1306C] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9C18.433 4 20 5.567 20 7.5v9c0 1.933-1.567 3.5-3.5 3.5h-9C5.567 20 4 18.433 4 16.5v-9C4 5.567 5.567 4 7.5 4zm9.25 2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#6366f1]">Services</h3>
              <ul className="space-y-3">
                {[
                  "Custom Software Development",
                  "Website Design",
                  "Cloud Solutions",
                  "Database Management",
                  "IT Consulting",
                  "Technical Support"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button 
                      onClick={scrollToExpertise}
                      className="text-gray-400 hover:text-white transition-colors text-left w-full"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#6366f1]">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Our Services", "Contact"].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#6366f1]">Contact</h3>
              <address className="not-italic text-gray-400 space-y-3">
                <p>1st Floor, 6th Cross, VV Nagara</p>
                <p>Mandya, Karnataka-571401</p>
                <p>Email: smgventures18@gmail.com</p>
                <p>Phone: +91 6366631311</p>
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