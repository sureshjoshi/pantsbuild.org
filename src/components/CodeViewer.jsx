export default function CodeViewer({ filename, code }) {
  return (
    <div className="shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 p-4 rounded-lg leading-normal overflow-hidden">
      <div className="mb-2">
        <div className="text-gray-400">{filename}</div>
        <hr className="m-2 bg-gray-700" />
      </div>

      <pre className="bg-gray-800 p-0 m-0 text-">
        <code>{code}</code>
      </pre>
    </div>
  );
}
