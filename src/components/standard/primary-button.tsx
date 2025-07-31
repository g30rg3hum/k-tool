"use client";

import clsx from "clsx";

interface Props {
  color?: "white" | "blue";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
export default function PrimaryButton({
  color = "blue",
  onClick,
  className,
  children,
}: Props) {
  return (
    <button
      className={clsx(
        className,
        color === "white" &&
          "bg-white text-black hover:bg-background-light hover:bg-[#ededed]",
        color === "blue" && "bg-primary text-white hover:bg-primary-light",
        "px-6 py-2 rounded-md transition-all hover:cursor-pointer hover:scale-[1.04] h-max font-semibold shadow-sm"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
