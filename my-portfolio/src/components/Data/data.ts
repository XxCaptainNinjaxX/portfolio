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
import calc from "../../assets/icons/png/calc.png";
import book from "../../assets/icons/png/001-book.png";
import micro from "../../assets/icons/png/002-sale-tag.png";
import mis from "../../assets/icons/png/003-data-storage.png";
import stats from "../../assets/icons/png/005-scatter-graph.png";
import cs114 from "../../assets/icons/png/004-algorithms.png";
import orion_img from "../../assets/images/orion_logo.jpg";
import zach from "../../assets/images/zach.png";

const placeholderImage = "/android-chrome-192x192.png";

export interface ContentEntry {
  title: string;
  desc: string;
  homeDesc?: string;
  image: string;
  imageLink?: string;
  popupImage?: string;
}

export interface CourseEntry extends ContentEntry {
  code: string;
}

//--------------- Dev Page -----------

export const dev = {
  studyNeant: {
    title: "StudyNeant App",
    desc: "A comprehensive productivity suite for students. Building this involves integrating a custom GPA calculator, calendar, dynamic note-taking system, and more, to solve real academic workflow problems.",
    image: studyNeantImg,
    imageLink: "https://robriguez.com/projects/Studyneant/",
  },
  musiciansFriend: {
    title: "Musician's Friend Portfolio",
    desc: "Tech stack [Next.js, TypeScript, Tailwind CSS, Sanity, Vercel] \n A performance portfolio for a musician includes recordings, bio, booking inquiries, statically exported for near-zero hosting cost. \n \nBuilt on a headless CMS (Content Management System) so he posts a new gig or track himself instead of texting me to redeploy. The issued I ran into planning this interestingly wasn't the design, rather it was who maintains the site after handoff.",
    image: zach,
  },
  portfolio: {
    title: "Personal Portfolio",
    desc: "A fully responsive developer portfolio built with React along with assembling modern React components.",
    image: "/android-chrome-192x192.png",
    imageLink: "/",
  },
  prezPerm: {
    title: "Prez & Perm",
    desc: "A custom React web application developed for a client. It leverages REST APIs to dynamically fetch and display video content, turning raw data into a functional user experience.",
    image: prezPerm,
    imageLink: "https://robriguez.com/projects/Prez-Perm",
  },
  productivityEnforcer: {
    title: "'Productivity Enforcer'",
    desc: "Tech stack [Electron, TypeScript, MediaPipe Face Landmarker, electron-builder] \n A menu bar and system tray app for macOS and Windows that watches the user head's pitch, not screen activity. Ten minutes of sustained head-down and it plays an alarm of your choosing to get them back to work. Brief glances up don't reset the clock; sustained ones do (10 secs). \n \nCalibrates to user's neutral posture on first run, because \"looking down\" depends entirely on where your monitor/camera sits. The app reports a state similar to how Teams uses dots, but not what you're doing. \n \nElectron over Python specifically for the cross-platform ease, where PyInstaller would have meant fighting macOS camera issues.",
    image: placeholderImage,
  },
  autoClef: {
    title: "'Auto Clef'",
    desc: "Tech stack [Next.js, TypeScript, OpenSheetMusicDisplay, Tone.js, FastAPI, Python, oemer, OpenCV, Basic Pitch, librosa, music21, PostgreSQL, Redis, Docker] \n A browser-based score reader that works in both directions. \n \nPhotograph a page of sheet music with your phone and it returns an editable, playable score. User is able to press 'play' and hear the part before you read it. Import MusicXML out of MuseScore, transpose it for your instrument, and hear it in written or concert pitch. on the other side, the user is able to upload a recording and it detects pitch and accidentals, tracks tempo, infers key, then finalizes the music based on the data. \n \nI play trumpet professionally and reading sheet music withought hearing it before has always been a struggle as mine.Creating this app will solve that problem of other musians in the same position as me. ",
    image: placeholderImage,
  },
  // Refrence: https://www.soundslice.com/sheet-music-scanner/
  momsBusiness: {
    title: "Mom's Business App",
    desc: "Tech stack [Next.js, TypeScript, Expo / React Native, PostgreSQL, Prisma, Auth.js, Google Calendar API, iCalendar (.ics), Stripe, Resend, Vercel] \n Clients browse services and pricing and book a consultation on the web. She runs her side from an Expo app: today's schedule, a push when a booking lands, block time without opening a laptop. \n \nMy mom spent years as an accountant at a large firm and now runs her own book of small business and individual clients, so requirements came from watching where she loses time rather than from a feature list. \n \nBooking reads free/busy off her Google Calendar so a personal appointment blocks a consultation slot automatically, and clients get a standards-based .ics attachment that lands in Apple Calendar, Google, or Outlook without connecting an account. Apple has no server-side calendar API, so iCloud is reached through EventKit inside the installed app, not from the server",
    image: placeholderImage,
  },
  barberBusiness: {
    title: "Barber Business App",
    desc: "Tech stack [Next.js, TypeScript, Expo / React Native, PostgreSQL, Prisma, Stripe, Twilio, Google Calendar API, iCalendar (.ics), PWA] \n A booking system for my barber's business, built to replace a $31–$100/month Booksy subscription + other complanits that he had when brought this idea to him. Service menu with per-cut durations and buffers, availability, card-on-file for ease of pay and no-shows cost, SMS reminders, and calendar sync so he isn't checking two places. \n \nCustomers book on the web, linkable from his Instagram bio. He works from a native app, because someone standing at a chair all day needs a real push notification the moment a slot fills, and iOS only delivers web push to installed PWAs. Different user, different frequency, different client. \n \nAvailability reads off Google Calendar; confirmations go out as .ics so they open in whatever calendar the customer already uses; the app writes to his own iPhone calendar through EventKit, which is the only route to iCloud since Apple ships no server-side API. \n \nShares its scheduling engine with the accounting scheduling site as a package rather than a service, same generation, buffers, and logic, nothing gets touched between these two unrelated businesses. \n \n The subscription price also buys reliability, and running it myself means owning A2P 10DLC registration for SMS, PCI scope on payments, and being the person he calls when booking breaks on a Saturday morning. Roughly $15–25/month in Twilio, Stripe, and hosting against $31–100 saved",
    image: placeholderImage,
  },
  stepOne: {
    title: "'Step One'",
    desc: 'Tech stack [React Native (Expo), TypeScript, FastAPI, Python, MediaPipe Pose Landmarker, OpenCV, dynamic time warping, PostgreSQL, Cloudflare R2, Clerk] \n As someone in world class marching band, I have found that there is no tool to help teach / practice your marching technique. This app will do just that, upload video you already have, and it extracts 3D joint positions, time-aligns your rep against a reference rep, and grades the angles that actually define the technique, using. All of these different marching techniques such as straight leg, bent leg, jazz running, marking time, etc, all have their own ruleset.\n \nOpen the app and you land on the week: sessions logged, per-technique trend, whether you\'re improving or sliding, then pick what you want to work on. \n \nFeedback reads the way a tech instructor talks — "your knee bent a little deeper than it should, but less than last week" — with your skeleton drawn next to the reference, instead of "your knee was 47.3 degrees and the target is 48.2." Nobody has or will ever fixed their technique from a decimal so I am ensuring that the algorithm will respond to the user in a understandable way. \n \n Additionally, I choose the method of Record-then-review rather than live feedback, because a phone far enough away to capture your full body is too far away to read feedback mid-rep, \n \nThese decisions carried the design of this. The heavy lifting estimation runs server-side in Python rather than on-device, so reference data and scoring rules change without needing an app update since these rules may change based on new techniques. In addition, these angles come from MediaPipe\'s metric world landmarks rather than screen coordinates, because a knee measured 30 degrees off-axis is a different number than the same knee measured head-on. If camera position leaks into the score, the reference set is worthless',
    image: placeholderImage,
  },
} satisfies Record<string, ContentEntry>;

// dev entry
export const currentProjects: ContentEntry[] = [
  dev.studyNeant,
  dev.musiciansFriend,
];

export const pastProjects: ContentEntry[] = [dev.portfolio, dev.prezPerm];

export const nextProjects: ContentEntry[] = [
  dev.productivityEnforcer,
  dev.autoClef,
  dev.momsBusiness,
  dev.barberBusiness,
  dev.stepOne,
];

//--------------- Musician Page -----------

export const musician = {
  njitWind: {
    title: "NJIT Wind Ensemble",
    desc: "Operating as lead trumpet, section leader, and soloist since September 2025.\n\nI came in hoping to find players I could learn from and that expectation got corrected fast, since the level was not what I had pictured. That turned into the opposite of a disappointment though, because by the second or third week I had taken the section leader role and the job stopped being about keeping up and started being about pulling other people forward, mentoring the trumpets on musicality and running the section across both semesters.\n\nFall and spring I held multiple solos and the lead book as the lead classical trumpet on campus. I had planned on playing jazz here too, and the audition is where I found out something useful about myself; the feedback was that the tone and the skills were there, with some real jazz instincts, yet it was obvious I was classically trained. That being said, I took no shame in it and made the call to stop splitting my attention, putting roughly 95% of my practice into classical while keeping a jazz lead part in the rotation to hold onto the range. The rest of that time goes toward auditioning for the top DCI corps.",
    homeDesc:
      "Operating as Lead Trumpet and Soloist. Leadership in this setting demands absolute accountability and precision, blending my individual sound into the ensemble's overall tone while being a role model in not just the trumpet section, but the overall ensemble.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  cabs: {
    title: "Hawthorne Caballeros DCI",
    desc: "Marching lead trumpet for the 2026 season, selected out of a national audition pool.\n\nDrum corps is often called the closest thing to the military without being in the military, and the schedule is where that comparison earns itself; 12+ hours of rehearsal a week, held alongside five classes and a concurrent internship. There is no version of that week where nothing gives, so the skill actually being trained is not endurance on the horn, rather it is deciding what gets your attention when everything is due at once.\n\nUltimately the standard is that none of the rest of your life is allowed to show up in the sound.",
    homeDesc:
      "Committing to the extreme discipline and physical expectations required at the world-class level of the marching arts for the 2026 season. Often known as the 'closest thing to the military without being in the military' due to the demanding intensity.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
  jazzEnsemble: {
    title: "EHS Jazz Ensemble (Soloist)",
    desc: "Four years in the jazz ensemble, 2021 to 2025.\n\nFreshman year I was not sure I wanted to be there and was too shy to take up any space in the room, which in a jazz setting is the one thing you cannot afford. The distance between that and my senior year is the whole reason this ensemble is on here.\n\nMy last concert I took an improv solo in front of a few hundred people. Improv leaves you nowhere to hide, since there is no part on the page to fall back on and everything you play is a decision you are making in real time in front of everyone. Overall that is the ensemble that proved to me the daily practice actually compounds, because none of that was talent showing up, it was four years of showing up.",
    image: jazz,
    imageLink:
      "https://drive.google.com/drive/folders/1xzQUrANXubfc2mdPc9OuQUM7rsg6rTrC?usp=sharing",
  },
  orchestra: {
    title: "EHS Orchestra (Soloist + Lead)",
    desc: "Performed as lead and soloist on works including the 'Overture from Carmen' and a featured solo on the 'Medley from Chicago.'\n\nOrchestral playing puts the trumpet in a different role than band does, since the section sits exposed and often enters late, which means the first note has to be right without the luxury of warming into a phrase first.\n\nYet what stays with me is the pressure. A solo in front of a full hall is one take with no second attempt, and learning to stay calm inside that is the same skill I use walking into a room to present something I built.",
    homeDesc:
      "Performed complex works like the 'Overture from Carmen' and featured as a soloist for the 'Medley from Chicago.' High-stakes performances forge absolute focus under pressure.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
  trumpetEnsemble: {
    title: "EHS Trumpet Ensemble (Soloist)",
    desc: "Small group performance leaves nowhere to hide.\n\nIn a full ensemble a missed note gets absorbed by the people around you, while in a trumpet ensemble there are only a handful of parts and every one of them is audible, so a mistake is not just heard, it is traced directly back to whoever made it. That exposure changes how you prepare, since the only way to be comfortable on stage is to have already removed the doubt in the practice room.\n\nUltimately this is where personal accountability stops being a value on a page and starts being the thing that makes the group sound good.",
    image: trumpet,
  },
  marchingBand: {
    title: "EHS Marching Band",
    desc: "Climbed from the third trumpet part to first and section leader, with the ensemble finishing as National Champions.\n\nI showed up as a shy freshman who did not know what to do or even what good trumpet playing was supposed to sound like, and the only reason that changed is that the rehearsals did not allow for it. Hours under the sun, laps for anyone who missed the standard, and a director who expected the section to march, play, and hold form at the same time. While I resented that at the time, it is the reason I know where my actual limit is.\n\nBy the end I was running sectionals almost every Tuesday across the four months of the season, and the role grew past my own section. People came to me when they needed something, whether that was musicality, a personal problem, or somewhere in the middle, and I ended up playing the older brother for a lot of them. That is where I learned that a leadership title is mostly irrelevant, since what people actually respond to is whether you are the person they come to when something goes wrong.",
    image: marchingEns,
    popupImage: marchingSolo,
    imageLink: "https://youtu.be/zn2gasWT_nU?si=9VZtbRpCVaShTp3A&t=86",
  },
} satisfies Record<string, ContentEntry>;

// music entries
export const currentEnsembles: ContentEntry[] = [
  musician.njitWind,
  musician.cabs,
];

export const pastEnsembles: ContentEntry[] = [
  musician.jazzEnsemble,
  musician.orchestra,
  musician.trumpetEnsemble,
  musician.marchingBand,
];

//--------------- Student Page -----------

export const student = {
  acct215: {
    code: "ACCT 215",
    title: "Managerial Accounting",
    desc: "Building on the foundation laid in ACCT 115 and 117, this accounting class focuses on the managerial side of a business.\n\nThis course works through job costing, variance analysis, and budgetary control, which sound like three separate topics, yet essentially they are the same question asked three ways: what did this actually cost us? Why did it differ from what we planned? And what do we do about it next quarter? While this is an accounting course, it also digs into how management actually makes decisions, the reasoning behind the scenes, and what separates a good call from a bad one.\n\nFinancial accounting has to satisfy an outside standard, while managerial accounting only has to be useful to the person reading it. That being said, the piece that carries the furthest is cost behavior, since almost every call a manager makes, whether to price a product, cut a line, or take on one more client, comes down to knowing which costs move with volume and which ones don't. Get that wrong and every number built on top of it is wrong too, which is why this is the accounting I expect to actually use.",
    image: accounting,
    imageLink: "https://catalog.njit.edu/search/?P=ACCT+215",
  },
  econ266: {
    code: "ECON 266",
    title: "Macroeconomics",
    desc: "Macroeconomics works through GDP, inflation, unemployment, and the fiscal and monetary levers that governments and central banks pull to move them.\n\nThe point is not really the individual formulas, but rather learning to read the environment a business is operating inside of, since a company can execute perfectly and still get hit by a rate decision it had no part in. While microeconomics explains why a firm prices the way it does, macro explains why that same price stops working the moment borrowing gets expensive and consumers pull back.\n\nThis is the course that gives an actual mechanism to the headlines about rate cuts and jobs reports, which matters for anyone who will eventually have to defend a plan built on assumptions about next year.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20266",
  },
  econ265: {
    code: "ECON 265",
    title: "Microeconomics",
    desc: "Microeconomics models supply, demand, elasticity, and how firms actually price under monopoly, oligopoly, and the market structures in between.\n\nThe mechanics are useful, yet the part that transfers is marginal thinking, the habit of asking what one more unit costs and what one more unit earns, rather than what the whole thing costs on average. That distinction decides real questions; whether a feature is worth building, whether a discount pays for itself, whether a customer is worth keeping.\n\nElasticity does the same work from the other direction, since knowing how much demand moves when a price moves is what keeps a pricing decision from being a guess.",
    image: micro,
    imageLink: "https://catalog.njit.edu/search/?P=ECON%20265",
  },
  math111: {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Calculus 1 covers limits, derivatives, and the rules for applying them, all pointed at the same underlying question of how quantities change rather than what they measure at a single frozen moment.\n\nThe mechanics take up most of the semester, yet the idea underneath is simpler than the notation makes it look; a derivative is just a rate, the answer to how fast something is moving at the exact instant you ask. Optimization is where that turns practical, since finding where a curve peaks or bottoms out is the same question as finding the price, the quantity, or the allocation that does the most with what you have.\n\nAlmost every quantitative course I take sits downstream of this, whether that's marginal thinking in economics or the models in analytics, both of which are built on a rate of change wearing different clothes. Ultimately this is the prerequisite that keeps showing up long after the exam is over.",
    image: calc,
    imageLink: "https://catalog.njit.edu/search/?P=MATH%20111",
  },
  cs114: {
    code: "CS 114",
    title: "Intro to Computer Science II",
    desc: "Intro to Computer Science II, also known as 'data structures and algorithms', worked through in Java, is in my opinon one of the most crucial and most important courses during my time in college. covering trees, stacks, sorting and searching sequences that runs on top of them along with learning about how to minamize run times withought scrificing accuracy.\n\nThe shift from the first two courses are extremely noticible as the question is no longer whether the code works, but rather what it costs to run in time and memory as the input grows. Reaching for a tree instead of a list, or a map instead of a nested loop, is the difference between code that holds up at scale and code that falls apart the first time there's real data behind it.\n\nDespite this being in java, the reasoning and logic behind this outlives the language, since analyzing complexity is a way of thinking rather then applying to one particular langauge or framework",
    image: cs114,
    imageLink: "https://catalog.njit.edu/search/?P=CS%20114",
  },
  mgmt216: {
    code: "MGMT 216",
    title: "Business Data Analytics",
    desc: "Business data analytics means running descriptive statistics, hypothesis tests, regression, and forecasting against real business data in Excel, which is where most of this work actually happens rather than in a statistics package nobody at the company has installed.\n\nAlthough intuition is fast and often right, it has no way of telling you whether the pattern it found is real or just noise, and that is the entire job of a hypothesis test. Regression takes it further by putting a number on the relationship, so 'sales went up after we changed the pricing' turns into an estimate of how much of that increase the pricing change is responsible for.\n\nForecasting pushes the same logic forward, though a model built on last year's conditions still depends on the assumption that this year resembles it.",
    image: stats,
    imageLink: "https://catalog.njit.edu/search/?search=mgmt+216",
  },
  is265: {
    code: "IS 265",
    title: "Intro to Information Systems",
    desc: "Intro to Information Systems surveys how software, hardware, and people combine into the systems an organization actually runs on, from the infrastructure underneath to the competitive strategy sitting on top of it.\n\nThe framing that sticks is that an information system is never just the technology; it is the technology, the process built around it, and the people who have to use it every day, and a failure in any one of the three sinks the other two. This is what explains why technically excellent projects still get abandoned, and why a tool nobody opens is worth less than a mediocre one everyone actually uses.\n\nUltimately this is the core framing of the degree, connecting what gets built to why a business needed it, which is the exact gap a technical product manager spends a career standing in.",
    image: mis,
    imageLink: "https://catalog.njit.edu/search/?search=is+265",
  },
  psy210: {
    code: "PSY 210",
    title: "Intro Psychology",
    desc: "Intro Psychology covers the fundamentals of learning, memory, perception, motivation, and the research methods used to study all of them.\n\nThe methods half matters as much as the content, since understanding sample size, control groups, and what a study can and cannot claim is what keeps you from taking a headline finding at face value.\n\nEvery product decision rests on an assumption about how people think and work, whether that's how much they retain from an onboarding flow, how they read a layout before they read a word of it, or what actually brings someone back to an app on day thirty. Rather than guessing at those assumptions, this is where they get named and tested.",
    image: book,
    imageLink: "https://catalog.njit.edu/search/?search=psy+210",
  },
} satisfies Record<string, CourseEntry>;

//student entry

export const currentCourse: CourseEntry[] = [
  student.acct215,
  student.econ266,
  student.econ265,
  student.math111,
  student.cs114,
  student.mgmt216,
  student.is265,
  student.psy210,
];

//--------------- Experience Page -----------

export const exp = {
  pptxApp: {
    title: "PPTX Web App",
    desc: "Every reporting cycle the investment team has 15+ documents — PDF, DOCX, PPTX, JSON, Markdown, PPTX, all between 5 to 200 pages ea with the purpose of creating a deck by hand. Other interns before me had abandoned this project because they thought it was infeasible due to cost restraints and accuracy. I did what they couldnt, I built a web app that parses these uploads to a Markdown file, as a 'deck script' which then the user can refine it conversationally with Claude, then renders it against 30+ internal slide templates. Shipped to internal production in Docker, eliminating ~17 hours of weekly manual formatting. \n \nI choose this path of hardcoding each of the template slides rather than prompting because I found that it was the most reliable way to incooperate all of these different slide designs while maintaining simplicity. ",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  esgMigration: {
    title: "ESG Migration + Automation ",
    desc: "Joined this ESG extraction project mid-build, took over as lead, and migrated a large 1k+ line Python script to Power Automate and Copilot Studio, both self-taught in two days. \n \nRebuilt this as a three-stage agent workflow thats driven off a Excel control column, user selects the company (from 500+) and which steps to run: agents research 5–8 documents each, parse them for target data, then extract a second data set. \n \nCut a full run from 28+ hours to 11 while raising accuracy and took a 5-month manual process down to 1–2 weeks of monitoring; directed 3 interns and ran requirements discovery directly with end users.",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  newspaperAgent: {
    title: "Newspaper Agent Workflow",
    desc: "Originally, other co workers wanted a system in where they can upload many files (20+ a day) + find other related articles on that topic and store them in a SharePoint. From there, would be able to communicate with an AI about the information from these documents. ex: 'whats new in the past 3 days', 'what is mentioned about ___ in ___ article', 'what is noteworthy from each of these', 'give me a summary of the past 2 days' \n \nI accomplished this by building an agent that triggers on upload, renames and categorizes PDF's automatically. Three different PowerAutomate flows were used to create this. ",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  teamsTranscription: {
    title: "Teams Transciption Agent",
    desc: "Teams generates a transcript for every call if enabled and outputs a file but nobody reads them,  the information exists and stays inaccessible. \n \nI built an agent that takes the auto-generated transcription file, then produces a summary and overview. + an agent that can you can have a conversation with (like the Newspaper workflow), answering follow-up questions about what was said, email action reminders, anything based on the meeting. Created this on the final days of my internship",
    image: orion_img,
    imageLink: "https://orionrp.com/",
  },
  orionRole: {
    title: "Orion Resource Partners IT Intern",
    desc: "Led internal tooling and AI automation for the investment team: four shipped projects, three interns directed, one production deployment. Most of the work wasn't writing code — it was sitting with the people doing the manual version and figuring out what they'd actually use.",
    image: orion_img,
    imageLink: "https://www.orionresourcepartners.com/",
  },
} satisfies Record<string, ContentEntry>;

// internship entry
export const orion: ContentEntry[] = [
  exp.pptxApp,
  exp.esgMigration,
  exp.newspaperAgent,
  exp.teamsTranscription,
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

export const experience: ContentEntry[] = [exp.orionRole];

export const currentCourseHome: CourseEntry[] = [
  student.is265,
  student.cs114,
  student.acct215,
];

export const projectsHome: ContentEntry[] = [
  dev.studyNeant,
  dev.musiciansFriend,
  dev.stepOne,
];

export const musicianHome: ContentEntry[] = [
  musician.cabs,
  musician.njitWind,
  musician.orchestra,
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
