import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import Navbar from "./Navbar";

const services = [
    {
      title: "Turnkey Construction",
      desc: "Design to delivery — we manage it all with quality and precision.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Land Development",
      desc: "Transforming raw land into high-potential real estate assets.",
      image: "https://th.bing.com/th/id/R.7da97573a7f27a35ff450d09cbfeb597?rik=0%2f39qTO%2bUBdU%2bg&riu=http%3a%2f%2framarealestate.com.au%2fwp-content%2fuploads%2f2021%2f12%2fland-development.jpg&ehk=C7VUibrlk9alrODGH6QeFbkXAWFo8lwpTNerQ2uSyTc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Residential & Commercial",
      desc: "Creating beautiful homes and future-ready commercial spaces.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Real Estate Consulting",
      desc: "Expert investment advice, legal support & market analysis.",
      image: "https://www.360realtors.com/360assets/images/real-estate-consulting.jpg"
    },
    {
      title: "Buy & Sell Property",
      desc: "Seamless transactions with trust and transparency.",
      image: "https://www.stlouiscountymn.gov/portals/0/Library/Buying-Selling-Property2_1.jpg"
    },
  ];

const points = [
  "Integrated Real Estate & Construction Solutions",
  "Transparent, Client-First Approach",
  "Experienced Architects, Engineers & Legal Advisors",
  "On-Time Project Delivery",
  "High-Quality Materials & Workmanship",
  "Full Legal Compliance & Documentation",
];

export default function SMGBuilders() {
  return (
    <div className="bg-[#0d0a08] text-[#f5f1ee]">
      <Navbar />
      <HeroSection />
      <About />
      <OurServices />
      <WhySMG />
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-hidden bg-[#0d0a08]"
    >
      {/* Landscape-inspired background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base terrain curve */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1a120b] to-transparent"></div>
        
        {/* Mountain silhouette */}
        <svg 
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,300 L0,150 C150,250 300,200 450,220 C600,240 750,180 900,150 C1050,120 1200,120 1200,150 L1200,300 Z" 
            fill="#1a120b" 
            opacity="0.8"
          />
        </svg>
        
        {/* Construction site elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXR0ZXJuIGlkPSJjb25zdHJ1Y3Rpb24iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMTAwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBzdHJva2U9IiM4YjVhMmIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNSw1Ii8+CiAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjkwIiByPSIyIiBmaWxsPSIjOGI1YTJiIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9Ijk1IiByPSIxLjUiIGZpbGw9IiM4YjVhMmIiLz4KICAgIDxjaXJjbGUgY3g9IjYwIiBjeT0iODUiIHI9IjMiIGZpbGw9IiM4YjVhMmIiLz4KICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iOTIiIHI9IjIuNSIgZmlsbD0iI2IzOGI2ZCIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NvbnN0cnVjdGlvbikiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        
        {/* Subtle sun glow */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-[#b38b6d] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-32 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-2/3">
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            SMG Builders & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38b6d] to-[#8b5a2b]">
              Constructors
            </span>
          </motion.h1>

          <motion.em
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-xl md:text-2xl text-[#d2b48c] mb-8 font-normal"
          >
            Building Dreams, Creating Assets
          </motion.em>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-[#e6d5c3] max-w-3xl mb-10 leading-relaxed"
          >
            At SMG Builders & Constructors – the real estate and construction vertical of SMG Ventures – we turn your visions into tangible value. Whether you're planning to buy, sell, or build, we provide expert-driven, transparent, and trusted services for every step of your real estate journey.
          </motion.p>
        </div>

        <div className="md:w-1/3 mt-16 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#8b5a2b]/20 rounded-full blur-xl"></div>
            <motion.img
              src="./smg.svg"
              className="relative w-40 md:w-48 lg:w-56"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function About() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0d0a08]">
      {/* Wood plank pattern */}
      <div className="absolute inset-0 opacity-[3%]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <pattern id="plank-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
            <rect width="100" height="20" fill="#1a120b" />
            <path d="M0 10 L100 10" stroke="#3a2c1a" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#plank-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-20 h-0.5 bg-gradient-to-r from-[#8b5a2b] to-transparent mr-4"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[#b38b6d] font-medium tracking-widest text-sm"
            >
              OUR DIFFERENCE
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-32 bg-[#8b5a2b]/10 rounded-full filter blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38b6d] to-[#8b5a2b]">
                About Us
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#8b5a2b]/10 rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a120b]/50 to-[#140e08]/30 p-8 rounded-xl border border-[#3a2c1a] backdrop-blur-sm">
                <p className="text-lg text-[#e2d5d0] mb-6 leading-relaxed">
                  <strong className="text-white">SMG Builders & Constructors</strong> isn't just another real estate firm — it's the visionary execution arm of SMG Ventures. We blend engineering, aesthetics, and ethics to craft spaces that feel timeless and trusted.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OurServices() {
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-[#0f0a0a] to-[#140e0e] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-[#8b5a2b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#b38b6d]">Services</span>
          </h2>
          <p className="text-xl text-[#e6d5c3] max-w-2xl mx-auto">
            End-to-end solutions tailored to your construction and real estate needs
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="brick-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="none" stroke="#d97706" strokeWidth="0.3" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#brick-pattern)" />
            </svg>
          </div>
          
          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="relative group"
                style={{ y }}
              >
                <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl h-full border border-amber-900/50 overflow-hidden">
                  {/* Service Image with Hover Content */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      
                      <p className="text-gray-200">{service.desc}</p>
                    </div>
                  </div>
                  
                  {/* Always Visible Title */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function WhySMG() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0d0a08]">
      {/* Sawdust particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm bg-[#8b5a2b]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.3 + 0.1,
            rotate: Math.random() * 360
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            transition: {
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
      ))}

      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent mx-auto"></div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38b6d] to-[#8b5a2b]">
              Why SMG Builders?
            </span>
          </h2>
          <p className="text-xl text-[#d4a373] max-w-2xl mx-auto">
            We don't just build structures — we build long-term relationships and high-value assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-[#8b5a2b]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-b from-[#1a120b] to-[#140e08] rounded-xl p-8 h-full border border-[#3a2c1a] overflow-hidden">
                {/* Wood knot accent */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI1YTJiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwLDUiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI1YTJiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUsNSIvPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjVhMmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+Cjwvc3ZnPg==')] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#3a2c1a] rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-[#8b5a2b] rounded-full flex items-center justify-center text-[#f5f1ee] text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{point}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}