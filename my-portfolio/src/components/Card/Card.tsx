import { useState } from "react";

import "./Card.css";
import { usePopup } from "../Pop-up/Pop-upContext";

interface cardProp {
  desc: string;
  alt: string;
  image: string;
  popupImage?: string;

  popupTitle: string;
  popupDesc: string;
  imageLink?: string;
  onClick?: () => void;
}

export default function Card(props: cardProp) {
  const { openPopup } = usePopup();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleClick = () => {
    if (props.popupTitle && props.popupDesc) {
      const imageToShow = props.popupImage || props.image;

      openPopup(
        props.popupTitle,
        props.popupDesc,
        props.imageLink || "",
        imageToShow,
      );
    }
  };

  return (
    <>
      <div className="course" onClick={handleClick}>
        <img
          src={props.image}
          alt={props.alt}
          className={`course-image ${isImageLoaded ? "is-loaded" : ""}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsImageLoaded(true)}
        />
        <p className="course-desc">{props.desc}</p>
      </div>
    </>
  );
}
