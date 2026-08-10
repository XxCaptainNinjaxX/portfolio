import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

import Reveal from "../../components/background/Animation.tsx";
import Card from "../../components/Card/Card.tsx";
import DownWaves from "../../components/Waves/DownWaves.tsx";
import UpWaves from "../../components/Waves/UpWaves.tsx";
import {
  experience,
  currentCourseHome,
  projectsHome,
  musicianHome,
  skills,
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
        {skills.map((skill, index) => (
          <a
            key={index}
            className="skill-icon"
            href={skill.imageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={skill.image} alt={`${skill.title} icon`} />
            <span className="skill-name">{skill.title}</span>
          </a>
        ))}
      </div>
      <br />
      <br />
      <h2 className="code-tag">&lt;/skills&gt;</h2>

      <UpWaves />
      <DownWaves />

      <section className="about-me">
        {/* EXPERIENCE SECTION */}
        <Reveal className="exp-section">
          <NavLink to="/experience">
            <span className="experience">Experience</span>
          </NavLink>
          <div className="experience-grid">
            {experience.map((role, index) => (
              <Card
                key={index}
                desc={role.title}
                alt={role.title}
                image={role.image}
                popupTitle={`${role.title}`}
                popupDesc={role.desc}
                imageLink={role.imageLink}
              />
            ))}
          </div>
        </Reveal>

        <UpWaves />
        <DownWaves />

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
