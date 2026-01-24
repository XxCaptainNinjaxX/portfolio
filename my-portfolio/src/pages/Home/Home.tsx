import "./Home.css";
import css from "../../assets/icons/png/css.png";
import js from "../../assets/icons/png/js.png";
import java from "../../assets/icons/png/java.png";
import figma from "../../assets/icons/png/figma.png";
import git from "../../assets/icons/png/github.png";

import Course from "../../components/Card/Card.tsx";
import DownWaves from "../../components/Waves/DownWaves.tsx";
import UpWaves from "../../components/Waves/UpWaves.tsx";

export default function Home() {
  return (
    <>
      <section className="name-split">
        {/* LEFT SIDE: Name */}
        <div className="name-text">
          <div className="name-wrapper">
            <span className="first-name">Robert</span>
            <span className="last-name">Rodriguez</span>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="name-image-container">
          <img
            src="/android-chrome-192x192.png"
            alt="Laptop and Trumpet icon"
            className="main-name-img"
          />
        </div>
      </section>
      {/* Fake Tags */}
      <h2 className="code-tag">&lt;skills&gt;</h2>
      <div className="icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          alt="html icon"
        />
        <img src={css} alt="css icon" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="tailwind icon"
        />
        <img src={js} alt="html icon" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React icon"
        />
        <img src={java} alt="html icon" />
        <img src={figma} alt="html icon" />
        <img src={git} alt="html icon" />
      </div>
      <br></br>
      <br></br>
      <h2 className="code-tag">&lt;/skills&gt;</h2> {/* skill tags */}
      {/* Squig lines */}
      <UpWaves />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <DownWaves />
      {/* three sections after skills */}
      <section className="about-me">
        {/* student-section */}
        <div className="edu-section">
          <span className="student">Student</span>
          <div className="course-grid">
            <Course
              desc="something something something"
              alt="picture"
              image="/android-chrome-192x192.png"
            />
            <Course
              desc="something something something something something 
              something
              something soemthing something something seomthing seomthing soemthing something "
              alt="picture"
              image="/android-chrome-192x192.png"
            />

            {/* add course 2 */}
          </div>
        </div>

        <div className="dev-section">
          <span className="developer">Developer</span>
          {/* add project 1 */}
          {/* add project 2 */}
        </div>
        <div className="music-section">
          <span className="musician">Musicsian</span>
          {/* add Rutgerz band */}
          {/* add NJIT band */}
          {/* add soloist */}
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
