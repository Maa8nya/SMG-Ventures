import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../images/pravinya-logo.png";
import img2 from "../images/skyneski-logo.png";
import img3 from "../images/smg-logo.jpg";

const services = [
  { image: img1 },
  { image: img2 },
  { image: img3 }
];

const cardVariants = {
  center: { 
    y: 0, 
    scale: 1, 
    opacity: 1,
    zIndex: 2
  },
  top: { 
    y: -220, 
    scale: 0.95, 
    opacity: 1,
    zIndex: 1
  },
  bottom: { 
    y: 220, 
    scale: 0.95, 
    opacity: 1,
    zIndex: 1
  }
};

export default function VerticalScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const getCardPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 1) % services.length) return 'bottom';
    if (index === (activeIndex - 1 + services.length) % services.length) return 'top';
    return 'hidden';
  };

  return (
    <div
      className="min-h-screen text-[#DFE2E1] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-12 py-16"
      style={{
        backgroundImage: `url('/bg.png'), conic-gradient(at top left, #0c0c0c, #1a1a1a, #0c0c0c)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6 text-center md:text-left px-2"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            From shaping careers to engineering platforms —<br />
            <span className="text-red-500">we build the future.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            SMG Ventures empowers innovation across education, technology, and infrastructure with purpose-driven impact.
          </p>
        </motion.div>

        {/* Right Image Cards */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative h-[660px] w-full flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {services.map((service, index) => {
            const position = getCardPosition(index);
            
            return (
              <motion.div
                key={`card-${index}`}
                className={`absolute w-full max-w-md rounded-lg overflow-hidden`}
                variants={cardVariants}
                initial="hidden"
                animate={position}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.5
                }}
              >
                <img
                  src={service.image}
                  alt="Client logo"
                  className="w-full h-full object-contain border-4 border-black rounded-lg shadow-lg"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}