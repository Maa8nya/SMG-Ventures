import { useState } from "react";
import Intro from "./Intro"; // your animated intro component
import HomeContent from "./HomeContent";
import Homepage from './Homepage';
import HeroSection from './HeroSection';
import ServicesCarousel from './ServicesCarousel';
import ResearchReports from './ResearchReports';
import TestimonialsSection from './TestimonialsSection'; 
import ScrollRevealHero from './ScrollRevealHero';
import Footer from './Footer';
import ContactSection from "./ContactSection";
import ResponseCard from "./ResponseCard";
import WhySMGVentures from "./WhySMGVentures";
import CollaborationSection from "./CollaborationSection";

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <Intro onFinish={() => setShowMainContent(true)} />
      ) : (
        <div>
          <HomeContent />
        <Homepage />
          <HeroSection />
          <ServicesCarousel />
          <ResearchReports />
          <TestimonialsSection />
          <WhySMGVentures/>
          <ScrollRevealHero />
      <Footer />
        </div>
       
      )}
    </>
  );
}
