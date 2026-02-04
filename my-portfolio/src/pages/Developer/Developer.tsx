import "./Developer.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

import prezPerm from "../../assets/images/prez&perm.png";
import learneant from "../../assets/images/LearneantSketch.jpg";

const currentProjects = [
  {
    title: "Learneant App",
    desc: "A work in progress application. The 1 in all tool for students, a hub that entails GPA/Grade calculator, Calender, Notes app and alot more. All a student would need in their academic career.",
    image: learneant,
    imageLink: "/",
  },
];

const pastProjects = [
  {
    title: "Portfolio",
    desc: "This portfolio is created with React",
    image: "/android-chrome-192x192.png",
    imageLink: "/",
  },
  {
    title: "Prez & Perm",
    desc: "A website that was devloped for a friend. Makes use of React and intemplation of API's to recive videos",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/prez&perm/index.html",
  },
];
export default function Developer() {
  return (
    <div className="developer-page">
      <h1>Developer</h1>

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
      <div className="featured-project">
        <h2>Flagship Project: Learneant</h2>

        <p>
          <strong>The Problem:</strong> Student productivity apps are
          fragmented. You have a GPA calculator in one tab, a calendar in
          another, and a to-do list in a third. The data never talks to each
          other.
        </p>
        <p>
          <strong>The Solution:</strong> I am architecting{" "}
          <strong>Learneant</strong>
          —a centralized "Productivity Ecosystem" for students. It is designed
          to integrate academic tracking (GPA/Grades) with daily task
          management, treating a student's career like a business operation.
        </p>
      </div>
    </div>
  );
}
