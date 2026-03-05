import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

import css from "../../assets/icons/png/css.png";
import js from "../../assets/icons/png/js.png";
import java from "../../assets/icons/png/java.png";
import figma from "../../assets/icons/png/figma.png";
import git from "../../assets/icons/png/github.png";

import Reveal from "../../components/background/Animation.tsx";
import Card from "../../components/Card/Card.tsx";
import DownWaves from "../../components/Waves/DownWaves.tsx";
import UpWaves from "../../components/Waves/UpWaves.tsx";
import {
  currentCourseHome,
  projectsHome,
  musicianHome,
} from "../../components/Data/data.ts";

import main1 from "../../assets/images/main1.jpg";

export default function Home() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {isImageOpen && (
        <div
          className="image-modal-overlay"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="image-modal-content">
            <img src={main1} alt="Full View" />
            <span className="close-instruction">Press ESC to close</span>
          </div>
        </div>
      )}

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
            src={main1}
            alt="Laptop and Trumpet icon"
            className="mainImg clickable-image"
            onClick={() => setIsImageOpen(true)}
          />
        </div>
      </section>

      {/* Skills Section */}
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
        <img src={js} alt="js icon" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React icon"
        />
        <img src={java} alt="java icon" />
        <img src={figma} alt="figma icon" />
        <img src={git} alt="git icon" />
      </div>
      <br />
      <br />
      <h2 className="code-tag">&lt;/skills&gt;</h2>

      <UpWaves />
      <DownWaves />

      <section className="about-me">
        {/*STUDENT SECTION */}
        <Reveal className="edu-section">
          <NavLink to="/student">
            <span className="student">Student </span>
          </NavLink>
          <div className="course-grid">
            {currentCourseHome.map((course, index) => (
              <Card
                key={index}
                desc={course.title}
                alt={course.title}
                image={course.image}
                popupTitle={`${course.title} (${course.code})`}
                popupDesc={course.desc}
                imageLink={course.imageLink}
              />
            ))}
          </div>
        </Reveal>

        <UpWaves />
        <DownWaves />

        {/* DEVELOPER SECTION  */}
        <Reveal className="dev-section">
          <NavLink to="/developer">
            <span className="developer">Developer</span>
          </NavLink>
          <div className="project-grid">
            {projectsHome.map((project, index) => (
              <Card
                key={index}
                desc={project.title}
                alt={project.title}
                image={project.image}
                popupTitle={`${project.title}`}
                popupDesc={project.desc}
                imageLink={project.imageLink}
              />
            ))}
          </div>
        </Reveal>

        <UpWaves />
        <DownWaves />

        {/* MUSICIAN SECTION  */}
        <Reveal className="music-section">
          <NavLink to="/musician">
            <span className="musician">Musician</span>
          </NavLink>
          <div className="music-grid">
            {musicianHome.map((music, index) => (
              <Card
                key={index}
                desc={music.title}
                alt={music.title}
                image={music.image}
                popupTitle={`${music.title}`}
                popupDesc={music.desc}
                imageLink={music.imageLink}
              />
            ))}
          </div>
        </Reveal>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
