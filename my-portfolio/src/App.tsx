import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import SplashCursor from "./components/background/splashCursor";
import background from "./assets/images/four.jpg";
import Student from "./pages/Student/Student";

export default function App() {
  const [cursorOn, setCursor] = useState(true);

  const toggleCursor = () => {
    setCursor(!cursorOn);
  };

  return (
    <div className="app-container">
      <div
        className="background-layer"
        style={{ backgroundImage: `url(${background})` }}
      />

      {cursorOn && <SplashCursor />}

      <Header isSplashOn={cursorOn} toggleSplash={toggleCursor} />

      {/* main content */}
      <main className="content-layer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/musician" element={<Musician />} />
        </Routes>
      </main>
    </div>
  );
}
