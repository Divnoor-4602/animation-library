import React from "react";

const Content = () => {
  return (
    <>
      <footer className="w-full h-full bg-gray-700 px-12 py-12 flex flex-col justify-between">
        {/* About footer links */}
        <section className="flex items-center gap-16">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold tracking-tighter text-white/40">
              ABOUT
            </h3>
            <ul className="mt-6 space-y-2 text-neutral-50 font-semibold tracking-tight text-lg ">
              <li>Home</li>
              <li>Projects</li>
              <li>Our Mission</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Education footer links */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold tracking-tighter text-white/40">
              EDUCATION
            </h3>
            <ul className="mt-6 space-y-2 text-neutral-50 font-semibold tracking-tight text-lg">
              <li>News</li>
              <li>Learn</li>
              <li>Certifications</li>
              <li>Publications</li>
            </ul>
          </div>
        </section>
        {/* FOOTER BANNER */}
        <div className="">
          <h1
            className={`text-[168px] text-white font-bold font-serif tracking-tighter`}
          >
            Sticky Footer
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Content;
