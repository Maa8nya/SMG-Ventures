import React from 'react';
import { motion } from 'framer-motion';
import BubbleButton from './BubbleButton';

const ContactSection = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1, // Stagger children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter flex flex-col items-center justify-center p-4">
      <motion.div
        className="max-w-xl w-full bg-gray-800 p-8 rounded-lg shadow-2xl flex flex-col items-center"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-gray-400 text-sm tracking-widest uppercase mb-2"
          variants={itemVariants}
        >
          Contact
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          variants={itemVariants}
        >
          Get in touch
        </motion.h2>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Your company"
              className="w-full p-4 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="tel"
              placeholder="Your phone"
              className="w-full p-4 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
          </motion.div>

          <motion.div className="md:col-span-2 mt-4" variants={itemVariants}>
            <BubbleButton>
                Contact Us
            </BubbleButton>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
