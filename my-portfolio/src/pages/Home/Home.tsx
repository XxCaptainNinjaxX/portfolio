import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

import css from "../../assets/icons/png/css.png";
import js from "../../assets/icons/png/js.png";
import java from "../../assets/icons/png/java.png";
import figma from "../../assets/icons/png/figma.png";
import git from "../../assets/icons/png/github.png";
import accounting from "../../assets/icons/png/balanceSheet.png";
import calc from "../../assets/icons/png/calc.png";

import prezPerm from "../../assets/images/prez&perm.png";
import learneant from "../../assets/images/LearneantSketch.jpg";
import njit from "../../assets/images/NJIT_Wind.png";
import cabs from "../../assets/images/cabs.png";
import orch from "../../assets/images/orch.png";

import Reveal from "../../components/background/Animation.tsx";
import Card from "../../components/Card/Card.tsx";
import DownWaves from "../../components/Waves/DownWaves.tsx";
import UpWaves from "../../components/Waves/UpWaves.tsx";

import main1 from "../../assets/images/main1.jpg";

const currentCourse = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Starting from scratch to build the logic behind applications. I'm using Java to master the fundamentals of Object-Oriented Programming (OOP) so I can create code that is actually reusable and efficient.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Learning the scorecard of business. I'm analyzing balance sheets and cash flows to understand the financial reality behind the companies I plan to build for.",
    image: accounting,
    imageLink: "https://catalog.njit.edu/search/?P=ACCT%20115",
  },
  {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Building the mathematical intuition needed for quantitative analysis. I'm applying derivatives to model rates of change, which is the foundation of any financial optimization.",
    image: calc,
    imageLink: "https://catalog.njit.edu/search/?P=MATH%20111",
  },
];

const projects = [
  {
    title: "Learneant App",
    desc: "A work in progress application. The 1 in all tool for students, a hub that entails GPA/Grade calculator, Calender, Notes app and alot more. All a student would need in their academic career.",
    image: learneant,
    imageLink: "",
  },
  {
    title: "Prez & Perm",
    desc: "A website that was devloped for a friend. Makes use of React and intemplation of API's to recive videos",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/prez&perm/index.html",
  },
];

const musician = [
  {
    title: "NJIT Wind Ensamble",
    desc: "Currently, I operate as a Lead Trumpet and Soloist. However, effective leadership is about more than just volume and playing; it demands precision. That being said, I focus on blending my sound into the ensemble's architecture to ensure we create a remarkable performance rather than just a collection of individuals.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  {
    title: "Hawthorne Caballeros DCI",
    desc: "Joining the 'Major Leagues' of Marching Arts. I am proud to announce I will be marching with the Hawthorne Caballeros for the 2026 season, committing to the extreme discipline and physical excellence required at the world-class level.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
  {
    title: "EHS Orchestra (Soloist+lead) ",
    desc: "Performing high-stakes repertoire. I had the opportunity to perform complex works like the 'Overture from Carmen' and served as a featured soloist for the 'Medley from Chicago.' That being said, the experience taught me to maintain absolute focus and composure under the spotlight.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
];

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
            {currentCourse.map((course, index) => (
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
            {projects.map((project, index) => (
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
            {musician.map((music, index) => (
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
