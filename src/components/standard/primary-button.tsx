"use client";

interface Props {
  text: string;
  onClick?: () => void;
}
export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button
      className="bg-primary text-white font-semibold px-6 py-3 rounded-md transition-all hover:cursor-pointer hover:bg-primary-light hover:scale-[1.02]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
