import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import SplashCursor from "./components/background/splashCursor";
import background from "./assets/images/four.jpg";

export default function App() {
  const [cursorOn, setCursor] = useState(true);

  const toggleCursor = () => {
    setCursor(!cursorOn);
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />

      <div
        style={{
          opacity: cursorOn ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <SplashCursor />
      </div>

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
