import type { SVGProps } from 'react';

// Watermelon-style logo mark used by the Hero31 component.
export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2a10 10 0 0 1 10 10" opacity="0.5" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="13" cy="16" r="1" fill="currentColor" />
      <circle cx="11" cy="10" r="1" fill="currentColor" />
      <path d="M2 12a10 10 0 0 1 10-10" />
    </svg>
  );
}
