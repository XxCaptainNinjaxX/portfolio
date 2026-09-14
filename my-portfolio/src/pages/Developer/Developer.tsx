import "../SubPage.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";
import {
  pastProjects,
  currentProjects,
  nextProjects,
} from "../../components/Data/data";

export default function Developer() {
  return (
    <div className="developer-page">
      <h1>Developer</h1>

      <div className="page-intro">
        <p>
          My end goal is to become a technical program manager. While that is
          years away, nearly everything here is me working backward from it and
          asking what the path actually requires.
        </p>
        <p>
          StudyNeant is where this all started. The assignment was a small
          program with a few parameters, and while I could have written an
          average calculator for two numbers and called it finished, I decided
          to build a full-stack productivity suite for students instead; I have
          been learning to program around that decision ever since. Everything
          below follows the same logic. Client sites come first, then a real
          database behind StudyNeant rather than local storage, then "Step One,"
          a mobile app that reads a marcher's joints and coaches their
          technique, and lastly my own LLM. Each milestone requires something I
          can't do yet, which is exactly why I picked it, and each one leads
          into the next.
        </p>
        <p>
          That said, none of this is quick or simple. I step away for academics,
          for internships, and for music, and all of which is planned for;
          skipping the balance is what actually causes burnout, and the work is
          still here when I come back.
        </p>
      </div>

      <PageHeader title="Current projects " />

      <div className="currentGrid">
        {currentProjects.map((project, index) => (
          <Card
            key={index}
            desc={project.title}
            alt={project.title}
            image={project.image}
            popupTitle={project.title}
            popupDesc={project.desc}
            imageLink={project.imageLink}
          />
        ))}
      </div>

      <PageHeader title="Past projects" />

      <div className="pastGrid">
        {pastProjects.map((project, index) => (
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
      <PageHeader title="Future projects" />

      <div className="nextGrid">
        {nextProjects.map((project, index) => (
          <Card
            key={index}
            desc={project.title}
            alt={project.title}
            image={project.image}
            popupTitle={`${project.title}`}
            popupDesc={project.desc}
          />
        ))}
      </div>
    </div>
  );
}
