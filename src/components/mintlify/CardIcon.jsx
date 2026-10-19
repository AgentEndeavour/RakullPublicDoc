import React from 'react';

// Minimal 24x24 stroke icons for the small set of Mintlify `icon` names used
// by the user-guide pages. Geometry only; colour comes from currentColor.
const PATHS = {
  books: (
    <>
      <path d="M4 5.5h11a2 2 0 0 1 2 2V19H6a2 2 0 0 0-2 2z" />
      <path d="M20 6.5v11a2 2 0 0 1-2 2H6" />
    </>
  ),
  'book-open': (
    <>
      <path d="M12 6.5C10.5 5.3 8.2 4.8 4 5.2V18c4.2-.4 6.5.1 8 1.3 1.5-1.2 3.8-1.7 8-1.3V5.2c-4.2-.4-6.5.1-8 1.3z" />
      <path d="M12 6.5v12.8" />
    </>
  ),
  book: (
    <>
      <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 0-2 2z" />
      <path d="M5 20a2 2 0 0 1 2-2h11" />
    </>
  ),
  comments: (
    <>
      <path d="M4 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3.5V16a2 2 0 0 1-1-1.7z" />
      <path d="M8 8h7M8 11h5" />
    </>
  ),
  bookmark: <path d="M7 4h10v16l-5-3.2L7 20z" />,
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 12.5l9 5 9-5" />
    </>
  ),
};

export default function CardIcon({name, size = 20}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.book}
    </svg>
  );
}
