"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const CreativeButtons = () => {
  return (
    <main className="h-screen grid  place-content-center bg-gray-200 gap-8">
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

  const arrowVariants = {
    initial: {},
    hovered: {},
  };

  return (
    <>
      <motion.div
        className="uppercase font-bold bg-white py-4 px-8 rounded-[28px] overflow-hidden text-nowrap relative flex justify-center items-center"
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
  const bgVariants = {
    initial: {
      scale: 0.02,
    },
    hovered: {
      scale: 1,
    },
  };

  const textVariants = {
    initial: { x: 0 },
    hovered: { x: "-20%", color: "white" },
  };

  return (
    <>
      <motion.div
        className="rounded-[28px] bg-white relative  flex items-center gap-4 w-[160px] h-[55px] justify-center overflow-hidden"
        initial="initial"
        whileHover={"hovered"}
      >
        {/* backgorund animation */}
        <motion.div
          className="bg-blue-800 rounded-full size-[400px] absolute -left-[170px] "
          variants={bgVariants}
          transition={{
            type: "spring",
            bounce: 0.1,
            duration: 0.5,
          }}
        />
        {/* text translate animation */}
        <motion.div
          className="uppercase tracking-tighter font-bold text-xl absolute left-[40px]"
          variants={textVariants}
        >
          ABOUT US
        </motion.div>
        {/* arrow animation */}
        <motion.div className="absolute right-[11px]">
          <ArrowRight className="text-black" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CreativeButtons;
