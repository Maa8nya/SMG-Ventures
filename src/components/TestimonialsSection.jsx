import { motion } from "framer-motion";

const features = [
  {
    title: "Multi-Domain Expertise",
    subtitle: "Education, Technology, and Real Estate",
  },
  {
    title: "Client-Centric Approach",
    subtitle: "Tailored services to meet unique needs",
  },
  {
    title: "Integrated Solutions",
    subtitle: "Cross-vertical collaboration for better outcomes",
  },
  {
    title: "Committed to Excellence",
    subtitle: "Quality-driven processes across all brands",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <div className="bg-[#141d26] text-white py-24 px-4 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-6">
          Why SMG Ventures?
        </h2>
        <p className="text-gray-300 text-xl md:text-2xl font-light">
          Innovation-driven solutions across industries, tailored for real impact.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 12px 40px rgba(255, 0, 80, 0.3)",
            }}
            className="bg-[#1f2937] rounded-2xl p-10 text-center transition-all duration-300 border border-[#2e3748] hover:border-red-500"
          >
            <h3 className="text-red-500 font-bold text-2xl md:text-3xl mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">{item.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
