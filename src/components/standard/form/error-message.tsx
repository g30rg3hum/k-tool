interface Props {
  children: React.ReactNode;
}
export default function ErrorMessage({ children }: Props) {
  return <p className="text-sm text-red-500">{children}</p>;
}
