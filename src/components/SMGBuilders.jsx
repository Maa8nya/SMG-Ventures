import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const services = [
  {
    title: "Turnkey Construction",
    desc: "Design to delivery — we manage it all with quality and precision.",
  },
  {
    title: "Land Development",
    desc: "Transforming raw land into high-potential real estate assets.",
  },
  {
    title: "Residential & Commercial",
    desc: "Creating beautiful homes and future-ready commercial spaces.",
  },
  {
    title: "Real Estate Consulting",
    desc: "Expert investment advice, legal support & market analysis.",
  },
  {
    title: "Buy & Sell Property",
    desc: "Seamless transactions with trust and transparency.",
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
    <div className="bg-[#0a0f1a] text-white">
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
      className="relative min-h-screen bg-gradient-to-br from-[#0e1a2b] via-[#0a1220] to-[#0a0f1a] overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-l border-gray-700"
            style={{
              left: `${(i + 1) * 5}%`,
              height: '100%'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Constructors</span>
          </motion.h1>

          <motion.em
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-xl md:text-2xl text-blue-300 mb-8 font-normal"
          >
            Building Dreams, Creating Assets
          </motion.em>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed"
          >
            At SMG Builders & Constructors – the real estate and construction vertical of SMG Ventures – we turn your visions into tangible value. Whether you're planning to buy, sell, or build, we provide expert-driven, transparent, and trusted services for every step of your real estate journey. From elegant residential spaces to future-ready commercial projects, we help you build more than structures — we help you build your future.
          </motion.p>
        </div>

        <div className="md:w-1/3 mt-16 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"></div>
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
    <section className="relative py-32 overflow-hidden bg-[#0a0f1a]">
      {/* Architectural blueprint pattern */}
      <div className="absolute inset-0 opacity-[3%]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 40 L 40 0" stroke="#3b82f6" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
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
              className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mr-4"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-blue-400 font-medium tracking-widest text-sm"
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
            <div className="absolute -left-8 -top-8  h-32 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
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
              <div className="absolute -inset-4 bg-blue-500/10 rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  <strong className="text-white">SMG Builders & Constructors</strong> isn't just another real estate firm — it's the visionary execution arm of SMG Ventures. We blend engineering, aesthetics, and ethics to craft spaces that feel timeless and trusted.Our interdisciplinary team brings architecture, law, and development together to deliver homes and commercial environments that go beyond the blueprint. You don't just get a building — you get a legacy of value.
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
  const [hoveredIndex, setHoveredIndex] = useState(null); // which card is hovered
  const [expandedIndex, setExpandedIndex] = useState(null); // which card has finished expanding

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-16">
        Our Services
      </h2>

      <div className="flex justify-center gap-4 overflow-x-auto no-scrollbar">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setExpandedIndex(null);
              }}
              animate={{ width: isHovered ? 280 : 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={() => {
                // Only set expanded if hovered and it's still hovered
                if (isHovered) setExpandedIndex(index);
              }}
              className="h-[420px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-700 relative overflow-hidden border border-gray-600 flex flex-col justify-center items-center cursor-pointer"
            >
              {/* Vertical title (only when not expanded) */}
              <AnimatePresence>
                {!isExpanded && (
                  <motion.div
                    key="vertical-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "center",
                      whiteSpace: "nowrap",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#60a5fa",
                    }}
                  >
                    {service.title}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main content (only when expanded) */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 text-center"
                  >
                    <h3 className="text-xl font-bold text-blue-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


function WhySMG() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0f1a]">
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            opacity: Math.random() * 0.3 + 0.1
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
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Why SMG Realty?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 h-full border border-gray-800 overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
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