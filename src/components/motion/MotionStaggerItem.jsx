import React from "react";
import { motion } from "framer-motion";
import { useReducedMotionPreference } from "../../hooks/useReducedMotion";

const directionOffsets = {
  up: (d) => ({ y: d, x: 0 }),
  down: (d) => ({ y: -d, x: 0 }),
  left: (d) => ({ x: -d, y: 0 }),
  right: (d) => ({ x: d, y: 0 }),
  none: () => ({ x: 0, y: 0 }),
};

const MotionStaggerItem = ({
  children,
  direction = "up",
  distance = 20,
  duration = 0.5,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotionPreference();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = (directionOffsets[direction] || directionOffsets.up)(distance);

  const itemVariants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default MotionStaggerItem;
