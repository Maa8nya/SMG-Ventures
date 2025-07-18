import { useState, useEffect } from "react";
import Intro from "./Intro";
import HomeContent from "./HomeContent";
import VerticalScroll from './VerticalScroll';
import ResearchReports from './ResearchReports';
import Footer from './Footer';
import WhySMGVentures from "./WhySMGVentures";
import Certifications from "./Certification";

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has already been shown
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      setShowIntro(false);
      setShowMainContent(true);
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    setShowMainContent(true);
  };

  return (
    <>
      {showIntro ? (
        <Intro onFinish={handleIntroFinish} />
      ) : (
        <div className="min-h-screen bg-[conic-gradient(at_top_left,_#0c0c0c,_#1a1a1a,_#0c0c0c)] bg-no-repeat bg-cover bg-fixed text-[#DFE2E1] overflow-x-hidden ">
          <HomeContent />
          
          <ResearchReports />
          <WhySMGVentures />
          <Certifications />
          <Footer />
        </div>
      )}
    </>
  );
}
