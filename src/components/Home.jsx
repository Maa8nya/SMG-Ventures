import { useState } from "react";
import Intro from "./Intro"; // your animated intro component
import HomeContent from "./HomeContent";

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
      )}
    </>
  );
}
