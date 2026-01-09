import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Musician from "./pages/Musician";

export default function App() {
  return (
    <div>
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
