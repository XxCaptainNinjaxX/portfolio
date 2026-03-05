import "../SubPage.css";

import {
  currentCourse,
  nextCourses,
  pastCourses,
} from "../../components/Data/data";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

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
          Engineer/Architect. My goal is to leverage my background in
          programming with the knowledge I am learning about business and
          finance to bridge the gap between complex financial systems and
          user-friendly solutions.
        </p>
        <p>
          Today, I am currently at NJIT as I pursue my{" "}
          <strong> B.S in Financial Technology </strong> with a minor in{" "}
          <strong> Computer Science </strong> in hopes to graduate by 2029.
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
            imageLink={course.imageLink}
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
            imageLink={course.imageLink}
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
            imageLink={course.imageLink}
          />
        ))}
      </div>
    </div>
  );
}
