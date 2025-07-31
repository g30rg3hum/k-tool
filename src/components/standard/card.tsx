import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function Card({ className, children }: Props) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-md border border-gray-200 shadow-sm"
      )}
    >
      {children}
    </div>
  );
}
