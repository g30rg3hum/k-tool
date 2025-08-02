import ErrorMessage from "./error-message";
import Label from "./label";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
  error?: string;
}
export default function TextArea({
  label,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <div className="w-full">
      <Label>{label}</Label>
      <textarea
        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-1"
        placeholder={placeholder ?? "Enter your text here..."}
        rows={4}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
