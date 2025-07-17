"use client";

import navLinks from "@/lib/consts/nav";
import { layoutPadding } from "@/lib/consts/padding";
import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isSufficientlyScrolled, setIsSufficientlyScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // add event listener for detecting the user has sufficiently scrolled
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = 10;
  //     setIsSufficientlyScrolled(window.scrollY > scrollThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const sizeChangeMenu = "lg";

  return (
    // need to re-specify max-width because fixed.
    <header
      className={`fixed top-5 left-0 right-0 mx-auto z-10 w-full max-w-[975px] ${layoutPadding}`}
    >
      {/* Main part of the header */}
      <div
        className={clsx(
          "flex justify-between items-center p-6 rounded-lg transition-colors duration-300 bg-zinc-50 shadow-sm"
        )}
      >
        <h1>K-TOOL</h1>

        {/* Desktop full navigation */}
        <nav className={`hidden ${sizeChangeMenu}:block`}>
          <ul className="flex gap-6 font-semibold">
            {navLinks.map(({ text, href }) => (
              <NavLink key={text} href={href} text={text} />
            ))}
          </ul>
        </nav>

        {/* Smaller screen: hamburger trigger */}
        <button
          className={`${sizeChangeMenu}:hidden hover:cursor-pointer hover:scale-[1.03] transition-all`}
          onClick={toggleMobileMenu}
        >
          <Bars3Icon className="size-6" />
        </button>
      </div>

      {/* Hamburger menu below the header */}
      {/* Container to create required padding + width */}
      <div
        className={`${sizeChangeMenu}:hidden absolute left-0 top-full mt-5 w-full max-w-[975px] ${layoutPadding}`}
      >
        <div
          className={clsx(
            `bg-zinc-50 shadow-sm transition-all duration-300 ease-in-out p-6 rounded-lg`,
            isMobileMenuOpen
              ? "opacity-100 translate-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          <nav>
            <ul className="font-semibold space-y-3">
              {navLinks.map(({ text, href }) => (
                <NavLink
                  key={text}
                  href={href}
                  text={text}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

function NavLink({ href, text, onClick }: NavLinkProps) {
  return (
    <li className="hover:scale-[1.02] transition-all w-max">
      <Link href={href} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
}
