"use client";

import React from "react";
import { motion } from "motion/react";

const StaggeredTextEffect = () => {
  return (
    <>
      <section className="grid bg-lime-300 place-content-center gap-6 text-black px-8 h-screen">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">LinkedIn</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </section>
    </>
  );
};

export default StaggeredTextEffect;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <>
      <motion.a
        href={href}
        className="font-extrabold tracking-tighter text-8xl relative overflow-hidden whitespace-nowrap uppercase"
        initial="intial"
        whileHover="hovered"
      >
        <motion.div>
          {children.split("").map((letter, index) => {
            return (
              <>
                <motion.span
                  variants={{
                    intial: { y: 0 },
                    hovered: { y: "-100%" },
                  }}
                  transition={{
                    delay: index * 0.02,
                  }}
                  key={index + letter + "a"}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              </>
            );
          })}
        </motion.div>
        <motion.div className="absolute inset-0">
          {children.split("").map((letter, index) => {
            return (
              <>
                <motion.span
                  variants={{
                    intial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    delay: index * 0.02,
                  }}
                  key={index + letter + "b"}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              </>
            );
          })}
        </motion.div>
      </motion.a>
    </>
  );
};
