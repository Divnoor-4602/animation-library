"use client";

import React, { useEffect, useRef } from "react";
// import an image
import image from "../../public/assets/images/picture.jpeg";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "@studio-freight/lenis";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main>
      <TextParallax />
    </main>
  );
};

// text parallax
const TextParallax = () => {
  // container ref
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <main className="overflow-hidden">
        <div className="h-[100vh]"></div>

        {/* slider div */}
        <div ref={container}>
          <Slider left={"-55%"} progress={scrollYProgress} direction={"left"} />
          <Slider
            left={"-15%"}
            progress={scrollYProgress}
            direction={"right"}
          />
          <Slider left={"-60%"} progress={scrollYProgress} direction={"left"} />
        </div>

        <div className="h-[100vh]"></div>
      </main>
    </>
  );
};

// slider
const Slider = ({ left, progress, direction }) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

  return (
    <>
      <motion.div
        className="flex whitespace-nowrap relative"
        style={{ left: left, x }}
      >
        <Phrase src={image} text={"Frontend Web Developer"}></Phrase>
        <Phrase src={image} text={"Frontend Web Developer"}></Phrase>
        <Phrase src={image} text={"Digital Product Designer"}></Phrase>
      </motion.div>
    </>
  );
};

// phrase
const Phrase = ({ src, text }: { src: StaticImageData; text: string }) => {
  return (
    <>
      <div className="flex items-center gap-5 px-5">
        <p className="text-[7vw]">{text}</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image
            fill
            src={src}
            className="object-cover"
            alt="frontend-web-developer"
          />
        </span>
      </div>
    </>
  );
};

export default Page;
