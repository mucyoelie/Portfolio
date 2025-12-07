import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sibeBar";
import Hero from "./pages/Hero";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

