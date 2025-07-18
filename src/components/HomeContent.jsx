import Navbar from './Navbar';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, className = "" }) => {
  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4 ${className}`}
    >
      {/* Top layer */}
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block transition-transform duration-300"
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Bottom layer */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block transition-transform duration-300"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};

function HomeContent() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-[#DFE2E1] relative overflow-hidden transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url('/bg.png'), conic-gradient(at top left, #0c0c0c, #1a1a1a, #0c0c0c)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
      }}
    >
      <Navbar />
      <div className="px-[20px] py-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-4 sm:px-6 gap-10 md:gap-20 font-['Roboto'] transition-all duration-300">
          {/* Left: Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left w-full md:w-3/5 pl-4 sm:pl-10 md:pl-20"
          >
            <FlipLink className="text-[#EA414A]">SMG</FlipLink>
            <FlipLink>Ventures</FlipLink>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl italic text-gray-300"
            >
              &nbsp;&nbsp;Innovating Across Industries
            </motion.h2>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-2/5 text-base sm:text-lg md:text-xl text-gray-200 px-4 sm:px-6 md:pr-12 text-justify"
          >
            <p>
              At SMG Ventures, innovation is the heartbeat of everything we do. Spanning diverse sectors—
              education, technology, and real estate—we are committed to delivering transformative solutions
              that shape the future. Through our flagship brands—Pravinya, Skyneski, and SMG Builders &
              Constructers—we empower individuals, businesses, and communities with forward-thinking services
              tailored for a rapidly evolving world.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;