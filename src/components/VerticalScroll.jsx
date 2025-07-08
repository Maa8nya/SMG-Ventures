import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../images/pravinya-logo.png";
import img2 from "../images/skyneski-logo.png";
import img3 from "../images/smg-logo.jpg";

const services = [
  { title: "Pravinya", image: img1 },
  { title: "Sykneski", image: img2 },
  { title: "SMG Builders", image: img3 },
];

export default function HeroSection() {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setPositions(([a, b, c]) => [c, a, b]);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const getImage = (index) => services[positions[index]];

  return (
    <div className="min-h-screen bg-[#141d26] flex items-center justify-center px-8 py-16 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
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

        {/* Right - Vertical Logos */}
        <div className="flex flex-col gap-8 cursor-pointer" onClick={() => setPaused((prev) => !prev)}>
          {[0, 1, 2].map((i) => {
            const isCenter = i === 1;
            return (
              <motion.div
                key={i}
                className={`w-full h-64 md:h-72 flex items-center justify-center bg-[#1f2937] rounded-lg shadow-lg overflow-hidden ${
                  isCenter ? "ring-2 ring-red-400" : ""
                }`}
                animate={isCenter ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={
                  isCenter
                    ? { duration: 3, ease: "easeInOut", repeat: Infinity }
                    : {}
                }
              >
                <motion.img
                  src={getImage(i).image}
                  alt={getImage(i).title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
