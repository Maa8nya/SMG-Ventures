import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    title: "Multi-Domain Expertise",
    desc: "Education, Technology, and Real Estate",
    icon: "</>",
  },
  {
    title: "Client-Centric Approach",
    desc: "Tailored services to meet unique needs",
    icon: "</>",
  },
  {
    title: "Integrated Solutions",
    desc: "Cross-vertical collaboration for better outcomes",
    icon: "</>",
  },
  {
    title: "Committed to Excellence",
    desc: "Quality-driven processes across all brands",
    icon: "</>",
  },
];

export default function WhySMGVentures() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen px-[60px] py-20 flex flex-col justify-center"
      style={{
        backgroundImage: `url('/bg.png'), conic-gradient(at top left, #0c0c0c, #1a1a1a, #0c0c0c)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-white lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-bold text-center mb-16 tracking-wider"
      >
        Why SMG Ventures<span className="text-[#EA414A]">?</span>
      </motion.h1>

      <div className="space-y-16">
        {data.map((item, i) => {
          const fromLeft = i % 4 === 0 || i % 4 === 1;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0 
              } : { 
                opacity: 0, 
                x: fromLeft ? -100 : 100 
              }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative z-10 w-full flex ${
                fromLeft ? "flex-row" : "flex-row-reverse"
              } items-center gap-6`}
            >
              <motion.div
                className={`text-4xl p-4 rounded-full border border-white shadow-lg text-[#EA414A] ${
                  fromLeft ? "ml-4" : "mr-4"
                }`}
                animate={{ rotate: isInView ? 360 : 0 }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 6, ease: "linear" }
                }}
              >
                {item.icon}
              </motion.div>

              <div className={`text-left max-w-md ${fromLeft ? "ml-4" : "mr-4"}`}>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}