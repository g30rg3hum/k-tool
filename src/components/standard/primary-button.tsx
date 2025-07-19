"use client";

import clsx from "clsx";

interface Props {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
export default function PrimaryButton({ onClick, className, children }: Props) {
  return (
    <button
      className={clsx(
        className,
        "bg-primary text-white px-6 py-2 rounded-md transition-all hover:cursor-pointer hover:bg-primary-light hover:scale-[1.04] h-max font-semibold shadow-sm"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
