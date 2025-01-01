import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-12 py-16 min-h-screen bg-slate-800">
      <h1 className="text-yellow-500 font-bold tracking-tighter text-4xl">
        Div&apos;s animation learning library
      </h1>
      <div className="grid grid-cols-1 mt-8 gap-6">
        <Link href={"/basics"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Basics
          </button>
        </Link>
        <Link href={"/on-scroll-reveal"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            On scroll reveal
          </button>
        </Link>
        <Link href={"/svg-line-animation"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            SVG line animation
          </button>
        </Link>
        <Link href={"/horizontal-scroll"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Horizontal Scroll
          </button>
        </Link>
        <Link href={"/layered-parallax"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Layered Parallax
          </button>
        </Link>
        <Link href={"/drag-n-drop"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Drag n Drop
          </button>
        </Link>
        <Link href={"/sticky-footer"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Sticky Footer
          </button>
        </Link>
        <Link href={"/smooth-parallax-scrolling"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Smooth Parallax Scrolling
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
