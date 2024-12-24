"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        width,
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      {/* slide thingy */}
      <motion.div
        className="absolute bg-amber-600 w-full h-full z-24 top-4 rounded-lg bottom-4"
        animate={slideControls}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      />
    </div>
  );
};

export default Reveal;
