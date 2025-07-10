import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../images/pravinya-logo.png";
import img2 from "../images/skyneski-logo.png";
import img3 from "../images/smg-logo.jpg";

const services = [
  { title: "Pravinya", image: img1 },
  { title: "Sykneski", image: img2 },
  { title: "SMG Builders", image: img3 },
];


export default function VerticalScroll() {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [paused, setPaused] = useState(false);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      const newPositions = [positions[2], positions[0], positions[1]];
      setPositions(newPositions);
      setKeyIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [positions, paused]);

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
          className="flex flex-col gap-6 items-center w-full sm:w-4/5 md:w-[80%] mx-auto"
          onClick={() => setPaused((prev) => !prev)}
        >
          {[0, 1, 2].map((i) => {
            const isCenter = i === 1;
            const currentService = services[positions[i]];

            return (
              <div
                key={`card-${i}`}
                className={`w-full h-40 sm:h-48 md:h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  isCenter ? "z-10 opacity-100" : "z-0 opacity-10"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${keyIndex}-${i}-${currentService.image}`}
                    src={currentService.image}
                    alt={currentService.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
