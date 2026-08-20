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
    title: "Musician's Friend Portfolio",
    desc: "Tech stack [Next.js, TypeScript, Tailwind CSS, Sanity, Vercel] \n A performance portfolio for a musician includes recordings, bio, booking inquiries, statically exported for near-zero hosting cost. \n \nBuilt on a headless CMS (Content Management System) so he posts a new gig or track himself instead of texting me to redeploy. The issued I ran into planning this interestingly wasn't the design, rather it was who maintains the site after handoff.",
    image: placeholderImage,
  },
  {
    title: "'Productivity Enforcer'",
    desc: "Tech stack [Electron, TypeScript, MediaPipe Face Landmarker, electron-builder] \n A menu bar and system tray app for macOS and Windows that watches the user head's pitch, not screen activity. Ten minutes of sustained head-down and it plays an alarm of your choosing to get them back to work. Brief glances up don't reset the clock; sustained ones do (10 secs). \n \nCalibrates to user's neutral posture on first run, because \"looking down\" depends entirely on where your monitor/camera sits. The app reports a state similar to how Teams uses dots, but not what you're doing. \n \nElectron over Python specifically for the cross-platform ease, where PyInstaller would have meant fighting macOS camera issues.",
    image: placeholderImage,
  },
  {
    title: "'Auto Clef'",
    desc: "Tech stack [Next.js, TypeScript, OpenSheetMusicDisplay, Tone.js, FastAPI, Python, oemer, OpenCV, Basic Pitch, librosa, music21, PostgreSQL, Redis, Docker] \n A browser-based score reader that works in both directions. \n \nPhotograph a page of sheet music with your phone and it returns an editable, playable score. User is able to press 'play' and hear the part before you read it. Import MusicXML out of MuseScore, transpose it for your instrument, and hear it in written or concert pitch. on the other side, the user is able to upload a recording and it detects pitch and accidentals, tracks tempo, infers key, then finalizes the music based on the data. \n \nI play trumpet professionally and reading sheet music withought hearing it before has always been a struggle as mine.Creating this app will solve that problem of other musians in the same position as me. ",
    image: placeholderImage,
  },
  // Refrence: https://www.soundslice.com/sheet-music-scanner/
  {
    title: "Mom's Business App",
    desc: "Tech stack [Next.js, TypeScript, Expo / React Native, PostgreSQL, Prisma, Auth.js, Google Calendar API, iCalendar (.ics), Stripe, Resend, Vercel] \n Clients browse services and pricing and book a consultation on the web. She runs her side from an Expo app: today's schedule, a push when a booking lands, block time without opening a laptop. \n \nMy mom spent years as an accountant at a large firm and now runs her own book of small business and individual clients, so requirements came from watching where she loses time rather than from a feature list. \n \nBooking reads free/busy off her Google Calendar so a personal appointment blocks a consultation slot automatically, and clients get a standards-based .ics attachment that lands in Apple Calendar, Google, or Outlook without connecting an account. Apple has no server-side calendar API, so iCloud is reached through EventKit inside the installed app, not from the server",
    image: placeholderImage,
  },
  {
    title: "Barber Business App",
    desc: "Tech stack [Next.js, TypeScript, Expo / React Native, PostgreSQL, Prisma, Stripe, Twilio, Google Calendar API, iCalendar (.ics), PWA] \n A booking system for my barber's business, built to replace a $31–$100/month Booksy subscription + other complanits that he had when brought this idea to him. Service menu with per-cut durations and buffers, availability, card-on-file for ease of pay and no-shows cost, SMS reminders, and calendar sync so he isn't checking two places. \n \nCustomers book on the web, linkable from his Instagram bio. He works from a native app, because someone standing at a chair all day needs a real push notification the moment a slot fills, and iOS only delivers web push to installed PWAs. Different user, different frequency, different client. \n \nAvailability reads off Google Calendar; confirmations go out as .ics so they open in whatever calendar the customer already uses; the app writes to his own iPhone calendar through EventKit, which is the only route to iCloud since Apple ships no server-side API. \n \nShares its scheduling engine with the accounting scheduling site as a package rather than a service, same generation, buffers, and logic, nothing gets touched between these two unrelated businesses. \n \n The subscription price also buys reliability, and running it myself means owning A2P 10DLC registration for SMS, PCI scope on payments, and being the person he calls when booking breaks on a Saturday morning. Roughly $15–25/month in Twilio, Stripe, and hosting against $31–100 saved",
    image: placeholderImage,
  },
  {
    title: "'Step One'",
    desc: 'Tech stack [React Native (Expo), TypeScript, FastAPI, Python, MediaPipe Pose Landmarker, OpenCV, dynamic time warping, PostgreSQL, Cloudflare R2, Clerk] \n As someone in world class marching band, I have found that there is no tool to help teach / practice your marching technique. This app will do just that, upload video you already have, and it extracts 3D joint positions, time-aligns your rep against a reference rep, and grades the angles that actually define the technique, using. All of these different marching techniques such as straight leg, bent leg, jazz running, marking time, etc, all have their own ruleset.\n \nOpen the app and you land on the week: sessions logged, per-technique trend, whether you\'re improving or sliding, then pick what you want to work on. \n \nFeedback reads the way a tech instructor talks — "your knee bent a little deeper than it should, but less than last week" — with your skeleton drawn next to the reference, instead of "your knee was 47.3 degrees and the target is 48.2." Nobody has or will ever fixed their technique from a decimal so I am ensuring that the algorithm will respond to the user in a understandable way. \n \n Additionally, I choose the method of Record-then-review rather than live feedback, because a phone far enough away to capture your full body is too far away to read feedback mid-rep, \n \nThese decisions carried the design of this. The heavy lifting estimation runs server-side in Python rather than on-device, so reference data and scoring rules change without needing an app update since these rules may change based on new techniques. In addition, these angles come from MediaPipe\'s metric world landmarks rather than screen coordinates, because a knee measured 30 degrees off-axis is a different number than the same knee measured head-on. If camera position leaks into the score, the reference set is worthless',

    image: placeholderImage,
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
