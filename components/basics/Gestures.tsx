"use client";

import { motion, MotionConfig } from "motion/react";

const Gestures = () => {
  return (
    <div className="min-h-screen justify-center flex items-center flex-col gap-4">
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="bg-indigo-600 px-4 py-2 rounded-lg text-white"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
        >
          Animate
        </motion.button>
        <motion.button
          className="bg-rose-600 px-4 py-2 rounded-lg text-white"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
        >
          Animate
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
