import Reveal from "@/components/on-scroll-reveal/Reveal";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-slate-800">
      <div className="pt-40 px-32">
        <Reveal>
          <h1 className="text-7xl font-extrabold tracking-tighter text-white">
            Hi, I am Div.
          </h1>
        </Reveal>
      </div>
    </div>
  );
};

export default Page;
