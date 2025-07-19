"use client";

import navLinks from "@/lib/consts/nav";
import { layoutPadding } from "@/lib/consts/padding";
import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../standard/primary-button";
import { getResponsiveClass } from "@/lib/funcs/utils";
import Image from "next/image";

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
      className={clsx(
        `fixed top-5 left-0 right-0 mx-auto z-10 w-full max-w-[975px] ${layoutPadding}`,
        isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Main part of the header */}
      <div className="flex justify-between items-center px-4 lg:px-6 py-4 rounded-lg transition-colors duration-300 bg-white shadow-sm pointer-events-auto">
        <Image
          src="/images/logo.png"
          alt="K-Tool Logo"
          width={120}
          height={50}
          className="cursor-pointer hover:scale-[1.03] transition-transform"
        />

        {/* Desktop full navigation */}
        <nav
          className={clsx(
            `hidden`,
            getResponsiveClass(sizeChangeMenu, "block")
          )}
        >
          <ul className="flex gap-6 font-semibold items-center">
            {navLinks.map(({ text, href }) => {
              if (text !== "Contact") {
                return <NavLink key={text} href={href} text={text} />;
              } else {
                return <PrimaryButton key={text}>Quote</PrimaryButton>;
              }
            })}
          </ul>
        </nav>

        {/* Smaller screen: hamburger trigger */}
        <button
          className={clsx(
            `hover:cursor-pointer hover:scale-[1.05] transition-all`,
            getResponsiveClass(sizeChangeMenu, "hidden")
          )}
          onClick={toggleMobileMenu}
        >
          <Bars3Icon className="size-6" />
        </button>
      </div>

      {/* Hamburger menu below the header */}
      {/* Container to create required padding + width */}
      <div
        className={clsx(
          `absolute left-0 top-full mt-5 w-full max-w-[975px] ${layoutPadding}`,
          getResponsiveClass(sizeChangeMenu, "hidden")
        )}
      >
        <div
          className={clsx(
            `bg-white shadow-sm transition-all duration-300 ease-in-out p-6 rounded-lg`,
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
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
