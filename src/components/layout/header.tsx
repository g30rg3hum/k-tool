"use client";

import navLinks from "@/lib/consts/nav";
import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSufficientlyScrolled, setIsSufficientlyScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // add event listener for detecting the user has sufficiently scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      setIsSufficientlyScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-10 w-full transition-colors duration-300",
        isSufficientlyScrolled || isMobileMenuOpen
          ? "bg-white"
          : "bg-transparent",
        !isMobileMenuOpen && isSufficientlyScrolled && "shadow-xs"
      )}
    >
      <div className="flex justify-between items-center px-8 py-6">
        <h1 className="font-black text-3xl">K-TOOL</h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block h-max">
          <ul className="uppercase font-semibold flex gap-6">
            {navLinks.map(({ text, href }) => (
              <NavLink key={text} href={href} text={text} />
            ))}
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          className="lg:hidden hover:cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Bars3Icon className="size-7" />
        </button>
      </div>

      {/* Mobile Menu - overlaps below the header. */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xs transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="px-8 pb-6">
          <ul className="uppercase font-medium space-y-4">
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
