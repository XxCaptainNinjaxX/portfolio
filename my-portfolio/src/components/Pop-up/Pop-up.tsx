import "./Pop-up.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface ModalProps {
  content: string;
  title: string;
  picture: string;
  imageLink: string;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  useEffect(() => {
    const escKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    window.addEventListener("keydown", escKey);
    return () => window.removeEventListener("keydown", escKey);
  }, [props]);

  return (
    <div className="blur-overlay" onClick={props.onClose}>
      <motion.div
        className="popup-box"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="popup-header">
          <h2>{props.title}</h2>

          {props.picture && (
            <a href={props.imageLink} target="_blank" rel="noopener noreferrer">
              <img src={props.picture} alt={props.title} className="image" />
            </a>
          )}
        </div>

        <div className="popup-body">
          <p>{props.content}</p>
        </div>

        <div className="popup-footer">
          <button className="close-btn" onClick={props.onClose}>
            Close
          </button>
          <span className="popup-instruction">Press ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
}
