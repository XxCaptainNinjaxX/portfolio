import "./Student.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

// 1. The Data: Easy to edit, easy to read
const currentCourse = [
  {
    code: "CS 113",
    title: "Intro to Computer Science I",
    desc: "Learning Java, OOP principles, and basic algorithms.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "IS 117",
    title: "Intro to Website Development",
    desc: "HTML, CSS, and Building responsive websites.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ACCT 115",
    title: "Fundamentals of Accounting",
    desc: "Balance sheets, income statements, and financial analysis.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 190",
    title: "Intro to Business",
    desc: "Business structures, management, and ethics.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ENGL 102",
    title: "Intro to Research Writing",
    desc: "Academic research and writing techniques.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MATH 111",
    title: "Calculus 1",
    desc: "Derivatives, integrals, and limits.",
    image: "/android-chrome-192x192.png",
  },
];
const nextCourses = [
  {
    code: "CS 114",
    title: "Intro to Computer Science I",
    desc: "Learning C++, and advanced algorithms concepts.",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MIS 245",
    title: "Intro to Management Info Systems",
    desc: "something about info systems",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 116",
    title: "Quantitative Analysis Appl Buisness",
    desc: "something about stats for buisness",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "ECON 265",
    title: "Macroeconomics",
    desc: "something about macro",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "MGMT 290",
    title: "Buisness Law",
    desc: "sum shit abt learning law",
    image: "/android-chrome-192x192.png",
  },
  {
    code: "LIT 230",
    title: "Intro to Literature",
    desc: "practically english pt3",
    image: "/android-chrome-192x192.png",
  },
];

const pastCourses = [
  {
    code: "temp",
    title: "temp",
    desc: "temp",
    image: "/android-chrome-192x192.png",
  },
];
export default function Student() {
  return (
    <div className="student-page">
      <h1>Student</h1>

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
