import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    title: "Multi-Domain Expertise",
    desc: "Education, Technology, and Real Estate",
    icon: "<>",
  },
  {
    title: "Client-Centric Approach",
    desc: "Tailored services to meet unique needs",
    icon: "<>",
  },
  {
    title: "Integrated Solutions",
    desc: "Cross-vertical collaboration for better outcomes",
    icon: "<>",
  },
  {
    title: "Committed to Excellence",
    desc: "Quality-driven processes across all brands",
    icon: "<>",
  },
];

// 👇 Block component
const Block = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const fromLeft = index % 4 === 0 || index % 4 === 1;

  return (
    <div ref={ref} className="relative my-20">
      {/* Connector line */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-1 h-28 bg-white opacity-30 z-0 ${
          fromLeft ? "left-4" : "right-4"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: fromLeft ? -100 : 100 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, x: 0 }
            : { opacity: 0, scale: 0.85, x: fromLeft ? -100 : 100 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 max-w-2xl mx-auto flex ${
          fromLeft ? "flex-row" : "flex-row-reverse"
        } items-center gap-6`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="text-4xl p-4 rounded-full border border-white shadow-lg"
        >
          {item.icon}
        </motion.div>

        <div className="text-left max-w-md">
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <p className="text-gray-300">{item.desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function WhySMGVentures() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen px-6 py-20 space-y-16">
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          headingInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#EA414A] lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-bold text-center mb-16 tracking-wider"
      >
        Why SMG Ventures?
      </motion.h1>

      {data.map((item, i) => (
        <Block key={i} item={item} index={i} />
      ))}
    </div>
  );
}
