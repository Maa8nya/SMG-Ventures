import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "A Great Place to Work®",
    desc: "Ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list. This recognition is based on feedback from our people—measuring their level of trust, pride and camaraderie at work. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet commodo metus.",
    link: "See related awards →",
    color: "bg-red-600",
    bg: "bg-[url('/red-bg.png')]",
    style: { top: "100%", left: "10%" }
  },
  {
    title: "The Top Consulting Firm",
    desc: "Awarded for exceptional consulting services with a global impact. Trusted by Fortune 500 companies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur sit amet quam id urna malesuada tincidunt.",
    link: "Explore our rankings →",
    color: "bg-purple-700",
    bg: "bg-[url('/purple-bg.png')]",
    style: { top: "180%", right: "15%" }
  },
  {
    title: "An Influential Innovator",
    desc: "Recognized for groundbreaking innovations across industries, shaping the future with technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lacus vel enim ultrices finibus vel non arcu. Cras commodo, augue vitae dapibus ultrices.",
    link: "Discover our innovations →",
    color: "bg-blue-600",
    bg: "bg-[url('/blue-bg.png')]",
    style: { top: "260%", left: "15%" }
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section
      className="relative h-[300vh] text-white"
      style={{ backgroundColor: "#1A232B" }}
      ref={ref}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <h2 className="text-7xl font-bold text-center z-10 mt-20 text-white">
          Certifications
        </h2>

        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full z-20"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className={`group absolute w-[28rem] h-72 rounded-xl shadow-2xl p-6 
                ${card.color} ${card.bg} bg-cover bg-center bg-blend-multiply overflow-hidden
                hover:brightness-110 transition-all duration-500`}
              style={card.style}
            >
              {/* Title always visible */}
              <div className="absolute bottom-6 left-6 right-6 font-bold text-xl text-white transition-opacity duration-500 group-hover:opacity-0">
                {card.title}
              </div>

              {/* Text slides up on hover */}
              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-sm
                  text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <p className="mb-4 text-white">{card.desc}</p>
                <span className="font-semibold text-white">{card.link}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}