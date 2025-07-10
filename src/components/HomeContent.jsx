import Navbar from './Navbar';
import { motion } from "framer-motion";


const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, className = "" }) => {
  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4 ${className}`}
    >
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
  return (
    <div
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
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-4 sm:px-6 gap-10 md:gap-20 font-['Roboto'] transition-all duration-300">
          {/* Left: Title and Subtitle */}
          <div className="flex flex-col items-start text-left w-full md:w-3/5 pl-4 sm:pl-10 md:pl-20">
            <FlipLink className="text-[#EA414A]">SMG</FlipLink>
            <FlipLink>Ventures</FlipLink>
            <h2 className="text-base sm:text-lg md:text-xl italic text-gray-300">Innovating Across Industries</h2>
          </div>

          {/* Right: Paragraph */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
  
  
  className="w-full md:w-2/5 text-base sm:text-lg md:text-xl text-gray-200 px-4 sm:px-6 md:pr-12 text-justify transition-all duration-300"
>
  <p>
    At SMG Ventures, innovation is the heartbeat of everything we do. Spanning diverse sectors—education,
    technology, and real estate—we are committed to delivering transformative solutions that shape the future.
    Through our flagship brands—Pravinya, Sykneski, and SMG Builders &amp; Constructers—we empower individuals,
    businesses, and communities with forward-thinking services tailored for a rapidly evolving world.
  </p>
</motion.div>

        </div>
         
      </div>
             
    </div>
  );
}

export default HomeContent;
