import React from "react";
import TransitionLink from "../utils/TransitionLink";

const Navbar = () => {
  return (
    <>
      <main className="flex justify-between max-md:px-8 items-center py-6">
        {/* TransitionLinks */}
        <nav className="flex gap-6 items-center">
          <TransitionLink href="/page-transitions/basic-transitions">
            Home
          </TransitionLink>
          <TransitionLink href="/page-transitions/basic-transitions/about">
            About
          </TransitionLink>
          <TransitionLink href="/page-transitions/basic-transitions/community">
            Community
          </TransitionLink>
          <TransitionLink href="/page-transitions/basic-transitions/pricing">
            Pricing
          </TransitionLink>
          <TransitionLink href="/page-transitions/basic-transitions/company">
            Company
          </TransitionLink>
        </nav>
        {/* sign in button */}
        <button className="py-3 px-6 rounded-3xl bg-violet-500 text-white font-semibold text-xl">
          Sign In
        </button>
      </main>
    </>
  );
};

export default Navbar;
