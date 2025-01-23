"use client";

import React from "react";
import { delay, motion } from "motion/react";

const CreativeButtons = () => {
  return (
    <main className="h-screen grid  place-content-center bg-gray-300 gap-8">
      <PushButton />
      <AboutButton />
    </main>
  );
};

const PushButton = () => {
  const textVariants = {
    initial: {
      y: 0,
    },

    hovered: {
      y: "-150%",
    },
  };

  const boxVariants = {
    intial: {
      y: "100%",
      scale: 0,
    },
    hovered: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <>
      <motion.div
        className="uppercase font-bold bg-white py-4 px-8 rounded-[28px] overflow-hidden text-nowrap relative"
        initial="intial"
        whileHover={"hovered"}
      >
        <motion.div
          className="tracking-tighter font-bold text-xl"
          variants={textVariants}
        >
          Our work
        </motion.div>
        {/* animatable background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center  rounded-[28px] bg-yellow-300"
          variants={boxVariants}
          transition={{ duration: 0.25 }}
        >
          {/* Our work */}
        </motion.div>
        {/* animatable text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold tracking-tighter"
          variants={{
            intial: {
              y: "100%",
            },
            hovered: {
              y: 0,
            },
          }}
          transition={{ duration: 0.25 }}
        >
          Our Work
        </motion.div>
      </motion.div>
    </>
  );
};

const AboutButton = () => {
  return (
    <>
      <div className="rounded-[28px] px-8 py-4 bg-white relative overflow-hidden">
        <div className="text-xl font-medium tracking-tight uppercase">
          About us
        </div>
      </div>
    </>
  );
};

export default CreativeButtons;
