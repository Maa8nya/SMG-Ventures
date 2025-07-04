import { useState } from "react";
import Intro from "./Intro"; // your animated intro component
import HomeContent from "./HomeContent";
import Homepage from './components/Homepage';
import HeroSection from './components/HeroSection';
import ServicesCarousel from './components/ServicesCarousel';
import ResearchReports from './components/ResearchReports';
import TestimonialsSection from './components/TestimonialsSection';
import ScrollRevealHero from './components/ScrollRevealHero';
import ContactSection from "./components/ContactSection";
import ResponseCard from "./components/ResponseCard";
import CollaborationSection from "./components/CollaborationSection";

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <Intro onFinish={() => setShowMainContent(true)} />
      ) : (
        <HomeContent />
       <Homepage />
          <HeroSection />
          <ServicesCarousel />
          <ResearchReports />
          <TestimonialsSection />
          <ScrollRevealHero />
      <ResponseCard />
      )}
    </>
  );
}
