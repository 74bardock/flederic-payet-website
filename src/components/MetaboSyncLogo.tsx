import React from "react";

export default function MetaboSyncLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Engrenage gauche (petit avec cœur) */}
      <g transform="translate(10, 35)">
        <circle cx="35" cy="35" r="30" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect
            key={i}
            x="31"
            y="-2"
            width="8"
            height="10"
            rx="2"
            fill="#2563eb"
            transform={`rotate(${angle} 35 35)`}
          />
        ))}
        <circle cx="35" cy="35" r="16" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
        <path
          d="M 35,41 C 35,41 26,34 26,29 A 4.5,4.5 0 0,1 33.5,25.5 L 35,27 L 36.5,25.5 A 4.5,4.5 0 0,1 44,29 C 44,34 35,41 35,41 Z"
          fill="#ef4444"
        />
      </g>

      {/* Engrenage intermédiaire */}
      <g transform="translate(55, 15)">
        <circle cx="45" cy="45" r="38" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <rect
            key={i}
            x="40"
            y="-1"
            width="10"
            height="10"
            rx="2"
            fill="#3b82f6"
            transform={`rotate(${angle} 45 45)`}
          />
        ))}
        <circle cx="45" cy="45" r="24" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
      </g>

      {/* Badge circulaire principal avec tracé ECG */}
      <g transform="translate(125, 10)">
        <circle cx="50" cy="50" r="48" fill="url(#circleGrad)" stroke="#60a5fa" strokeWidth="4" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />

        <path
          d="M 6,50 L 28,50 L 34,35 L 42,68 L 50,12 L 58,85 L 66,42 L 72,55 L 78,50 L 94,50"
          fill="none"
          stroke="#ef4444"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
      </g>

      {/* Texte MetaboSync HealthTech */}
      <g transform="translate(240, 48)">
        <text
          x="0"
          y="20"
          fill="#ffffff"
          fontSize="36"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          Metabo<tspan fill="#3b82f6">Sync</tspan>
        </text>
        <text
          x="2"
          y="48"
          fill="#94a3b8"
          fontSize="20"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.5"
        >
          HealthTech
        </text>
      </g>
    </svg>
  );
}