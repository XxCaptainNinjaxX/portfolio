import { useEffect } from "react";
import { motion } from "framer-motion";

import "./Preloader.css";

interface PreloaderProps {
  progress: number;
}

export default function Preloader(props: PreloaderProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="preloader-count">{props.progress}%</span>
    </motion.div>
  );
}
