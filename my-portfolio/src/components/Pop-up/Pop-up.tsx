import "./Pop-up.css";
import { motion } from "framer-motion"; // Let's add smooth entry animation!

interface ModalProps {
  content: string;
  title: string;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
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
        </div>
        <br />
        <div className="popup-body">
          <p>{props.content}</p>
        </div>

        <div className="popup-footer">
          <button className="close-btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
