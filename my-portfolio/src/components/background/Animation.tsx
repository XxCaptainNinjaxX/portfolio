import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({ children, className = "" }: RevealProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.5 },
    transition: { duration: 1.0 },
  };

  return (
    <motion.div className={className} {...fadeInUp}>
      {children}
    </motion.div>
  );
}
