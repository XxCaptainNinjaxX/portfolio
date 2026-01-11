import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import SplashCursor from "./components/background/splashCursor";

export default function App() {
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Background (Keep as is, make sure zIndex is -1 in the file) */}
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
        <SplashCursor />
      </div>

      <Header />

      {/* UPDATE THIS SECTION */}
      {/* We add position: relative and zIndex: 1 to force it to the front */}
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
