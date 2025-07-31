interface Props {
  children: React.ReactNode;
}
export default function Label({ children }: Props) {
  return (
    <label className="text-xs font-medium text-gray-700">{children}</label>
  );
}
