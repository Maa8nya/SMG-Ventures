import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Generate staggered "brick wall" cards
const generateCards = () => {
  const totalCards = 20;      
  const cols = 6;
  const xGap = 400;
  const yGap = 120;

  const cards = [];

  for (let i = 0; i < totalCards; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;

    const xOffset = row % 2 === 1 ? xGap / 2 : 0;
    const top = row * yGap;
    const left = col * xGap + xOffset;

    cards.push({
      id: i + 1,
      top: `${top}px`,
      left: `${left}px`,
    });
  }

  return cards;
};
const cards = generateCards();

const Card = ({ top, left }) => (
  <motion.div
    className="absolute w-[120px] h-[80px] bg-[#26313a] rounded-[5px] flex items-center justify-center border border-gray-700 opacity-40"
    style={{ top, left }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  </motion.div>
);

const CollaborationSection = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#1b252c] text-white font-inter relative overflow-hidden">
      {/* Draggable top quarter */}
      <div className="w-full h-[40vh] overflow-hidden relative">
        <motion.div ref={constraintsRef} className="absolute inset-0">
          <motion.div
            className="absolute w-full h-[400px]"
            drag
            dragConstraints={{ top: -100, bottom: 100, left: -400, right: 400 }}
            dragElastic={0}
          >
            {cards.map((card) => (
              <Card key={card.id} top={card.top} left={card.left} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main content - bottom center */}
      <div className="absolute top-[calc(40vh)] w-full flex items-center justify-center z-10">

        <div className="flex flex-col items-center justify-center text-center max-w-2xl px-4 py-8  ">
          <motion.h1
            className="text-[34px] leading-[46px] tracking-[0px] text-[#ea414a] font-light font-['Roboto'] text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Collaboration
          </motion.h1>
          <motion.p
            className="mt-4 w-full text-[18px] tracking-[-1px] leading-[26px] text-[#9dafbd] font-normal font-['Roboto'] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            But Brooke Chaffin and Catherine Connors are looking to change that with
            the introduction of Maverick, a social network that connects young girls
            with female mentors to express their creativity in a safe space.
          </motion.p>
          <motion.button
            className="mt-6 w-[120px] h-[40px] rounded-[5px] drop-shadow-[0_10px_11.5px_rgba(0,0,0,0.2)] bg-[#ea414a] text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
