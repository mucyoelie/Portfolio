import  { useState } from "react";
import Sidebar from "./components/sibeBar"
import ThreeBackground from "./components/ThreeBackground";
function App() {
  // State to toggle 3D background
  const [show3D, setShow3D] = useState(false);
  return (
    <div className="relative w-full h-full overflow-x-hidden">
       {/* Sidebar with Orbit toggle */}
      <Sidebar onToggle3D={() => setShow3D(!show3D)} />
      {/* 3D stars background */}
      {show3D && <ThreeBackground />}
    </div>
  )
}

export default App
