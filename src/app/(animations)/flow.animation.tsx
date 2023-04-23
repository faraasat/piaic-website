"use client";

import { FC } from "react";

import { motion } from "framer-motion";

import { IFlowAnimation } from "./index.d";

const FlowAnimation: FC<IFlowAnimation> = ({
  initialOpacity = 0,
  initialX,
  initialY,
  initialLeft,
  initialRight,
  initialTop,
  initialBottom,
  initialScale,
  initialScaleX,
  initialScaleY,
  initialRotate,
  initialRotateX,
  initialRotateY,
  finalOpacity = 1,
  finalX,
  finalY,
  finalLeft,
  finalRight,
  finalTop,
  finalBottom,
  finalScale,
  finalScaleX,
  finalScaleY,
  finalRotate,
  finalRotateX,
  finalRotateY,
  children,
  staggerChildren,
  staggerDirection,
  once = false,
  transitionType = "linear",
  transitionDuration,
  transitionDelay = 0,
  style,
  className,
}) => {
  return (
    <motion.div
      initial={{
        opacity: initialOpacity,
        x: initialX,
        y: initialY,
        left: initialLeft,
        right: initialRight,
        bottom: initialBottom,
        top: initialTop,
        scale: initialScale,
        scaleX: initialScaleX,
        scaleY: initialScaleY,
        rotate: initialRotate,
        rotateX: initialRotateX,
        rotateY: initialRotateY,
      }}
      whileInView={{
        opacity: finalOpacity,
        x: finalX,
        y: finalY,
        left: finalLeft,
        right: finalRight,
        bottom: finalBottom,
        top: finalTop,
        scale: finalScale,
        scaleX: finalScaleX,
        scaleY: finalScaleY,
        rotate: finalRotate,
        rotateX: finalRotateX,
        rotateY: finalRotateY,
      }}
      viewport={{ once: once }}
      transition={{
        ease: transitionType,
        duration: transitionDuration,
        delay: transitionDelay,
        staggerChildren: staggerChildren,
        staggerDirection: staggerDirection,
      }}
      style={style}
      className={className}
    >
      {children && children}
    </motion.div>
  );
};

export default FlowAnimation;
