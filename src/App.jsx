import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactSection from "./components/ContactSection";
import CollaborationSection from "./components/CollaborationSection";

function App() {
  return (
    <div className="bg-[#141d26]  text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/collaboration" element={<CollaborationSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
