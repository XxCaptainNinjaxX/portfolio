import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import SplashCursor from "./components/background/splashCursor";

export default function App() {
  const [cursorOn, setCursor] = useState(true);

  const toggleCursor = () => {
    setCursor(!cursorOn);
  };

  return (
    <div>
      {cursorOn && <SplashCursor />}

      <Header isSplashOn={cursorOn} toggleSplash={toggleCursor} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/musician" element={<Musician />} />
        </Routes>
      </main>
    </div>
  );
}
