import prezPerm from "../../assets/images/prez&perm.png";
import studyNeantImg from "../../assets/images/StudyNeant.png";

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

//--------------- Dev Page -----------

export const currentProjects = [
  {
    title: "StudyNeant App",
    desc: "A comprehensive productivity suite for students. Building this involves integrating a custom GPA calculator, calendar, dynamic note-taking system, and more, to solve real academic workflow problems.",
    image: studyNeantImg,
    imageLink: "https://robriguez.com/projects/Studyneant/",
  },
];

export const pastProjects = [
  {
    title: "Personal Portfolio",
    desc: "A fully responsive developer portfolio built with React along with assembling modern React components.",
    image: "/android-chrome-192x192.png",
    imageLink: "/",
  },
  {
    title: "Prez & Perm",
    desc: "A custom React web application developed for a client. It leverages REST APIs to dynamically fetch and display video content, turning raw data into a functional user experience.",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
];

//--------------- Musician Page -----------

export const currentEnsembles = [
  {
    title: "NJIT Wind Ensemble",
    desc: "Operating as Lead Trumpet and Soloist. Leadership in this setting demands absolute accountability and precision, blending my individual sound into the ensemble's overall tone while being a role model in not just the trumpet section, but the overall ensemble.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  {
    title: "Hawthorne Caballeros DCI",
    desc: "Committing to the extreme discipline and physical expectations required at the world-class level of the marching arts for the 2026 season. Often known as the 'closest thing to the military without being in the military' due to the demanding intensity.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
];

export const pastEnsembles = [
  {
    title: "EHS Jazz Ensemble (Soloist)",
    desc: "A four-year journey of continuous improvement (2021-2025). Progressing from the last chair to a soloist role, only proved that consistent, daily practice is the true foundation of mastery.",
    image: jazz,
    imageLink:
      "https://drive.google.com/drive/folders/1xzQUrANXubfc2mdPc9OuQUM7rsg6rTrC?usp=sharing",
  },
  {
    title: "EHS Orchestra (Soloist + Lead)",
    desc: "Performed complex works like the 'Overture from Carmen' and featured as a soloist for the 'Medley from Chicago.' High-stakes performances forge absolute focus under pressure.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
  {
    title: "EHS Trumpet Ensemble (Soloist)",
    desc: "Small group performance leaves no room to hide. Every note and mistake is aplified at the perofmrance, leaving that personal accountability drives team success.",
    image: trumpet,
  },
  {
    title: "EHS Marching Band",
    desc: "Climbed from the 3rd to 1st trumpet part, I helped the ensemble achieve National Champs. Enduring the grueling rehearsals while holding a leadership position taught the value of a role model should have resilience and grit when facing friction.",
    image: marchingEns,
    popupImage: marchingSolo,
    imageLink: "https://youtu.be/zn2gasWT_nU?si=9VZtbRpCVaShTp3A&t=86",
  },
];

//--------------- Student Page -----------

export const currentCourse = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Mastering the fundamentals of Object-Oriented Programming (OOP) in Java. Focused on building application logic measure by measure to create reusable, efficient code.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
  },
  {
    code: "IS 117",
    title: "Intro to Website Development",
    desc: "Designing the front-end of the web using HTML5 and CSS3. Emphasizes UI/UX principles, because a technical solution is only as good as its user experience.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    imageLink: "https://catalog.njit.edu/search/?P=IS%20117",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Analyzing balance sheets and cash flows. Understanding the financial reality behind corporate structures is essential for managing profitable tech products.",
    image: accounting,
    imageLink: "https://catalog.njit.edu/search/?P=ACCT%20115",
  },
  {
    code: "MGMT 190",
    title: "Intro to Business",
    desc: "Examining global market structures and operational frameworks. This provides the big-picture context needed to see where software solutions actually fit into the economy along with the backbone structure of a company.",
    image: business,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20190",
  },
  {
    code: "ENGL 102",
    title: "Intro to Research Writing",
    desc: "Refining the ability to research complex topics and synthesize them into clear arguments.",
    image: english,
    imageLink: "https://catalog.njit.edu/search/?P=ENGL%20102",
  },
  {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Applying derivatives to model rates of change. Building the mathematical intuition needed for quantitative analysis and financial optimization.",
    image: calc,
    imageLink: "https://catalog.njit.edu/search/?P=MATH%20111",
  },
];

export const nextCourses = [
  {
    code: "CS 114",
    title: "Intro to Computer Science II",
    desc: "Diving into Java data structures like Trees and Stacks. The focus shifts from making software functional to optimizing it for speed and efficiency.",
    image: cs114,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20114",
  },
  {
    code: "MIS 245",
    title: "Mgmt. Information Systems",
    desc: "Bridging the gap between code and company strategy. Analyzing how enterprise systems and databases actually drive business operations and value.",
    image: mis,
    imageLink: "https://catalog.njit.edu/search/?P=MIS%20245",
  },
  {
    code: "MGMT 116",
    title: "Quant. Analysis for Business",
    desc: "Using statistical software and regression analysis. Shifting from intuition to data-driven decision-making to uncover the truth behind the numbers.",
    image: stats,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20116",
  },
  {
    code: "ECON 265",
    title: "Microeconomics",
    desc: "Analyzing consumer behavior and pricing strategies. Understanding why people make economic choices is critical when developing and launching a product.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20266",
  },
  {
    code: "MGMT 290",
    title: "Business Law I",
    desc: "Studying the legal frameworks that protect products. From contracts to intellectual property, this covers the gritty work of operating a business safely.",
    image: law,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20290",
  },
  {
    code: "LIT 230",
    title: "Intro to Literature",
    desc: "Deconstructing complex narratives. Analyzing different perspectives sharpens critical thinking and improves the ability to communicate ideas clearly.",
    image: book,
    imageLink: "https://catalog.njit.edu/search/?P=LIT%20230",
  },
];

export const pastCourses = [
  {
    code: "CS 100",
    title: "Roadmap to Computing",
    desc: "The starting point for coding. Using Python to learn how to solve logic problems step-by-step through control structures and algorithmic thinking.",
    image: python,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20100",
  },
  {
    code: "ENGL 101",
    title: "Introduction to Academic Writing",
    desc: "The foundation of persuasion. Focused on rhetoric and composition to ensure that technical concepts can be explained and defended effectively.",
    image: english,
    imageLink: "https://catalog.njit.edu/search/?P=ENGL%20101",
  },
];

//--------------- Home Page -----------

export const currentCourseHome = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Mastering the fundamentals of Object-Oriented Programming (OOP) in Java. Focused on building application logic measure by measure to create reusable, efficient code.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Analyzing balance sheets and cash flows. Understanding the financial reality behind corporate structures is essential for managing profitable tech products.",
    image: accounting,
    imageLink: "https://catalog.njit.edu/search/?P=ACCT%20115",
  },
  {
    code: "MGMT 190",
    title: "Intro to Business",
    desc: "Examining global market structures and operational frameworks. This provides the big-picture context needed to see where software solutions actually fit into the economy along with the backbone structure of a company.",
    image: business,
    imageLink: "https://catalog.njit.edu/search/?P=MGMT%20190",
  },
];

export const projectsHome = [
  {
    title: "StudyNeant App",
    desc: "A comprehensive productivity suite for students. Building this involves integrating a custom GPA calculator, calendar, dynamic note-taking system, and more, to solve real academic workflow problems.",
    image: studyNeantImg,
    imageLink: "https://robriguez.com/projects/Studyneant/",
  },
  {
    title: "Prez & Perm",
    desc: "A custom React web application developed for a client. It leverages REST APIs to dynamically fetch and display video content, turning raw data into a functional user experience.",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
];

export const musicianHome = [
  {
    title: "NJIT Wind Ensemble",
    desc: "Operating as Lead Trumpet and Soloist. Leadership in this setting demands absolute accountability and precision, blending my individual sound into the ensemble's overall tone while being a role model in not just the trumpet section, but the overall ensemble.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  {
    title: "Hawthorne Caballeros DCI",
    desc: "Committing to the extreme discipline and physical expectations required at the world-class level of the marching arts for the 2026 season. Often known as the 'closest thing to the military without being in the military' due to the demanding intensity.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
  {
    title: "EHS Orchestra (Soloist + Lead)",
    desc: "Performed complex works like the 'Overture from Carmen' and featured as a soloist for the 'Medley from Chicago.' High-stakes performances forge absolute focus under pressure.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
];
