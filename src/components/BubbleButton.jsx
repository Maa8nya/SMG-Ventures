import React from 'react';
import { motion } from 'framer-motion';

const circleVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: (i) => ({
    scale: [0, 1.5, 0],
    opacity: [0, 1, 0],
    x: [0, (i % 2 === 0 ? -1 : 1) * 20],
    y: [0, (i < 3 ? -1 : 1) * 20],
    transition: {
      duration: 0.8,
      delay: i * 0.05,
      ease: 'easeInOut',
    },
  }),
};

const BubbleButton = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        className="relative z-10 px-6 py-3 bg-[#ea414a] text-white font-semibold rounded-md overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </motion.button>

      {/* Bubble Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#ea414a] rounded-full"
          style={{
            top: '50%',
            left: '50%',
            zIndex: 0,
          }}
          custom={i}
          variants={circleVariants}
          initial="initial"
          animate={hovered ? 'animate' : 'initial'}
        />
      ))}
    </div>
  );
};

export default BubbleButton;
