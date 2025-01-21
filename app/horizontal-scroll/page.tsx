"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { CARDS } from "@/constants";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  return (
    <div className="bg-neutral-800">
      {/* scroll down */}
      <div className="h-48 flex items-center justify-center">
        <span className="uppercase text-neutral-500 font-semibold">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      {/* scroll up */}
      <div className="h-48 flex items-center justify-center">
        <span className="uppercase text-neutral-500 font-semibold">
          Scroll down
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const springScroll = useSpring(scrollYProgress, {
    damping: 10,
    stiffness: 90,
  });

  const x = useTransform(springScroll, [0, 1], ["1%", "-95%"], {});

  return (
    <>
      <section ref={ref} className="relative h-[300vh] bg-neutral-900">
        <div className="bg-purple-600 h-screen sticky top-0 flex items-center overflow-hidden">
          <motion.div className="flex gap-4" style={{ x }}>
            {CARDS.map((card) => {
              return (
                <Card
                  title={card.title}
                  url={card.url}
                  id={card.id}
                  key={card.id}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

interface CardProps {
  url: string;
  title: string;
  id: number;
}

const Card = ({ url, title }: CardProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-orange-100  my-6 pt-12 rounded-xl w-[600px] h-[600px]">
        <Image
          src={url}
          alt="card image"
          height={400}
          width={400}
          className="object-contain rounded-2xl shadow-md"
        />
        <p className="tracking-tighter mt-4 font-bold text-xl">{title}</p>
      </div>
    </>
  );
};

export default Page;
