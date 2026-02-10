import React from "react";
import { motion } from "framer-motion";
import { useReducedMotionPreference } from "../../hooks/useReducedMotion";

const PageTransition = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotionPreference();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
