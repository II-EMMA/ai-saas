export default function ListItem({ children }) {
  return (
    <li className="flex items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 text-green-600"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m3 8.5 4 4 6-9" />
      </svg>
      {children}
    </li>
  );
}
