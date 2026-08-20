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
import css from "../../assets/icons/png/css.png";
import js from "../../assets/icons/png/js.png";
import figma from "../../assets/icons/png/figma.png";
import git from "../../assets/icons/png/github.png";
import ts from "../../assets/icons/png/typescript.png";
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
import orion_img from "../../assets/images/orion_logo.jpg";

// stand-in art for entries that don't have a real logo yet
const placeholderImage = "/android-chrome-192x192.png";

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
export const nextProjects = [
  {
    title: "Friend Portfolio",
    desc: "Tech stack [React] \n A musical portfolio for a friend",
    image: placeholderImage,
  },
  {
    title: "'Producivity Enforcer' ",
    desc: "Tech stack [] \n a lightweight software that will track your eyes. After 10 minutes of noticing your eyes looking 'down' will start playing an alarm or sound of your choosing to get you back to work ",
    image: placeholderImage,
  },
  {
    title: "'Auto Transcription' ",
    desc: "Tech Stack [] \n User can either choose a song from a large list using a spotify API, upload sheet music, or upload a song and will spit out a transcription sheet music for a specific instrument or an entire score \n \nI am a professional trumpet player and every time that I wanted to learn or play a piece of music that the sheet music wasn't available I would get annoyed, so I wanted to create a solution for this rather than just using AI",
    image: placeholderImage,
  },
  {
    title: "Mom's business app",
    desc: "Tech stack [] \n My was previously an accountant for a large firm, now she's doing accounting for other small buisnesses and people. \n \nThis project will show what services are offered, prices of them, tracking cliental and reviews, lastly scheduling consultation ",
    image: placeholderImage,
  },
  {
    title: "Haircut buisness app",
    desc: "Tech stack [] \n My barber that i go to has been complaining about the pricing of booksy (starting $31 to $100 monthly) and some of the feature that it has. I wanted to create him a Website + app for his barber business.",
    image: placeholderImage,
  },
  {
    title: "'Step One'",
    desc: 'Tech stack [] \n As someone in world class marching band, I have found that there is no tool to help teach / practice your marching technique. Although this seems very niche, I want to help out other students trying to improve their technique when they are at home and not with a instructor or teacher. \n \n This app on their phone (apple + androiwill track certain joints in the leg, foot, shoulder, upper body, and cross that against a database of what the correct technique is, using other professional marching members angles as examples. \n \n By using certain algorithms, it will use the user data to instruct them what needs to be worked on and how, rather than: " Your ___ tissue was 47 degrees, correct angle is 48.182 degrees ", it will show "Your knee was slightly more beant than it should be, much more improvement than last time ___!, your knee looked like this [show image with dots and lines] whereas it should look like [image + dots + lines] ".',
    image: placeholderImage,
  },
];

/*

"auto transcription"
	- either choose or upload song, spits out transcription for specific instrument or entire score

"productivity enforcer"
	- light weight software, tracks eye s, if looking down for 10+ mins, blast alarms 

"mom's business"
	- tracks client booking + reviews 

"Haircut spot"
	- tracks client booking + reviews 

"Step one"
	- Marching improver

"Zach Portfolio"

always taking more clients 



*/

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
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Mastering the fundamentals of Object-Oriented Programming (OOP) in Java. Focused on building application logic measure by measure to create reusable, efficient code.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
  },
  {
    code: "CS 114",
    title: "Intro to Computer Science II",
    desc: "Diving into Java data structures like Trees and Stacks. The focus shifts from making software functional to optimizing it for speed and efficiency.",
    image: cs114,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20114",
  },
  {
    code: "ECON 265",
    title: "Microeconomics",
    desc: "Analyzing consumer behavior and pricing strategies. Understanding why people make economic choices is critical when developing and launching a product.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20265",
  },
  {
    code: "ECON 266",
    title: "Macroeconomics",
    desc: "----------.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20266",
  },
  {
    code: "ECON 265",
    title: "Intro to information systems",
    desc: "----------.",
    image: micro,
    imageLink: "--------",
  },
  {
    code: "ECON 265",
    title: "Intro to information systems",
    desc: "----------.",
    image: micro,
    imageLink: "--------",
  },
];

export const nextCourses = [
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
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Mastering the fundamentals of Object-Oriented Programming (OOP) in Java. Focused on building application logic measure by measure to create reusable, efficient code.",
    image: java,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20113",
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

//--------------- Experience Page -----------

export const orion = [
  {
    title: "PPTX Web App",
    desc: "Every reporting cycle the investment team has 15+ documents — PDF, DOCX, PPTX, JSON, Markdown, PPTX, all between 5 to 200 pages ea with the purpose of creating a deck by hand. Other interns before me had abandoned this project because they thought it was infeasible due to cost restraints and accuracy. I did what they couldnt, I built a web app that parses these uploads to a Markdown file, as a 'deck script' which then the user can refine it conversationally with Claude, then renders it against 30+ internal slide templates. Shipped to internal production in Docker, eliminating ~17 hours of weekly manual formatting. \n \nI choose this path of hardcoding each of the template slides rather than prompting because I found that it was the most reliable way to incooperate all of these different slide designs while maintaining simplicity. ",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  {
    title: "ESG Migration + Automation ",
    desc: "Joined this ESG extraction project mid-build, took over as lead, and migrated a large 1k+ line Python script to Power Automate and Copilot Studio, both self-taught in two days. \n \nRebuilt this as a three-stage agent workflow thats driven off a Excel control column, user selects the company (from 500+) and which steps to run: agents research 5–8 documents each, parse them for target data, then extract a second data set. \n \nCut a full run from 28+ hours to 11 while raising accuracy and took a 5-month manual process down to 1–2 weeks of monitoring; directed 3 interns and ran requirements discovery directly with end users.",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  {
    title: "Newspaper Agent Workflow",
    desc: "Originally, other co workers wanted a system in where they can upload many files (20+ a day) + find other related articles on that topic and store them in a SharePoint. From there, would be able to communicate with an AI about the information from these documents. ex: 'whats new in the past 3 days', 'what is mentioned about ___ in ___ article', 'what is noteworthy from each of these', 'give me a summary of the past 2 days' \n \nI accomplished this by building an agent that triggers on upload, renames and categorizes PDF's automatically. Three different PowerAutomate flows were used to create this. ",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  {
    title: "Teams Transciption Agent",
    desc: "Teams generates a transcript for every call if enabled and outputs a file but nobody reads them,  the information exists and stays inaccessible. \n \nI built an agent that takes the auto-generated transcription file, then produces a summary and overview. + an agent that can you can have a conversation with (like the Newspaper workflow), answering follow-up questions about what was said, email action reminders, anything based on the meeting. Created this on the final days of my internship",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
];

export const internship2 = [
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
];

export const internship3 = [
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
  {
    title: "[Company Name]",
    desc: "[Description",
    image: placeholderImage,
    imageLink: "",
  },
];

//--------------- Home Page -----------

export const experience = [
  {
    title: "Orion Resource Partners IT Intern",
    desc: "Led internal tooling and AI automation for the investment team: four shipped projects, three interns directed, one production deployment. Most of the work wasn't writing code — it was sitting with the people doing the manual version and figuring out what they'd actually use.",
    image: orion_img,
    imageLink: "https://www.orionresourcepartners.com/",
  },
];

export const currentCourseHome = [
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

//--------------- Home Page: Skills -----------

export const skills = [
  {
    title: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    imageLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    image: css,
    imageLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    imageLink: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript",
    image: js,
    imageLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    image: ts,
    imageLink: "https://www.typescriptlang.org/",
  },
  {
    title: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    imageLink: "https://react.dev/",
  },
  {
    title: "Java",
    image: java,
    imageLink: "https://www.oracle.com/java/",
  },
  {
    title: "Figma",
    image: figma,
    imageLink: "https://www.figma.com/",
  },
  {
    title: "Git",
    image: git,
    imageLink: "https://github.com/",
  },
];
