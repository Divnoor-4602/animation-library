import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <main className="flex justify-between max-md:px-8 items-center py-6">
        {/* links */}
        <nav className="flex gap-6 items-center">
          <Link
            className="text-xl font-bold text-black tracking-tight"
            href="/page-transitions/basic-transitions"
          >
            Home
          </Link>
          <Link
            className="text-xl font-bold text-black tracking-tight"
            href="/page-transitions/basic-transitions/about"
          >
            About
          </Link>
          <Link
            className="text-xl font-bold text-black tracking-tight"
            href="/page-transitions/basic-transitions/community"
          >
            Community
          </Link>
          <Link
            className="text-xl font-bold text-black tracking-tight"
            href="/page-transitions/basic-transitions/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-xl font-bold text-black tracking-tight"
            href="/page-transitions/basic-transitions/company"
          >
            Company
          </Link>
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
