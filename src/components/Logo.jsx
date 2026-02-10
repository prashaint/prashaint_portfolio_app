import React from 'react';

/**
 * Professional Logo Component for Prashaint Mishra Portfolio
 * Features:
 * - Modern geometric design with data flow symbolism
 * - Multiple variants: icon, full, text-only
 * - Responsive and accessible
 * - Theme-aware with light/dark mode support
 */

const Logo = ({
  variant = 'full', // 'icon', 'full', 'text'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  className = '',
  showTagline = false,
  animated = false,
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      icon: 32,
      height: 40,
      textSize: 'text-lg',
      taglineSize: 'text-xs',
    },
    md: {
      icon: 40,
      height: 48,
      textSize: 'text-xl',
      taglineSize: 'text-sm',
    },
    lg: {
      icon: 48,
      height: 56,
      textSize: 'text-2xl',
      taglineSize: 'text-base',
    },
    xl: {
      icon: 64,
      height: 72,
      textSize: 'text-3xl',
      taglineSize: 'text-lg',
    },
  };

  const config = sizeConfig[size];

  // Icon-only variant (Hexagonal badge with data flow pattern)
  const IconLogo = () => (
    <svg
      width={config.icon}
      height={config.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'logo-animated' : ''} ${className}`}
    >
      {/* Outer hexagon with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#f093fb" />
        </linearGradient>
        <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background hexagon */}
      <path
        d="M50 5 L86.6 27.5 L86.6 72.5 L50 95 L14.4 72.5 L14.4 27.5 Z"
        fill="url(#logoGradient)"
        className="logo-bg"
      />

      {/* Data flow lines (representing data engineering) */}
      <g className="logo-flow" opacity="0.3">
        <path d="M25 35 L35 35 L40 45 L50 45" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 55 L60 55 L65 65 L75 65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="25" cy="35" r="3" fill="white"/>
        <circle cx="50" cy="45" r="3" fill="white"/>
        <circle cx="75" cy="65" r="3" fill="white"/>
      </g>

      {/* PM letters - modern sans-serif style */}
      <text
        x="50"
        y="60"
        fontSize="36"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        fill="white"
        textAnchor="middle"
        className="logo-text"
      >
        PM
      </text>
    </svg>
  );

  // Full logo with text
  const FullLogo = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <IconLogo />
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight text-foreground ${config.textSize}`}>
          Prashaint Mishra
        </span>
        {showTagline && (
          <span className={`font-body text-muted-foreground ${config.taglineSize}`}>
            Senior Data Engineer
          </span>
        )}
      </div>
    </div>
  );

  // Text-only variant
  const TextLogo = () => (
    <div className={`flex flex-col ${className}`}>
      <span className={`font-display font-bold tracking-tight text-foreground ${config.textSize}`}>
        Prashaint Mishra
      </span>
      {showTagline && (
        <span className={`font-body text-muted-foreground ${config.taglineSize} -mt-1`}>
          Senior Data Engineer
        </span>
      )}
    </div>
  );

  // Render based on variant
  switch (variant) {
    case 'icon':
      return <IconLogo />;
    case 'text':
      return <TextLogo />;
    case 'full':
    default:
      return <FullLogo />;
  }
};

// Animated logo variant for hero sections
export const AnimatedLogo = (props) => (
  <Logo {...props} animated={true} />
);

// Compact logo for mobile/small spaces
export const CompactLogo = (props) => (
  <Logo {...props} variant="icon" size="sm" />
);

// Logo with tagline for footer
export const LogoWithTagline = (props) => (
  <Logo {...props} showTagline={true} />
);

export default Logo;
