import { useState } from "react";
import Intro from "./Intro"; // your animated intro component
import HomeContent from "./HomeContent";
import VerticalScroll from './VerticalScroll';
import ResearchReports from './ResearchReports';
import Footer from './Footer';
import WhySMGVentures from "./WhySMGVentures";

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <Intro onFinish={() => setShowMainContent(true)} />
      ) : (
        <div>
          <HomeContent />
          <VerticalScroll/>
          <ResearchReports />
          <WhySMGVentures/>
      <Footer />
        </div>
       
      )}
    </>
  );
}