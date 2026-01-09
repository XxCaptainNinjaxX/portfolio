import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";

// 1. Import your new animation component
import BgAnimation from "./components/background/bgAnimation";

export default function App() {
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* 2. THE ANIMATED BACKGROUND */}
      {/* We position it 'absolute' so it sits BEHIND everything else */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <BgAnimation
          magnetRadius={11}
          ringRadius={9}
          waveSpeed={1.5}
          waveAmplitude={1.7}
          count={1500}
          color="#5729ff"
          autoAnimate={false} /* This is why it is stable! */
          particleVariance={0.4}
        />
      </div>

      {/* 3. Your Main Content (sits on top because of z-index) */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/musician" element={<Musician />} />
        </Routes>
      </main>
    </div>
  );
}
