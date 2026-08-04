import "./index.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PopupProvider } from "./components/Pop-up/Pop-upContext";

import Header from "./components/Header/Header";
import ScrollBlur from "./components/ScrollBlur/ScrollBlur";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SplashCursor from "./components/background/splashCursor";
import Preloader from "./components/Preloader/Preloader";
import useImagePreloader from "./components/Preloader/useImagePreloader";
import { criticalImages } from "./components/Preloader/criticalImages";

import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import Student from "./pages/Student/Student";

export default function App() {
  const [cursorOn, setCursor] = useState(true);
  const { progress, isComplete } = useImagePreloader(criticalImages);

  const toggleCursor = () => {
    setCursor(!cursorOn);
  };

  return (
    <PopupProvider>
      <ScrollToTop />
      <div className="app-container">
        <div className="background-layer" />

        {/* held back until the gate opens so the shader compile doesn't
            compete with image decoding */}
        {cursorOn && isComplete && <SplashCursor />}

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

        <ScrollBlur />

        <AnimatePresence>
          {!isComplete && <Preloader progress={progress} />}
        </AnimatePresence>
      </div>
    </PopupProvider>
  );
}
