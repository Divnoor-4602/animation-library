"use client";

import Content from "../../components/sticky-footer/Content";
import React from "react";

const page = () => {
  return (
    <>
      {/* intro */}
      <main className="h-screen bg-black text-white text-4xl tracking-tighter flex items-center justify-center font-bold">
        This is an example of sticky footer made using CSS
      </main>
      <div
        className="relative h-[800px]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* the height is calced like that to use sticky, -top is used to hide the content above */}
        <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
          <div className="h-[800px] sticky top-[calc(100vh-800px)]">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
