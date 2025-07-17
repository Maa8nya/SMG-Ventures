import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BubbleButton from './BubbleButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200 }
    },
    hover: { scale: 1.02 },
    focus: { scale: 1.03, x: 5 }
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-inter flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <motion.div
        className="max-w-2xl w-full bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50 flex flex-col items-center relative z-10"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success message */}
        {submitSuccess && (
          <motion.div 
            className="w-full mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-center"
            variants={successVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-green-300 font-medium">
              Thank you! Your message has been sent. We'll get back to you soon.
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.p
            className="text-red-400 text-sm tracking-widest uppercase mb-2 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500"
            whileHover={{ scale: 1.01 }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-md mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Have a project in mind or want to discuss potential opportunities? Drop us a message!
          </motion.p>
        </motion.div>

        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} whileHover="hover">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-4 rounded-xl bg-gray-700/70 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-gray-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover="hover">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              className="w-full p-4 rounded-xl bg-gray-700/70 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-gray-500"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover="hover">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-4 rounded-xl bg-gray-700/70 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-gray-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover="hover">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone"
              className="w-full p-4 rounded-xl bg-gray-700/70 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-gray-500"
            />
          </motion.div>

          <motion.div className="md:col-span-2" variants={itemVariants} whileHover="hover">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="4"
              className="w-full p-4 rounded-xl bg-gray-700/70 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:border-gray-500 resize-none"
              required
            />
          </motion.div>

          <motion.div 
            className="md:col-span-2 mt-2 flex flex-col items-center" 
            variants={itemVariants}
          >
            <BubbleButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </BubbleButton>
            
            <motion.p 
              className="text-gray-500 text-sm mt-4 text-center"
              whileHover={{ scale: 1.02 }}
            >
              We typically respond within 24 hours
            </motion.p>
          </motion.div>
        </form>
      </motion.div>
      
      {/* Social links */}
      <motion.div 
        className="flex gap-4 mt-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
          <motion.a
            key={social}
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ y: -3, color: "#EF4444" }}
            whileTap={{ scale: 0.95 }}
          >
            {social}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactSection;