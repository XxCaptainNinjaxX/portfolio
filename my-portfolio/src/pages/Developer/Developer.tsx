import "../SubPage.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";
import { pastProjects, currentProjects } from "../../components/Data/data";

export default function Developer() {
  return (
    <div className="developer-page">
      <h1>Developer</h1>

      <div className="page-intro">
        <p>
          Development is the one place where I can start with a completely blank
          screen and build something real, line by line and measure by measure.
          But I don't want to just write code in a vacuum. My goal is to step
          into Product Management and Technical Architecture. I want to take all
          the challenges and curveballs of a project and manage them into a
          product that actually solves a user's problem. I know firsthand that
          elite results require elite preparation, and that is exactly how I
          approach every project I build.
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
    </div>
  );
}
