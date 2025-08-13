export function ResponsiveDesignLogo(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        role="img"
        aria-label="Responsive website design logo"
        {...props}
      >
        <defs>
          <linearGradient id="resp-bg-a" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#3A3F7A" />
            <stop offset="100%" stopColor="#242938" />
          </linearGradient>
          <linearGradient id="resp-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29CDFF" />
            <stop offset="45%" stopColor="#148EFF" />
            <stop offset="100%" stopColor="#0A60FF" />
          </linearGradient>
          <linearGradient id="resp-grad-coral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FA816E" />
            <stop offset="50%" stopColor="#F74A5C" />
            <stop offset="100%" stopColor="#F51D2C" />
          </linearGradient>
          <linearGradient id="resp-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#32B1C1" />
            <stop offset="100%" stopColor="#14C6B7" />
          </linearGradient>
          <linearGradient id="resp-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A7DFF" />
            <stop offset="100%" stopColor="#5F5BFF" />
          </linearGradient>
        </defs>
  
        {/* Tile background */}
        <rect width="256" height="256" rx="60" fill="url(#resp-bg-a)" />
  
        {/* Desktop monitor */}
        <g transform="translate(24, 54)">
          <rect
            x="8"
            y="8"
            width="150"
            height="96"
            rx="12"
            fill="url(#resp-grad-blue)"
          />
          {/* desktop content stripes */}
          <rect x="22" y="26" width="122" height="10" rx="5" fill="white" opacity="0.65" />
          <rect x="22" y="44" width="88" height="10" rx="5" fill="white" opacity="0.5" />
          <rect x="22" y="62" width="106" height="10" rx="5" fill="white" opacity="0.35" />
          {/* stand */}
          <rect x="72" y="108" width="22" height="10" rx="3" fill="#1B1F3A" opacity="0.6" />
          <rect x="56" y="118" width="54" height="8" rx="4" fill="#1B1F3A" opacity="0.6" />
        </g>
  
        {/* Tablet (overlapping) */}
        <g transform="translate(142, 74)">
          <rect
            x="0"
            y="0"
            width="90"
            height="120"
            rx="14"
            fill="url(#resp-grad-coral)"
          />
          {/* camera dot */}
          <circle cx="45" cy="8" r="3" fill="white" opacity="0.7" />
          {/* tablet content */}
          <rect x="14" y="24" width="62" height="12" rx="6" fill="white" opacity="0.75" />
          <rect x="14" y="44" width="48" height="10" rx="5" fill="white" opacity="0.6" />
          <rect x="14" y="62" width="56" height="10" rx="5" fill="white" opacity="0.45" />
          <rect x="14" y="80" width="40" height="10" rx="5" fill="white" opacity="0.3" />
          {/* home bar */}
          <rect x="30" y="108" width="30" height="4" rx="2" fill="white" opacity="0.65" />
        </g>
  
        {/* Phone (front) */}
        <g transform="translate(50, 138)">
          <rect
            x="0"
            y="0"
            width="56"
            height="92"
            rx="12"
            fill="url(#resp-grad-teal)"
          />
          {/* notch + indicator */}
          <rect x="18" y="6" width="20" height="4" rx="2" fill="white" opacity="0.7" />
          {/* phone content */}
          <rect x="10" y="22" width="36" height="8" rx="4" fill="white" opacity="0.8" />
          <rect x="10" y="36" width="28" height="7" rx="3.5" fill="white" opacity="0.6" />
          <rect x="10" y="48" width="34" height="7" rx="3.5" fill="white" opacity="0.45" />
          <rect x="10" y="60" width="22" height="7" rx="3.5" fill="white" opacity="0.35" />
        </g>
  
        {/* Accent circle */}
        <circle cx="206" cy="50" r="14" fill="url(#resp-grad-violet)" opacity="0.95" />
  
        {/* Flow arrows to hint responsiveness */}
        <g opacity="0.9">
          <path
            d="M108 96c12-10 28-16 44-16"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M158 78l-6-6m6 6l-6 6"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M86 164c-10-8-16-20-16-32"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M70 130l8-4m-8 4l8 4"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>
      </svg>
    );
  }
  