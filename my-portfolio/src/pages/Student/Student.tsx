import "./Student.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";
const currentCourse = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Starting from scratch to build the logic behind applications. I'm using Java to master the fundamentals of Object-Oriented Programming (OOP) so I can create code that is actually reusable and efficient.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "IS 117",
    title: "Intro to Website Development",
    desc: "Designing the 'face' of the web. I'm focusing on UI/UX principles with HTML5 and CSS3 because I believe a product is only as good as its user experience.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Learning the scorecard of business. I'm analyzing balance sheets and cash flows to understand the financial reality behind the companies I plan to build for.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 190",
    title: "Intro to Business",
    desc: "Looking at the big picture of the global economy. I'm studying how market structures and operational frameworks actually function so I can identify where technology fits in.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ENGL 102",
    title: "Intro to Research Writing",
    desc: "Since the world never stops evolving, neither can we. I'm refining my ability to research complex topics—like AI ethics—and synthesize them into arguments that actually make sense.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Building the mathematical intuition needed for quantitative analysis. I'm applying derivatives to model rates of change, which is the foundation of any financial optimization.",
    image: "/android-chrome-192x192.png",
  },
];

const nextCourses = [
  {
    code: "CS 114",
    title: "Intro to Computer Science II",
    desc: "Taking the training wheels off. I'll be diving deep into data structures like Trees and Stacks to ensure the software I build isn't just functional, but optimized for speed.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MIS 245",
    title: "Mgmt. Information Systems",
    desc: "Bridging the gap between the code and the company. I'll be analyzing how enterprise systems like e-commerce and databases actually drive business value.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 116",
    title: "Quant. Analysis for Business",
    desc: "Moving from guessing to knowing. I'll be using statistical software and regression analysis to make decisions based on data rather than just intuition.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ECON 265",
    title: "Microeconomics",
    desc: "Understanding why people buy. I'll be analyzing consumer behavior and pricing strategies, which is critical for anyone trying to launch a product.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 290",
    title: "Business Law I",
    desc: "Protecting the product. I'll be learning the legal frameworks—from contracts to IP rights—that are necessary to operate a business safely.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "LIT 230",
    title: "Intro to Literature",
    desc: "Sharpening my critical thinking. Deconstructing complex narratives helps me better understand different perspectives and communicate ideas clearly.",
    image: "/android-chrome-192x192.png",
  },
];

const pastCourses = [
  {
    code: "CS 100",
    title: "Roadmap to Computing",
    desc: "Where it started. I built my first scripts in Python and learned that coding is really just solving problems through logic and control structures.",
    image: "/android-chrome-192x192.png",
  },
];

export default function Student() {
  return (
    <div className="student-page">
      <h1>Student</h1>
      <div className="page-intro">
        <p>
          For as long as I can remember, I've always loved creating whether it
          was stories, Legos, or now, software. I realized that while code is
          powerful, AI is evolving quickly. That being said, I switched my focus
          from CS major with intent of becoming software engineer to a Solutions
          Engineer/Architect. My goal is is to leverage my background in
          programming with the knowledge I am learning about business and
          finance to bridge the gap between complex financial systems and
          user-friendly solutions.
        </p>
        <p>
          Today, I am currently at NJIT as I pursue my{" "}
          <strong> B.S in Financial Technology </strong> with a double minor in{" "}
          <strong> Computer Science and Data Analytics </strong> in hopes to
          graduate by 2029.
        </p>
      </div>

      <PageHeader title="Current Courses (Spring 2026)" />

      <div className="currentGrid">
        {currentCourse.map((course, index) => (
          <Card
            key={index}
            desc={course.title}
            alt={course.title}
            image={course.image}
            popupTitle={`${course.title} (${course.code})`}
            popupDesc={course.desc}
          />
        ))}
      </div>

      <PageHeader title="Next Semester Courses (Fall 2026)" />

      <div className="nextGrid">
        {nextCourses.map((course, index) => (
          <Card
            key={index}
            desc={course.title}
            alt={course.title}
            image={course.image}
            popupTitle={`${course.title} (${course.code})`}
            popupDesc={course.desc}
          />
        ))}
      </div>

      <PageHeader title="Past Courses" />

      <div className="pastGrid">
        {pastCourses.map((course, index) => (
          <Card
            key={index}
            desc={course.title}
            alt={course.title}
            image={course.image}
            popupTitle={`${course.title} (${course.code})`}
            popupDesc={course.desc}
          />
        ))}
      </div>
    </div>
  );
}
