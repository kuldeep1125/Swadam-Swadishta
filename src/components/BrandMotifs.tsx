// [ADDED] Brand visual motifs, hand-painted brush SVGs, leaf shapes, and traditional Maharashtrian decorative curves
import React from "react";

export function BrushStroke({
  className = "w-48 h-3 text-saffron-500",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M4 14.5C45 9 110 5.5 175 7.5C230 9.2 280 13 296 16.5C292 18.5 250 19 195 18C125 16.8 55 19 4 14.5Z" />
    </svg>
  );
}

export function BrushUnderline({
  className = "w-full h-3 text-turmeric-400",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M2 10C35 4 85 3 130 5C165 6.5 185 9 198 12C170 14 110 13 60 12C30 11.5 10 12 2 10Z" />
    </svg>
  );
}

export function DecorativeLeaf({
  className = "w-8 h-8 text-brandGreen-600",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 34C6 34 10 18 24 10C38 2 36 6 36 6C36 6 38 22 24 28C10 34 6 34 6 34Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path
        d="M6 34C14 26 22 18 36 6"
        stroke="#FFF7E3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 22C22 21 26 22 28 25"
        stroke="#FFF7E3"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M23 16C26 14 30 14 32 17"
        stroke="#FFF7E3"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SteamSwirl({
  className = "w-6 h-10 text-saffron-500",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 45C10 38 18 32 15 24C12 16 6 12 10 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 42C18 36 24 30 22 22C20 14 16 10 18 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

export function ToranMotif({
  className = "w-full h-8 text-saffron-500",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Repeated traditional marigold & mango leaf toran garlands */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = i * 50;
        return (
          <g key={i}>
            {/* Hanging curve */}
            <path
              d={`M${x} 4 Q${x + 25} 24 ${x + 50} 4`}
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Mango leaf */}
            <path
              d={`M${x + 25} 12 C${x + 22} 18 ${x + 23} 24 ${x + 25} 28 C${x + 27} 24 ${x + 28} 18 ${x + 25} 12 Z`}
              fill="#1E5631"
            />
            {/* Orange marigold flower */}
            <circle cx={x + 25} cy={12} r={4} fill="#F48C06" />
            <circle cx={x + 25} cy={12} r={2} fill="#FFB703" />
          </g>
        );
      })}
    </svg>
  );
}

export function SpiceSparkle({
  className = "w-5 h-5 text-turmeric-400",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
    </svg>
  );
}

export function PureVegBadge({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div
      className={`border-2 border-brandGreen-600 p-0.5 rounded-sm flex items-center justify-center bg-white ${className}`}
      title="100% Pure Vegetarian"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-brandGreen-600" />
    </div>
  );
}
