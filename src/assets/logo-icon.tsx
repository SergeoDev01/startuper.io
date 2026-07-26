import type { SVGProps } from 'react';

export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 3h14l-7 8h5l-9 10 3-9H7L5 3z" />
    </svg>
  );
}
