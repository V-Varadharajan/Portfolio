import React from 'react';

interface LogoProps {
  className?: string;
  title?: string;
}

// Simple, clean "VV" monogram inside a rounded hexagon that adapts to dark/light mode via currentColor
const Logo: React.FC<LogoProps> = ({ className = 'w-8 h-8', title = 'Portfolio Logo' }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Hexagon background */}
    <path
      d="M32 4l20 12v24L32 52 12 40V16L32 4z"
      fill="url(#grad)"
      opacity="0.18"
    />

    {/* Border */}
    <path
      d="M32 6l18 10.5v21L32 49 14 37.5v-21L32 6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      opacity="0.5"
    />

    {/* Monogram VV */}
    <g fill="none" stroke="currentColor" strokeLinecap="round" filter="url(#softGlow)">
      <path d="M18 20 L26 42" strokeWidth="3.2" />
      <path d="M26 42 L34 22" strokeWidth="3.2" />
      <path d="M30 20 L38 42" strokeWidth="3.2" />
      <path d="M38 42 L46 22" strokeWidth="3.2" />
    </g>
  </svg>
);

export default Logo;
