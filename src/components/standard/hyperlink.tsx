"use client";

import Link from "next/link";

interface Props {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export default function Hyperlink({ href, onClick, children }: Props) {
  href = href ?? "#";
  return (
    <Link
      href={href}
      className="underline cursor-pointer text-sky-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
