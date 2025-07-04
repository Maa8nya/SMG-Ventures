import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ResearchReports.css';
import research1 from '../images/research1.png';
import research2 from '../images/research2.png';
import research3 from '../images/research3.png';
import research4 from '../images/research4.png';

const reports = [
  {
    title: 'Crafting Skills, Creating Leaders.',
    subtitle:
      'Pravinya upskills students & professionals with tech/non-tech workshops, internships, global guidance & psychometric assessments. Our goal is to bridge the gap between education and industry, building confident, capable leaders of tomorrow.',
    image: research1,
  },
  {
    title: 'Driven by Data. Inspired by Innovation.',
    subtitle:
      'Sykneski delivers full-stack digital & IT services—from cloud to backend—tailored for smart, scalable, secure solutions. We help organizations digitize intelligently, automate efficiently, and grow with purpose.',
    image: research2,
  },
  {
    title: 'Building Dreams, Creating Assets.',
    subtitle:
      'SMG Builders brings trust, transparency, and technical quality to real estate, with turnkey construction and consulting. Whether residential or commercial, we turn your vision into lasting value.',
    image: research3,
  },
  {
    title: 'Innovating Across Industries',
    subtitle:
      'SMG Ventures unites education, technology & real estate to deliver future-ready, cross-domain solutions. Through synergy and strategy, we drive transformation that’s scalable, sustainable, and impactful.',
    image: research4,
  },
];

const ResearchReports = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="research-container">
      {reports.map((report, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={index}
            className={`research-card ${isHovered ? 'hovered' : ''}`}
            style={{ backgroundImage: `url(${report.image})` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="overlay">
              <h2 className="title">{report.title}</h2>
              {isHovered && (
                <motion.p
                  className="description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {report.subtitle}
                </motion.p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ResearchReports;
