"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <>
      <div className="h-[150vh]" />
      <motion.div
        className="h-[100vh] bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        className={`h-[100vh]  ${
          isInView ? "bg-blue-600" : "bg-red-600"
        } transition duration-1000`}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;
