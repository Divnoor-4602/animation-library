"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div className="min-h-screen justify-center flex items-center flex-col gap-4">
      <motion.button
        className="bg-indigo-600 px-4 py-2 rounded-lg text-white"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Animate
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="w-36 h-36 bg-slate-800 rounded-2xl"
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: 0, scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
