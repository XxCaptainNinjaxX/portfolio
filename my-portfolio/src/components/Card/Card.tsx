import "./Card.css";
import { usePopup } from "../Pop-up/Pop-upContext";

interface cardProp {
  desc: string;
  alt: string;
  image: string;
  popupTitle: string;
  popupDesc: string;
  imageLink?: string;
  onClick?: () => void;
}

export default function Card(props: cardProp) {
  const { openPopup } = usePopup();

  const handleClick = () => {
    if (props.popupTitle && props.popupDesc) {
      openPopup(
        props.popupTitle,
        props.popupDesc,
        props.imageLink || "",
        props.image,
      );
    }
  };

  return (
    <>
      <div className="course" onClick={handleClick}>
        <img src={props.image} alt={props.alt} className="course-image" />
        <p className="course-desc">{props.desc}</p>
      </div>
    </>
  );
}
