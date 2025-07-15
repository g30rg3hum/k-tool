import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: Props) {
  return (
    <div className={clsx("px-8 lg:px-16 flex justify-center", className)}>
      <div className="w-full max-w-[1100px]">{children}</div>
    </div>
  );
}
