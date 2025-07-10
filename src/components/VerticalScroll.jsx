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

  const [visibleImages, setVisibleImages] = useState(
    positions.map((i) => ({ key: 0, index: i }))
  );

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      const newPositions = [positions[2], positions[0], positions[1]];

      setVisibleImages([
        ...positions.map((p, i) => ({ key: keyIndex + 1, index: p })),
      ]);

      setPositions(newPositions);
      setKeyIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [positions, paused]);

  return (
    <div className="min-h-screen bg-[#141d26] flex items-center justify-center px-8 py-16 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left with scale-up */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            From shaping careers to engineering platforms —<br />
            <span className="text-red-500">we build the future.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            SMG Ventures empowers innovation across education, technology, and infrastructure with purpose-driven impact.
          </p>
        </motion.div>

        {/* Right with scale-up */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-8 cursor-pointer relative w-[85%] md:w-[75%] mx-auto"
          onClick={() => setPaused((prev) => !prev)}
        >
          {[0, 1, 2].map((i) => {
            const isCenter = i === 1;
            const currentService = services[positions[i]];

            return (
              <div
                key={`card-${i}`}
                className={`w-full h-56 md:h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden ${
                  isCenter ? " z-10" : "z-0 opacity-10"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${keyIndex}-${i}-${currentService.image}`}
                    src={currentService.image}
                    alt={currentService.title}
                    initial={{ opacity: 0.001 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.001 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
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
