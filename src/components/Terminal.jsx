export default function Terminal() {
  const LINES = [
    ["pantsbuild/pants %", "pants --changed-since=origin/main test"],
    ["✓", "docker/utils_tests.py:tests succeeded in 3.94s"],
    ["✓", "go/gofmt_tests.py:tests succeeded in 2.12s"],
    ["✓", "python/ruff_tests.py:tests succeeded in 1.29s (memoized)"],
    ["✓", "python/black_tests.py:tests succeeded in 0.45s"],
    ["✓", "python/pyright_tests.py:tests succeeded in 2.88s (cached)"],
  ];

  return (
    <div className="shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 p-4 rounded-lg leading-normal">
      <div className="mb-2 flex">
        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>

      <ul className="mt-4 pl-0">
        {LINES.map((line) => (
          <Line prompt={line[0]} message={line[1]} />
        ))}
      </ul>
    </div>
  );
}

function Line({ prompt, message }) {
  return (
    <li className="list-none">
      <span className="text-green-400">{prompt}</span>
      <span className="flex-1 typing items-center pl-2">{message}</span>
    </li>
  );
}
