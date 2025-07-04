import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../images/pravinya-logo.png";
import img2 from "../images/skyneski-logo.png";
import img3 from "../images/smg-logo.jpg";

const images = [img1, img2, img3];

export default function HeroSection() {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [paused, setPaused] = useState(false); // New state to toggle rotation

  // Rotate every 3 seconds if not paused
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setPositions(([a, b, c]) => [c, a, b]);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const getImage = (index) => images[positions[index]];

  return (
    <div className="min-h-screen bg-[#141d26] flex items-center justify-center px-8 py-16 relative overflow-hidden">
      {/* Top Box */}
      <motion.div
        key={positions[1]}
        className="hidden md:block absolute top-8 right-16 w-72 h-32 bg-[#1f2937] rounded-md overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={getImage(1)}
          alt="Top"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Bottom Box */}
      <motion.div
        key={positions[2] + "-bottom"}
        className="hidden md:block absolute bottom-8 right-16 w-80 h-36 bg-[#1f2937] rounded-md overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={getImage(2)}
          alt="Bottom"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            From shaping careers to engineering platforms —<br />
          <span className="text-red-500">we build the future.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
             SMG Ventures empowers innovation across education, technology, and infrastructure with purpose-driven impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-6 py-3 bg-white text-gray-800 rounded shadow hover:bg-gray-200 transition"
          >
            More Info
          </motion.button>
        </motion.div>

        {/* Main Red Box */}
        <motion.div
          key={positions[0] + "-main"}
          className="relative bg-red-500 w-full h-72 md:h-80 rounded-lg flex items-center justify-center shadow-2xl z-10 overflow-hidden cursor-pointer"
          onClick={() => setPaused((prev) => !prev)} // Toggle pause on click
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.3,
          }}
        >
          <motion.img
            src={getImage(0)}
            alt="Main"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Text */}
      <motion.div
        className="absolute bottom-4 text-white text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        
      </motion.div>
    </div>
  );
}
