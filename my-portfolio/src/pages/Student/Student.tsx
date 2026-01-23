import Courses from "../../components/Card/Card";
// Import your images...

export default function Student() {
  return (
    <section style={styles.container}>
      {/* LEFT SIDE: The Title (Takes up 30%) */}
      <div style={styles.leftSide}>
        <h1 style={styles.title}>Student</h1>
      </div>

      {/* RIGHT SIDE: The Grid (Takes up 70%) */}
      <div style={styles.rightSide}>
        {/* The Cards go here */}
        <Courses image="/path/to/image.jpg" desc="Calculus 1" alt="Math" />
        <Courses
          image="/path/to/image.jpg"
          desc="FinTech Intro"
          alt="Finance"
        />
        <Courses image="/path/to/image.jpg" desc="Computer Science" alt="CS" />
      </div>
    </section>
  );
}

// Simple Styles for the Layout
const styles = {
  container: {
    display: "flex", // <--- The Magic: Side-by-Side
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    gap: "2rem",
  },
  leftSide: {
    flex: "1", // Takes 1 portion of space
    borderRight: "1px solid #ddd", // Optional: Divider line
  },
  title: {
    fontSize: "3rem",
    position: "sticky" as "sticky", // Keeps title visible while scrolling
    top: "20px",
  },
  rightSide: {
    flex: "3", // Takes 3 portions of space (wider)
    display: "flex", // Makes the cards sit next to each other
    flexWrap: "wrap" as "wrap", // wraps to next line if too many
    gap: "20px",
  },
};
