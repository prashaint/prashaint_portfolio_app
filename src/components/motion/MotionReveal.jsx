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

const MotionReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  className = "",
  as = "div",
}) => {
  const shouldReduceMotion = useReducedMotionPreference();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = motion[as] || motion.div;
  const offset = (directionOffsets[direction] || directionOffsets.up)(distance);

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default MotionReveal;
