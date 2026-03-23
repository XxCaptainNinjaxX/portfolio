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
          I’ve always loved the process of creating, whether it was building
          with Legos as a kid or writing software today. But over time, I
          realized that just writing code wasn't enough for me. It’s a lot like
          looking at a brand new piece of music—without direction, it’s just a
          sea of scattered notes. That’s why I shifted my focus from pure
          Computer Science to Product Management. I want to be the one putting
          all the small pieces together, bridging the gap between raw code and
          actual solutions that help people.
        </p>
        <p>
          Currently, I am a Freshman at NJIT pursuing my{" "}
          <strong>B.S. in Management Information Systems</strong> with a minor
          in <strong>Computer Science</strong>, graduating in 2029.
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
