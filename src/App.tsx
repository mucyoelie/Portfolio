import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sibeBar";
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";
import About from "./pages/About";
import SkillsList from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Project";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  // State to toggle 3D background
  const [show3D, setShow3D] = useState(false);

  return (
    <Router>
      <div className="w-full h-full overflow-x-hidden font-raleway">
        
        {/* Sidebar with Orbit toggle */}
        <Sidebar onToggle3D={() => setShow3D(!show3D)} />

        {/* 3D stars background */}
        {show3D && <ThreeBackground />}

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<SkillsList/>}/>
          <Route path="/projects" element={<Projects />}/>
           <Route path="/contact" element={<Contact isSidebarOpen={true} />}/>
          <Route path="/experiences" element={<Experience isSidebarOpen={true} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

