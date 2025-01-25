"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // prevent the default clicking behaviour of this link
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);

    // use the router to navigate to the href
    router.push(href);

    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      onClick={(e) => {
        handleTransition(e);
      }}
      href={href}
      {...props}
      className="text-xl font-bold text-black tracking-tight"
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
