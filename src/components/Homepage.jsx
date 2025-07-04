import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import sampleVideo from '../assets/smg-video.mp4';
import Navbar from './Navbar'; 

export default function HomepageHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141d26] text-white font-sans">

      <Navbar /> 

      {/* HERO */}
      <div className="flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">SMG Ventures</h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              From shaping careers to transforming industries—SMG Ventures unites bold minds and smart tech under one digital roof.
              Whether it’s futuristic IT, immersive education, or infrastructure intelligence—we deliver revolution.
              <br /><br />
              Join us to embrace the beauty of code and the brilliance of innovation!
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="mt-8 px-8 py-4 bg-red-500 text-white font-medium rounded shadow hover:bg-red-600 transition-all">
              Get Started
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="flex justify-center md:justify-end cursor-pointer" onClick={togglePlay}>
            <div className="w-full md:w-[700px] aspect-video bg-[#1f2937] rounded-xl overflow-hidden shadow-2xl">
              <video ref={videoRef} src={sampleVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
