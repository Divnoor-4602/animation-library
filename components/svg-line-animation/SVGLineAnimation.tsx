"use client";

import { motion } from "motion/react";
import React from "react";

const SVGLineAnimation = () => {
  return (
    <>
      <div className="h-screen w-full bg- " />
      <div className="min-h-screen w-full bg-green-950 text-yellow-50 flex items-center justify-center">
        <h1 className="max-w-5xl text-6xl font-normal tracking-tighter">
          <span className="relative">
            Scale
            <svg
              width="73"
              height="70"
              viewBox="0 0 73 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-16 right-0 bottom-0 -translate-y-16"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M1 68.5534C1 57.8381 10.3948 41.0307 20.5 35.9781C30.0565 31.1999 42.0305 24.648 49.3142 35.9781C51.2712 39.0223 50.0463 56.4445 40 50.8633C30.8453 45.7773 32.7402 26.9756 36.3247 19.8067C39.9708 12.5143 46.9009 12.3529 53.5 9.05338C56.5502 7.52826 68.5757 7.63656 71.4581 6.48358C72.7646 5.96102 63.8456 1.12561 62.5454 1.05338C51.9706 0.465888 65.1496 4.92157 69.1611 4.92157C76.7641 4.92157 64.5 16.1303 64.5 19.8067"
                stroke="#9CE508"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          your{" "}
          <span className="relative">
            Marketing{" "}
            <svg
              width="291"
              height="90"
              viewBox="0 0 291 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 -left-2 right-0 bottom-0 w-[250px]"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                d="M178.674 2.48906C141.741 2.48906 102.876 -0.635282 66.3234 4.25381C44.2805 7.20217 3.94096 14.9923 1.50002 38.5606C-1.00485 62.7462 29.7413 69.1299 53.3161 73.9292C109.034 85.272 211.062 97.9514 264.5 79.7146C287.154 71.9836 284 57 289 34C289 34 280.51 21.8921 275 19C260.98 11.6396 262.953 9.38734 247.104 7.00683C197.391 -0.459809 146.853 1.08967 96.5906 1.21844C72.7183 1.2796 46.7347 0.091151 23.2256 3.75968"
                stroke="#9CE508"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          with{" "}
          <span className="relative">
            AI tools
            <svg
              className="absolute top-0 right-0 bottom-0 left-1 translate-y-16"
              width="180"
              height="12"
              viewBox="0 0 180 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                d="M1 1C36.6706 8.54624 122.21 19.111 179 1"
                stroke="#FACC15"
              />
            </svg>
          </span>
        </h1>
      </div>
    </>
  );
};

export default SVGLineAnimation;
