"use client";

import { motion, useAnimationControls } from "motion/react";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <>
      <div className="h-screen  flex items-center justify-center flex-col gap-6">
        {/* on click of the button go from intial to flip state */}
        <motion.button
          onClick={handleClick}
          className="bg-indigo-600 px-4 py-2 rounded-lg text-white"
          layout
        >
          Animate
        </motion.button>
        <motion.div
          className="bg-red-600 rounded-xl h-40 w-40"
          variants={{
            intial: {
              rotate: 0,
            },
            flip: {
              rotate: 360,
            },
          }}
          initial="intial"
          animate={controls}
        />
      </div>
    </>
  );
};

export default AnimationControls;
