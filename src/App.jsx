import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Homepage from './components/Homepage';
import HeroSection from './components/HeroSection';
import ServicesCarousel from './components/ServicesCarousel';
import ResearchReports from './components/ResearchReports';
import TestimonialsSection from './components/TestimonialsSection';
import ScrollRevealHero from './components/ScrollRevealHero';
import ContactSection from "./components/ContactSection";
import CollaborationSection from "./components/CollaborationSection";

function App() {
  return (
    <div className="bg-[#1b252c]  text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Homepage />
          <HeroSection />
          <ServicesCarousel />
          <ResearchReports />
          <TestimonialsSection />
          <ScrollRevealHero />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/collaboration" element={<CollaborationSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
