"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Fix import: motion from "framer-motion"
import { ArrowLeft } from "lucide-react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="bg-gray-900 h-screen flex items-center justify-center">
      <motion.div
        className="relative w-[600px] h-[400px] cursor-pointer"
        onClick={handleFlip}
        style={{
          perspective: "1000px", // Add perspective to the parent
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            transformStyle: "preserve-3d", // Preserve 3D depth
          }}
        >
          <FrontCard />
          <BackCard />
        </motion.div>
      </motion.div>
    </main>
  );
};

const FrontCard = () => {
  return (
    <motion.div
      className="bg-orange-500 w-full h-full rounded-3xl border-2 border-dashed border-orange-900 absolute"
      style={{
        backfaceVisibility: "hidden",
      }}
    >
      <div className="bg-orange-200 text-orange-600 font-bold w-fit px-4 py-1 rounded-2xl text-sm mt-4 ml-4">
        Question
      </div>
      <div className="text-orange-900 text-2xl font-bold mt-8 ml-4">
        What is the capital of France?
      </div>
      <hr className="border-t-2 border-dashed border-orange-900 w-full mt-4" />
    </motion.div>
  );
};

const BackCard = () => {
  return (
    <motion.div
      className="bg-blue-900 w-full h-full rounded-3xl border-2 border-dashed border-blue-500 absolute"
      style={{
        transform: "rotateX(180deg)", // Ensure back card starts flipped
        backfaceVisibility: "hidden",
      }}
    >
      <div className="bg-blue-200 text-blue-600 font-bold w-fit px-4 py-1 rounded-2xl text-sm mt-4 ml-4">
        Answer
      </div>
      <div className="text-white text-2xl font-bold mt-8 ml-4">Paris</div>
      <hr className="border-t-2 border-dashed border-blue-500 w-full mt-4" />
      <button className="absolute bottom-4 left-4">
        <ArrowLeft className="text-blue-900" />
      </button>
    </motion.div>
  );
};

export default FlipCard;
