'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import teamImage from '../images/your-team.png';

export default function ScrollRevealHero({
  imageSrc = teamImage,
  subheading = 'Careers',
  heading = 'Grow your future\nfrom the heart of innovation.',
  bgColor = 'bg-[#141d26]',
  textColor = 'text-white',
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 0.95]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.3, 0.7], [300, 0]);

  return (
    <>
      <section ref={containerRef} className={`relative h-[200vh] ${bgColor}`}>
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 md:px-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12">

            {/* Animated Image */}
            <motion.div
              style={{
                scale: imageScale,
                x: imageX,
                transformOrigin: 'center center',
              }}
              className="w-full md:w-[60%] h-[300px] md:h-[500px] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md"
            >
              <img
                src={imageSrc}
                alt="Hero"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Animated Text */}
            <motion.div
              style={{ x: textX, opacity: textOpacity }}
              className="w-full md:w-[34%] text-center md:text-left space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-red-500 font-medium">
                {subheading}
              </h3>
              <h2
                className={`whitespace-pre-line text-3xl md:text-5xl font-extrabold leading-snug ${textColor}`}
              >
                {heading}
              </h2>
              <p className="text-gray-400 text-sm md:text-base pt-2">
                Join our mission to fuel innovation and drive transformation across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
