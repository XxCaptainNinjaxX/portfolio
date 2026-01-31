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
          <span className="student">Student </span>
          <div className="course-grid">
            <Card
              desc="Intro to Comp Sci (Java)"
              alt="Java Code"
              image="/android-chrome-192x192.png"
              popupTitle="Intro to Computer Science (Java)"
              popupDesc="Building from my prior knowledge of Java, I am currently adding to it by taking a Java class. Touching back on the basics and diving deeper into the more intermediate side"
            />
            <Card
              desc="Accounting 1"
              alt="Accounting"
              image="/android-chrome-192x192.png"
              popupDesc="As I plan to go into the finance and buisness world, I am taking an Accounting class to begin that journey."
              popupTitle="Accounting 1"
            />
            <Card
              desc="Calculus 1"
              alt="Calculus"
              image="/android-chrome-192x192.png"
              popupTitle="temp"
              popupDesc="temp"
            />
          </div>
        </Reveal>

        <UpWaves />
        <DownWaves />

        {/* DEVELOPER SECTION  */}
        <Reveal className="dev-section">
          <span className="developer">Developer</span>
          <div className="project-grid">
            <Card
              desc="Learneant App"
              alt="Productivity App"
              image="/android-chrome-192x192.png"
              popupTitle="Learneant"
              popupDesc="A work in progress application. The 1 in all tool for students, a hub that entails GPA/Grade calculator, Calender, Notes app and alot more. All a student would need in their academic career."
            />
            <Card
              desc="Prez & Perm"
              alt="Friend's Website"
              image="/android-chrome-192x192.png"
              popupDesc="A website that was devloped for a friend. Makes use of React and intemplation of API's to recive videos"
              popupTitle="Prez & Perm"
            />
          </div>
        </Reveal>

        <UpWaves />
        <DownWaves />

        {/* MUSICIAN SECTION  */}
        <Reveal className="music-section">
          <span className="musician">Musician</span>
          <div className="music-grid">
            <Card
              desc="NJIT Jazz Band"
              alt="Jazz Band"
              image="/android-chrome-192x192.png"
              popupTitle="temp"
              popupDesc="temp"
            />
            <Card
              desc="Soloist Performance"
              alt="Solo"
              image="/android-chrome-192x192.png"
              popupTitle="temp"
              popupDesc="temp"
            />
          </div>
        </Reveal>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
