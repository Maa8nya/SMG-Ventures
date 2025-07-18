import React from 'react';
import { motion } from 'framer-motion';
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
      'Skyneski drives digital transformation with custom software, secure cloud solutions, and data-driven strategies. From robust backend systems to scalable tech architectures, we empower businesses to innovate and grow with confidence.',
    image: skyneski,
  },
  {
    title: 'Building Dreams, Creating Assets.',
    subtitle:
      'SMG Builders delivers trust and quality in real estate and construction. Whether residential or commercial, we offer property consulting, land development, and turnkey projects—turning your vision into lasting value.',
    image: smg,
  },
];

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Reduced min width for smaller cards
  gap: '40px', // Increased gap
  padding: '60px',
  backgroundImage: `url('/bg.png'), conic-gradient(at top left, #0c0c0c, #1a1a1a, #0c0c0c)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundBlendMode: 'overlay',
};

const cardStyle = {
  position: 'relative',
  height: '380px', // Reduced from 450px
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
};

const imageLayerBase = {
  position: 'absolute',
  inset: 0,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: 'white', // Fills remaining space with white
  transition: 'opacity 0.4s ease',
  zIndex: 1,
};

const textLayerBase = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateX(100%)',
  transition: 'transform 0.4s ease',
  zIndex: 2,
};

const textContentStyle = {
  padding: '24px',
  textAlign: 'left',
  maxWidth: '90%',
};

const titleStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  marginBottom: '1rem',
  lineHeight: 1.4,
};

const subtitleStyle = {
  fontSize: '1.05rem',
  color: '#ccc',
  lineHeight: 1.6,
};

// Custom component to handle hover animation via React state
function ResearchCard({ report, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      key={index}
      style={cardStyle}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: index * 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...imageLayerBase,
          backgroundImage: `url(${report.image})`,
          opacity: hovered ? 0 : 1,
          filter: 'brightness(0.9)'
        }}
      ></div>

      <div
        style={{
          ...textLayerBase,
          transform: hovered ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div style={textContentStyle}>
          <h2 style={titleStyle}>{report.title}</h2>
          <p style={subtitleStyle}>{report.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchReports() {
  return (
    <div style={containerStyle} >
      {reports.map((report, index) => (
        <ResearchCard key={index} report={report} index={index} />
      ))}
    </div>
  );
}
