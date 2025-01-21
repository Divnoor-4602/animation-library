"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Lenis from "@studio-freight/lenis";

// import all the required images
const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
];

const Home = () => {
  const container = useRef<HTMLDivElement>(null);
  const { height } = useDimesion();
  // get the scroll progress of the gallery container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // to have a parallax effect, seperate y's are needed for each columns
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    // main container
    <main>
      <div className="h-[100vh]" />
      {/* gallery container */}
      <div
        className="flex h-[175vh] bg-neutral-800 flex-row gap-[2vw] p-[2vw] overflow-hidden"
        ref={container}
      >
        <Column images={images.slice(0, 3)} y={y} columnStyle={"-45%"} />
        <Column images={images.slice(3, 6)} y={y1} columnStyle={"-20%"} />
        <Column images={images.slice(6, 9)} y={y2} columnStyle={"-90%"} />
        <Column images={images.slice(0, 3)} y={y3} columnStyle={"-60%"} />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
};

// each column can have 3 images
// Removed import of MotionValue from "motion"
import useDimesion from "@/lib/hooks/useDimension";

const Column = ({
  images,
  y,
  columnStyle,
}: {
  images: string[];
  columnStyle?: string;
  y?: MotionValue<number>;
}) => {
  return (
    <>
      {/* column */}
      <motion.div
        className="h-full w-1/4 flex flex-col gap-[2vw] min-w-[250px] relative"
        style={{
          y,
          top: `${columnStyle}`,
        }}
      >
        {images.map((image, index) => {
          return (
            <div key={image} className="w-full h-full relative">
              {/* image container */}
              <Image
                src={`/assets/images/${image}`}
                alt={`image-${index}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Home;
