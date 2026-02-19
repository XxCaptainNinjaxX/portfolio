import "../SubPage.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

import prezPerm from "../../assets/images/prez&perm.png";
import learneant from "../../assets/images/LearneantSketch.jpg";

const currentProjects = [
  {
    title: "Learneant App",
    desc: "A work in progress application. The 1 in all tool for students, a hub that entails GPA/Grade calculator, Calender, Notes app and more. ALL, a student would need to be sucsessful in their academic career.",
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
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
];
export default function Developer() {
  return (
    <div className="developer-page">
      <h1>Developer</h1>

      <div className="page-intro">
        <p>
          For me, development is the only place where I can truly scratch my
          creative itch. It’s the one discipline where I can start with nothing
          but a blank screen and build a tangible solution that solves a
          real-world problem. However, I’ve realized that I don't just want to
          write code in a vacuum. That being said,{" "}
          <strong> my goal is to become a Solutions Engineer,</strong> combining
          this creative drive with technical architecture to build products that
          don't just work, but actually solve the user's problem
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
