import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pravinyaImg from "../images/img1.png";
import sykneskiImg from "../images/img2.png";
import smgBuildersImg from "../images/img3.png";

const services = [
  {
    title: "Pravinya",
    description:
      "Upskilling students and professionals with workshops, certifications, internships, and overseas guidance. Building confident leaders ready for global careers.",
    image: pravinyaImg,
  },
  {
    title: "Sykneski",
    description:
      "Delivering smart, scalable digital solutions—from software development to cloud services—that drive data-powered business transformation.",
    image: sykneskiImg,
  },
  {
    title: "SMG Builders",
    description:
      "Trusted partners in real estate and construction, creating residential and commercial spaces with transparency, technical excellence, and lasting value.",
    image: smgBuildersImg,
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="relative w-full bg-[#141d26] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-72 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={services[index].image}
                alt={services[index].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-white space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-red-400">{services[index].title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{services[index].description}</p>
              <button className="mt-4 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-full text-sm font-medium transition">
                Read More →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 flex gap-4">
          <button
            onClick={prev}
            className="text-white text-2xl bg-black/40 hover:bg-black/70 rounded-full p-2 transition"
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-6 flex gap-4">
          <button
            onClick={next}
            className="text-white text-2xl bg-black/40 hover:bg-black/70 rounded-full p-2 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
