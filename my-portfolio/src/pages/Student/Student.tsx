import "../SubPage.css";

import { currentCourse } from "../../components/Data/data";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

export default function Student() {
  return (
    <div className="student-page">
      <h1>Student</h1>
      <div className="page-intro">
        <p>
          I have always loved the process of creating, whether that was building
          with Legos as a kid or writing software now. Over time though, I
          realized that writing code by itself was never going to be enough for
          me. It was a lot like opening a brand new piece of music; without
          someone deciding on the direction, it is just a sea of scattered
          notes. That is why I moved toward Product Management rather than
          staying in pure Computer Science. I want to be the one putting the
          small pieces together and closing the gap between raw code and
          something that actually solves a problem for a person.
        </p>
        <p>
          My coursework is what keeps that balance in front of me. A pure
          Computer Science degree is theory, code, and math, while mine sits
          between management, business, finance, AND the code itself. The same
          thing showed up in my Info Sys. class, where I could have sat back and
          let the group carry the work; instead I led and took initive it for
          most of the semester.
        </p>
        <p>
          Currently, I am a Sophomore at NJIT pursuing my
          <strong> B.S. in Management Information Systems</strong> with a{" "}
          <strong>minor in Computer Science</strong> and a possible{" "}
          <strong>second minor in Psychology</strong>, graduating in May 2029.
          The classes below are the ones that have mattered most so far.
        </p>
      </div>

      <PageHeader title="Note Worthy Courses Previously taken" />

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
    </div>
  );
}
