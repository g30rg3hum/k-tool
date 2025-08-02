import ErrorMessage from "./error-message";
import Label from "./label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
}
export default function TextInput({
  label,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <div className="w-full">
      <Label>{label}</Label>
      <input
        type="text"
        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 mb-1"
        placeholder={placeholder ?? "Enter text here..."}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
