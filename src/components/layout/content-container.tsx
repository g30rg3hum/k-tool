import { layoutPadding } from "@/lib/consts/padding";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function ContentContainer({ children, className }: Props) {
  return (
    <div
      className={clsx(
        `w-full max-w-[975px] mx-auto ${layoutPadding}`,
        className
      )}
    >
      {children}
    </div>
  );
}
