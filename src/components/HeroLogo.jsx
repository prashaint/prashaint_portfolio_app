import React from 'react';

/**
 * Animated Hero Logo - Large, impressive logo for hero sections
 * Features advanced animations and data flow visualization
 */
const HeroLogo = ({ size = 'lg', className = '' }) => {
  const sizeMap = {
    md: 120,
    lg: 160,
    xl: 200,
  };

  const logoSize = sizeMap[size] || sizeMap.lg;

  return (
    <div className={`hero-logo-container ${className}`}>
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-logo"
      >
        <defs>
          {/* Vibrant gradient for the main logo */}
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="33%" stopColor="#764ba2" />
            <stop offset="66%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>

          {/* Animated gradient */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0" />
            <stop offset="50%" stopColor="#f093fb" stopOpacity="1" />
            <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Shadow */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Outer decorative ring */}
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke="url(#heroGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          className="hero-ring-outer"
        />

        {/* Middle decorative ring */}
        <circle
          cx="100"
          cy="100"
          r="75"
          stroke="url(#heroGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
          className="hero-ring-middle"
        />

        {/* Main hexagon background */}
        <g filter="url(#shadow)">
          <path
            d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z"
            fill="url(#heroGradient)"
            className="hero-hexagon"
          />
        </g>

        {/* Data flow network - representing data engineering */}
        <g className="hero-data-flow" opacity="0.4">
          {/* Flow lines with nodes */}
          <g className="flow-line flow-line-1">
            <path d="M60 70 L75 70 L85 85 L100 85" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="60" cy="70" r="4" fill="white" className="flow-node"/>
            <circle cx="100" cy="85" r="4" fill="white" className="flow-node"/>
          </g>

          <g className="flow-line flow-line-2">
            <path d="M100 95 L115 95 L125 110 L140 110" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="100" cy="95" r="4" fill="white" className="flow-node"/>
            <circle cx="140" cy="110" r="4" fill="white" className="flow-node"/>
          </g>

          <g className="flow-line flow-line-3">
            <path d="M60 110 L75 110 L85 95 L100 95" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="60" cy="110" r="4" fill="white" className="flow-node"/>
            <circle cx="100" cy="95" r="4" fill="white" className="flow-node"/>
          </g>

          <g className="flow-line flow-line-4">
            <path d="M100 85 L115 85 L125 70 L140 70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="100" cy="85" r="4" fill="white" className="flow-node"/>
            <circle cx="140" cy="70" r="4" fill="white" className="flow-node"/>
          </g>
        </g>

        {/* Central PM monogram */}
        <g filter="url(#heroGlow)">
          <text
            x="100"
            y="115"
            fontSize="64"
            fontWeight="900"
            fontFamily="Space Grotesk, Inter, sans-serif"
            fill="white"
            textAnchor="middle"
            className="hero-text"
            letterSpacing="-0.05em"
          >
            PM
          </text>
        </g>

        {/* Small accent dots around the logo */}
        <circle cx="100" cy="15" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-1"/>
        <circle cx="165" cy="55" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-2"/>
        <circle cx="165" cy="125" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-3"/>
        <circle cx="100" cy="165" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-4"/>
        <circle cx="35" cy="125" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-5"/>
        <circle cx="35" cy="55" r="2" fill="url(#heroGradient)" opacity="0.6" className="accent-dot accent-6"/>
      </svg>

      <style jsx>{`
        .hero-logo-container {
          position: relative;
          display: inline-block;
        }

        .hero-logo {
          filter: drop-shadow(0 10px 30px rgba(102, 126, 234, 0.3));
        }

        /* Hexagon pulse animation */
        .hero-hexagon {
          animation: hexagonPulse 4s ease-in-out infinite;
        }

        /* Rotating rings */
        .hero-ring-outer {
          transform-origin: center;
          animation: ringRotate 20s linear infinite;
        }

        .hero-ring-middle {
          transform-origin: center;
          animation: ringRotate 15s linear infinite reverse;
        }

        /* Data flow animations */
        .flow-line {
          animation: flowPulse 3s ease-in-out infinite;
        }

        .flow-line-1 {
          animation-delay: 0s;
        }

        .flow-line-2 {
          animation-delay: 0.5s;
        }

        .flow-line-3 {
          animation-delay: 1s;
        }

        .flow-line-4 {
          animation-delay: 1.5s;
        }

        .flow-node {
          animation: nodePulse 2s ease-in-out infinite;
        }

        /* Accent dots floating */
        .accent-dot {
          animation: dotFloat 4s ease-in-out infinite;
        }

        .accent-1 { animation-delay: 0s; }
        .accent-2 { animation-delay: 0.5s; }
        .accent-3 { animation-delay: 1s; }
        .accent-4 { animation-delay: 1.5s; }
        .accent-5 { animation-delay: 2s; }
        .accent-6 { animation-delay: 2.5s; }

        /* Text glow effect */
        .hero-text {
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes hexagonPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes ringRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes flowPulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            r: 4;
            opacity: 0.6;
          }
          50% {
            r: 5;
            opacity: 1;
          }
        }

        @keyframes dotFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.8;
          }
        }

        @keyframes textGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255,255,255,0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(255,255,255,0.5));
          }
        }
      `}</style>
    </div>
  );
};

export default HeroLogo;
