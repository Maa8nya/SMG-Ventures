import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// S-M-G glow animation variants
const glowVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "brightness(0.2)",
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: {
      delay: custom * 0.4,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function Intro({ onFinish }) {
  const [stage, setStage] = useState("glow");

useEffect(() => {
  const totalGlowTime = 3 * 0.4 + 0.9; // ~2.1s
  const fadeOutTime = 0.2;

  // Stage 1: Fade
  setTimeout(() => setStage("fade"), totalGlowTime * 1000);

  // Stage 2: Main
  setTimeout(() => {
    setStage("main");
  }, (totalGlowTime + fadeOutTime) * 1000);
}, [onFinish]);


  return (
    <div className="relative w-full min-h-screen bg-[#1b252c] overflow-hidden flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        {stage !== "main" ? (
          <motion.div
            key="glow"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] max-w-[300px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              {/* S */}
              <motion.img
                src="s.svg"
                alt="S"
                className="w-[88%] mb-[-17%] translate-x-[3%]"
                variants={glowVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              />
              {/* M + G */}
              <div className="flex justify-between w-full">
                <motion.img
                  src="m.svg"
                  alt="M"
                  className="w-[47.595%]"
                  variants={glowVariant}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                />
                <motion.img
                  src="g.svg"
                  alt="G"
                  className="w-[47.595%]"
                  variants={glowVariant}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
  key="main"
  className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl z-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Left: SMG Logo */}
  <motion.img
    src="smg.svg"
    alt="smg"
    className="w-[60%] max-w-[250px] md:w-[40%] md:max-w-[250px] h-auto"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* Right: Ventures + Tagline */}
  <div className="flex flex-col items-center gap-6 w-full md:w-[60%] max-w-[500px]">
    <motion.img
      src="ventures.svg"
      alt="ventures"
      className="w-full h-auto invert"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [30, 0, 0, -20],
      }}
      transition={{
        duration: 2.8,
        times: [0, 0.1, 0.9, 1],
        ease: "easeInOut",
        delay: 0.5,
      }}
    />

    <motion.img
      src="tagline.svg"
      alt="tagline"
      className="w-full h-auto invert"
      style={{ clipPath: "inset(0% 100% 0% 0%)" }}
      animate={{
        clipPath: [
          "inset(0% 100% 0% 0%)",
          "inset(0% 0% 0% 0%)",
          "inset(0% 0% 0% 0%)",
          "inset(0% 100% 0% 0%)",
        ],
      }}
      transition={{
        duration: 2.8,
        times: [0, 0.4, 0.7, 1],
        ease: "easeInOut",
        delay: 0.8,
      }}
      onAnimationComplete={() => {
        if (onFinish) onFinish();
      }}
    />
  </div>
</motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}
