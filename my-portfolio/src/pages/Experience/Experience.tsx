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
          Most of what I've built started as a workflow nobody thought was worth
          automating, or did not think it was possible to achomplish.
        </p>
        <p>
          Four projects from my summer at Orion Resource Partners. Two I led
          with three interns reporting to me; two I built alone. All shipped,
          all still in internal use.
        </p>
      </div>

      <PageHeader title="Orion Resource Partners Intern Projects" />

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
