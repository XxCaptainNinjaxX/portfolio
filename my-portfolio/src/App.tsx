import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Developer from "./pages/Developer/Developer";
import Musician from "./pages/Musician/Musician";
import background from "./assets/images/background.png";

const bg = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover", // Example: cover the entire container
  backgroundRepeat: "no-repeat", // Example: prevent image repetition
};
export default function App() {
  return (
    <div style={bg}>
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
