import contentWidth from "@/lib/consts/layout/content-width";
import { layoutPadding } from "@/lib/consts/layout/padding";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function ContentContainer({ children, className }: Props) {
  return (
    <div
      className={clsx(`w-full mx-auto`, contentWidth, layoutPadding, className)}
    >
      {children}
    </div>
  );
}
