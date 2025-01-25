import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-12 py-16 min-h-screen bg-slate-800">
        <h1 className="text-yellow-500 font-bold tracking-tighter text-4xl">
          Div&apos;s animation learning library - page transitions
        </h1>
        <div className="grid grid-cols-1 mt-8 gap-6">
          <Link href={"/page-transitions/basic-transitions"}>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Basic transitions
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
