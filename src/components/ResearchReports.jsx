import React from 'react';
import { motion } from 'framer-motion';
import './ResearchReports.css';
import pravinya from '../images/pravinya.png';
import skyneski from '../images/skyneski.png';
import smg from '../images/smg.png';

const reports = [
  {
    title: 'Crafting Skills, Creating Leaders.',
    subtitle:
      'Pravinya empowers students and professionals with cutting-edge workshops, certifications, project mentorship, and career-focused internships. We bridge the gap between education and industry, making learners globally competent and future-ready.',
    image: pravinya,
  },
  {
    title: 'Driven by Data. Inspired by Innovation.',
    subtitle:
      'Sykneski drives digital transformation with custom software, secure cloud solutions, and data-driven strategies. From robust backend systems to scalable tech architectures, we empower businesses to innovate and grow with confidence.',
    image: skyneski,
  },
  {
    title: 'Building Dreams, Creating Assets.',
    subtitle:
      'SMG Builders delivers trust and quality in real estate and construction. Whether residential or commercial, we offer property consulting, land development, and turnkey projects—turning your vision into lasting value.',
    image: smg,
  },
];

export default function ResearchReports() {
  return (
    <div className="research-container" style={{ backgroundColor: "#141d26" }}>
      {reports.map((report, index) => (
        <motion.div
          key={index}
          className="research-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${report.image})` }}
          ></div>

          <div className="text-layer">
            <div className="text-content">
              <h2>{report.title}</h2>
              <p>{report.subtitle}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
