import clsx from "clsx";

interface Props {
  spaceBelow?: boolean;
  children: React.ReactNode;
}
export default function SectionHeading({ spaceBelow, children }: Props) {
  return (
    <h3 className={clsx("font-bold text-2xl", spaceBelow && "mb-1")}>
      {children}
    </h3>
  );
}
