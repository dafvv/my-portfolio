import React from "react";
import styles from "./CuttingMatBackground.module.css";

export function CuttingMatBackground() {
  return (
    <div className={styles.matContainer} aria-hidden="true">
      <svg
        className={styles.matSvg}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cutMatGrid24"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="var(--color-line)"
              strokeWidth="0.75"
            />
          </pattern>

          <pattern
            id="cutMatMajor96"
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 96 0 L 0 0 0 96"
              fill="none"
              stroke="var(--color-line)"
              strokeWidth="1.25"
            />
            <path
              d="M 48 42 L 48 54 M 42 48 L 54 48"
              stroke="var(--color-muted)"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <path
              d="M 0 6 L 0 0 6 0 M 96 6 L 96 0 90 0 M 0 90 L 0 96 6 96 M 96 90 L 96 96 90 96"
              stroke="var(--color-muted)"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </pattern>

          <pattern
            id="cutMatDiagonal"
            width="192"
            height="192"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="192"
              x2="192"
              y2="0"
              stroke="var(--color-line)"
              strokeWidth="0.75"
              strokeDasharray="6 6"
              strokeOpacity="0.6"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#cutMatGrid24)" />
        <rect width="100%" height="100%" fill="url(#cutMatMajor96)" />
        <rect width="100%" height="100%" fill="url(#cutMatDiagonal)" />

        <line
          x1="0"
          y1="24"
          x2="100%"
          y2="24"
          stroke="var(--color-ink)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {Array.from({ length: 35 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 96 + 24}, 0)`}>
            <line
              x1="0"
              y1="14"
              x2="0"
              y2="24"
              stroke="var(--color-ink)"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1="48"
              y1="18"
              x2="48"
              y2="24"
              stroke="var(--color-muted)"
              strokeWidth="0.75"
              strokeOpacity="0.3"
            />
            <text
              x="3"
              y="11"
              fill="var(--color-muted)"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="600"
              fillOpacity="0.5"
            >
              {String(i * 10).padStart(2, "0")}
            </text>
          </g>
        ))}

        <line
          x1="24"
          y1="0"
          x2="24"
          y2="100%"
          stroke="var(--color-ink)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {Array.from({ length: 25 }).map((_, i) => (
          <g key={i} transform={`translate(0, ${i * 96 + 24})`}>
            <line
              x1="14"
              y1="0"
              x2="24"
              y2="0"
              stroke="var(--color-ink)"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1="18"
              y1="48"
              x2="24"
              y2="48"
              stroke="var(--color-muted)"
              strokeWidth="0.75"
              strokeOpacity="0.3"
            />
            <text
              x="4"
              y="-3"
              fill="var(--color-muted)"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="600"
              fillOpacity="0.5"
            >
              {String(i * 10).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>
      <div className={styles.vignetteOverlay} />
    </div>
  );
}
