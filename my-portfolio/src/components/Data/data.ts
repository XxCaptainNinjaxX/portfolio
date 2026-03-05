import prezPerm from "../../assets/images/prez&perm.png";
import studyNeantImg from "../../assets/images/LearneantSketch.jpg";

import njit from "../../assets/images/NJIT_Wind.png";
import cabs from "../../assets/images/cabs.png";
import orch from "../../assets/images/orch.png";
import jazz from "../../assets/images/jazzEns.jpg";
import trumpet from "../../assets/images/trumpetEns.jpg";
import marchingEns from "../../assets/images/marchingEns.png";
import marchingSolo from "../../assets/images/MarchingSS.png";

import java from "../../assets/icons/png/java.png";
import accounting from "../../assets/icons/png/balanceSheet.png";
import business from "../../assets/icons/png/buisness.png";
import calc from "../../assets/icons/png/calc.png";
import english from "../../assets/icons/png/quill.png";
import book from "../../assets/icons/png/001-book.png";
import micro from "../../assets/icons/png/002-sale-tag.png";
import mis from "../../assets/icons/png/003-data-storage.png";
import stats from "../../assets/icons/png/005-scatter-graph.png";
import cs114 from "../../assets/icons/png/004-algorithms.png";
import law from "../../assets/icons/png/006-gavel.png";
import python from "../../assets/icons/png/007-python.png";

//--------------- dev Page-----------

export const currentProjects = [
  {
    title: "StudyNeant App",
    desc: "The all-in-one productivity suite for students. Features include a functional GPA calculator, integrated calendar, dynamic note-taking system, and secure password generator.",
    image: studyNeantImg,
    imageLink: "",
  },
];

export const pastProjects = [
  {
    title: "Personal Portfolio",
    desc: "A fully responsive developer portfolio leveraging modern React component architecture to highlight technical projects and frontend capabilities.",
    image: "/android-chrome-192x192.png",
    imageLink: "/",
  },
  {
    title: "Prez & Perm",
    desc: "A custom React web application developed for a client. Leverages REST APIs to dynamically fetch and display digital video content.",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
];

//--------------- musician Page-----------

export const currentEnsembles = [
  {
    title: "NJIT Wind Ensemble",
    desc: "Operating as Lead Trumpet and Soloist. Effective leadership demands precision. I focus on blending my sound into the ensemble's architecture to ensure a remarkable collective performance.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  {
    title: "Hawthorne Caballeros DCI",
    desc: "Committing to the extreme discipline and physical excellence required at the world-class level of the marching arts for the 2026 season.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
];

export const pastEnsembles = [
  {
    title: "EHS Jazz Ensemble (Soloist)",
    desc: "A four-year journey of continuous improvement (2021-2025). Starting at the last chair, rigorous daily practice allowed me to climb the ranks, proving that consistency is the only true shortcut to mastery.",
    image: jazz,
    imageLink:
      "https://drive.google.com/drive/folders/1xzQUrANXubfc2mdPc9OuQUM7rsg6rTrC?usp=sharing",
  },
  {
    title: "EHS Orchestra (Soloist + Lead)",
    desc: "Performed complex works like the 'Overture from Carmen' and served as a featured soloist for the 'Medley from Chicago.' This experience forged absolute focus and composure under the spotlight.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
  {
    title: "EHS Trumpet Ensemble (Soloist)",
    desc: "Small-group precision where there is nowhere to hide. Knowing that every single note impacts the final product taught me that personal accountability is the foundation of team success.",
    image: trumpet,
  },
  {
    title: "EHS Marching Band",
    desc: "Through relentless grit, I climbed from the 3rd to the 1st trumpet part, helping the ensemble achieve National Champion status. Elite results require elite preparation every single day.",
    image: marchingEns,
    popupImage: marchingSolo,
    imageLink: "https://youtu.be/zn2gasWT_nU?si=9VZtbRpCVaShTp3A&t=86",
  },
];

//--------------- Student Page-----------

export const currentCourse = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Starting from scratch to build the logic behind applications. I'm using Java to master the fundamentals of Object-Oriented Programming (OOP) so I can create code that is actually reusable and efficient.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
  },
  {
    code: "IS 117",
    title: "Intro to Website Development",
    desc: "Designing the 'face' of the web. I'm focusing on UI/UX principles with HTML5 and CSS3 because I believe a product is only as good as its user experience.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    imageLink: "https://catalog.njit.edu/search/?P=IS%20117",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Learning the scorecard of business. I'm analyzing balance sheets and cash flows to understand the financial reality behind the companies I plan to build for.",
    image: accounting,
    imageLink: "https://catalog.njit.edu/search/?P=ACCT%20115",
  },
  {
    code: "MGMT 190",
    title: "Intro to Business",
    desc: "Looking at the big picture of the global economy. I'm studying how market structures and operational frameworks actually function so I can identify where technology fits in.",
    image: business,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20190",
  },
  {
    code: "ENGL 102",
    title: "Intro to Research Writing",
    desc: "Since the world never stops evolving, neither can we. I'm refining my ability to research complex topics—like AI ethics—and synthesize them into arguments that actually make sense.",
    image: english,
    imageLink: "https://catalog.njit.edu/search/?P=ENGL%20102",
  },
  {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Building the mathematical intuition needed for quantitative analysis. I'm applying derivatives to model rates of change, which is the foundation of any financial optimization.",
    image: calc,
    imageLink: "https://catalog.njit.edu/search/?P=MATH%20111",
  },
];

export const nextCourses = [
  {
    code: "CS 114",
    title: "Intro to Computer Science II",
    desc: "Taking the training wheels off. I'll be diving deep into data structures like Trees and Stacks to ensure the software I build isn't just functional, but optimized for speed.",
    image: cs114,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20114",
  },
  {
    code: "MIS 245",
    title: "Mgmt. Information Systems",
    desc: "Bridging the gap between the code and the company. I'll be analyzing how enterprise systems like e-commerce and databases actually drive business value.",
    image: mis,
    imageLink: "https://catalog.njit.edu/search/?P=MIS%20245",
  },
  {
    code: "MGMT 116",
    title: "Quant. Analysis for Business",
    desc: "Moving from guessing to knowing. I'll be using statistical software and regression analysis to make decisions based on data rather than just intuition.",
    image: stats,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20116",
  },
  {
    code: "ECON 265",
    title: "Microeconomics",
    desc: "Understanding why people buy. I'll be analyzing consumer behavior and pricing strategies, which is critical for anyone trying to launch a product.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20266",
  },
  {
    code: "MGMT 290",
    title: "Business Law I",
    desc: "Protecting the product. I'll be learning the legal frameworks—from contracts to IP rights—that are necessary to operate a business safely.",
    image: law,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20290",
  },
  {
    code: "LIT 230",
    title: "Intro to Literature",
    desc: "Sharpening my critical thinking. Deconstructing complex narratives helps me better understand different perspectives and communicate ideas clearly.",
    image: book,
    imageLink: "https://catalog.njit.edu/search/?P=LIT%20230",
  },
];

export const pastCourses = [
  {
    code: "CS 100",
    title: "Roadmap to Computing",
    desc: "Where it started. I built my first scripts in Python and learned that coding is really just solving problems through logic and control structures.",
    image: python,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20100",
  },
  {
    code: "ENGL 101",
    title: "Introduction to Academic Writing",
    desc: "The foundation of persuasion. I learned that having a great technical solution doesn't matter if you can't explain it. Focused on rhetoric and composition to ensure my ideas land as effectively as my code. ",
    image: english,
    imageLink: "https://catalog.njit.edu/search/?P=ENGL%20101",
  },
];

//--------------- Home Page-----------

export const currentCourseHome = [
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

export const projectsHome = [
  {
    title: "StudyNeant App",
    desc: "A work in progress application. The 1 in all tool for students, a hub that entails GPA/Grade calculator, Calender, Notes app and alot more. All a student would need in their academic career.",
    image: studyNeantImg,
    imageLink: "",
  },
  {
    title: "Prez & Perm",
    desc: "A website that was devloped for a friend. Makes use of React and intemplation of API's to recive videos",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
];

export const musicianHome = [
  {
    title: "NJIT Wind Ensemble",
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
