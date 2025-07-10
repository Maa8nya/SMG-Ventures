import { useState } from "react";
import Intro from "./Intro"; // your animated intro component
import HomeContent from "./HomeContent";
import VerticalScroll from './VerticalScroll';
import ResearchReports from './ResearchReports';
import Footer from './Footer';
import WhySMGVentures from "./WhySMGVentures";
import Certifications from "./Certification";

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <Intro onFinish={() => setShowMainContent(true)} />
      ) : (
        <div className="min-h-screen bg-[conic-gradient(at_top_left,_#0c0c0c,_#1a1a1a,_#0c0c0c)] bg-no-repeat bg-cover bg-fixed text-[#DFE2E1]">
          <HomeContent />
          <VerticalScroll/>
          <ResearchReports />
          <WhySMGVentures />
          <Certifications />
      <Footer />
        </div>
       
      )}
    </>
  );
}