import "../SubPage.css";

import { orion } from "../../components/Data/data";
//import { internship2, internship3 } from "../../components/Data/data";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

export default function Experience() {
  return (
    <div className="experience-page">
      <h1>Experience</h1>

      <div className="page-intro">
        <p>
          Placeholder intro — a short paragraph on what I look for in the work I
          take on, and what I bring to a team.
        </p>
        <p>
          Placeholder — second paragraph, the through-line between the roles
          below.
        </p>
      </div>

      <PageHeader title="Orion Resource Partners Projects" />

      <div className="grid">
        {orion.map((project, index) => (
          <Card
            key={index}
            desc={project.title}
            alt={project.title}
            image={project.image}
            popupTitle={project.title}
            popupDesc={project.desc}
          />
        ))}
      </div>
      {/* 
      <PageHeader title="Internship2" />
      <div className="grid">
        {internship2.map((project, index) => (
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

      <PageHeader title="Internship3" />
      <div className="grid">
        {internship2.map((project, index) => (
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
      </div> */}
    </div>
  );
}
