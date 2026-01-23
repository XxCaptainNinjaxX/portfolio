import "./Card.css";

interface cardProp {
  desc: string;
  alt: string;
  image: string;

  /* 
  int = "number", 
  float = "number"
  img/file = "string" (cause we type path)

  */
}

export default function (props: cardProp) {
  return (
    <>
      <div className="course">
        <img src={props.image} alt={props.alt} className="course-image" />

        <p className="course-desc">{props.desc}</p>
      </div>
    </>
  );
}
