import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactSection from "./components/ContactSection";
import CollaborationSection from "./components/CollaborationSection";
import SMGBuilders from "./components/SMGBuilders";
import SkyneskiPage from "./components/SkyneskiPage";
import PravinyaPage from "./components/Pravinya";

function App() {
  return (
    <div className="bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/collaboration" element={<CollaborationSection />} />
          <Route path="/smg-builders" element={<SMGBuilders/>}/>
          <Route path="/skyneski" element={<SkyneskiPage/>}/>
          <Route path="/pravinya" element={<PravinyaPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
