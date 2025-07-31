export default function TextArea() {
  return (
    <textarea
      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      placeholder="Enter your text here..."
      rows={4}
    />
  );
}
