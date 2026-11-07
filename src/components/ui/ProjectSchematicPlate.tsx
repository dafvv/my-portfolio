import React from "react";
import styles from "./ProjectSchematicPlate.module.css";

interface ProjectSchematicPlateProps {
  projectId: number;
  projectName: string;
}

export function ProjectSchematicPlate({
  projectId,
  projectName,
}: ProjectSchematicPlateProps) {
  if (projectId === 1) {
    return (
      <div className={styles.schematicWrapper} aria-hidden="true">
        <div className={styles.schematicHeader}>
          <div className={styles.schematicTag}>
            <span className={styles.schematicTagDot} />
            <span>GIS RADIAL BUFFER // SPASI</span>
          </div>
          <span className={styles.schematicId}>FIG. 01A — LAT/LON MATRIX</span>
        </div>

        <svg
          className={styles.svgCanvas}
          viewBox="0 0 440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="spasiGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="var(--color-line)"
                strokeWidth="0.75"
              />
            </pattern>
            <pattern
              id="hatchZone"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke="var(--color-line)"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>

          <rect width="440" height="220" fill="url(#spasiGrid)" />

          <line
            x1="220"
            y1="10"
            x2="220"
            y2="210"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="110"
            x2="420"
            y2="110"
            stroke="var(--color-line)"
            strokeWidth="1"
          />

          <circle
            cx="220"
            cy="110"
            r="90"
            stroke="var(--color-line)"
            strokeWidth="1"
            className={styles.pulseLine}
          />
          <circle
            cx="220"
            cy="110"
            r="60"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          <circle
            cx="220"
            cy="110"
            r="30"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          <circle
            cx="220"
            cy="110"
            r="30"
            stroke="var(--color-accent)"
            strokeWidth="1"
            className={styles.beaconRing}
          />

          <polygon
            points="140,80 250,50 310,130 200,165 150,130"
            fill="url(#hatchZone)"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
          />

          <circle cx="220" cy="110" r="4" fill="var(--color-accent-bright)" />
          <circle cx="220" cy="110" r="7" stroke="var(--color-ink)" strokeWidth="1.5" />

          <text
            x="225"
            y="105"
            fill="var(--color-ink)"
            fontSize="9"
            fontWeight="700"
            fontFamily="monospace"
          >
            NODE [PT-01]
          </text>
          <text
            x="320"
            y="65"
            fill="var(--color-muted)"
            fontSize="8"
            fontFamily="monospace"
          >
            R_BUFFER: 500M
          </text>
          <line
            x1="280"
            y1="75"
            x2="315"
            y2="63"
            stroke="var(--color-ink)"
            strokeWidth="0.8"
          />

          <text
            x="220"
            y="26"
            fill="var(--color-muted)"
            fontSize="9"
            fontWeight="700"
            textAnchor="middle"
          >
            N
          </text>
          <text
            x="410"
            y="113"
            fill="var(--color-muted)"
            fontSize="9"
            fontWeight="700"
          >
            E
          </text>
        </svg>

        <div className={styles.schematicFooter}>
          <span>SYS: LEAFLET / OSM ENGINE</span>
          <span className={styles.schematicCoord}>-6.5971° S, +106.8060° E</span>
        </div>
      </div>
    );
  }

  if (projectId === 2) {
    return (
      <div className={styles.schematicWrapper} aria-hidden="true">
        <div className={styles.schematicHeader}>
          <div className={styles.schematicTag}>
            <span className={styles.schematicTagDot} />
            <span>RELATIONAL TOPOLOGY // CROMA</span>
          </div>
          <span className={styles.schematicId}>FIG. 02B — SCHEMA & SPECTRA</span>
        </div>

        <svg
          className={styles.svgCanvas}
          viewBox="0 0 440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            y="40"
            width="88"
            height="34"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
          />
          <text
            x="68"
            y="56"
            fill="var(--color-ink)"
            fontSize="8.5"
            fontWeight="700"
            textAnchor="middle"
          >
            STUDENT_TB
          </text>
          <text
            x="68"
            y="67"
            fill="var(--color-muted)"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
          >
            PK id_student
          </text>

          <rect
            x="176"
            y="40"
            width="88"
            height="34"
            fill="var(--color-paper)"
            stroke="var(--color-accent)"
            strokeWidth="1.4"
          />
          <text
            x="220"
            y="56"
            fill="var(--color-accent)"
            fontSize="8.5"
            fontWeight="700"
            textAnchor="middle"
          >
            ENROLLMENT
          </text>
          <text
            x="220"
            y="67"
            fill="var(--color-muted)"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
          >
            FK schedule_id
          </text>

          <rect
            x="328"
            y="40"
            width="88"
            height="34"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
          />
          <text
            x="372"
            y="56"
            fill="var(--color-ink)"
            fontSize="8.5"
            fontWeight="700"
            textAnchor="middle"
          >
            COURSE_CAT
          </text>
          <text
            x="372"
            y="67"
            fill="var(--color-muted)"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
          >
            PK course_code
          </text>

          <line
            x1="112"
            y1="57"
            x2="176"
            y2="57"
            stroke="var(--color-ink)"
            strokeWidth="1"
          />
          <line
            x1="264"
            y1="57"
            x2="328"
            y2="57"
            stroke="var(--color-ink)"
            strokeWidth="1"
          />
          <circle cx="144" cy="57" r="2.5" fill="var(--color-accent-bright)" />
          <circle cx="296" cy="57" r="2.5" fill="var(--color-accent-bright)" />

          <line
            x1="24"
            y1="108"
            x2="416"
            y2="108"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          <text
            x="24"
            y="122"
            fill="var(--color-muted)"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.5"
          >
            HARMONIC RESONANCE & TIME MATRIX
          </text>

          {[
            { x: 30, h: 22 },
            { x: 50, h: 48 },
            { x: 70, h: 32 },
            { x: 90, h: 64 },
            { x: 110, h: 40 },
            { x: 130, h: 76 },
            { x: 150, h: 52 },
            { x: 170, h: 36 },
            { x: 190, h: 68 },
            { x: 210, h: 84 },
            { x: 230, h: 60 },
            { x: 250, h: 44 },
            { x: 270, h: 72 },
            { x: 290, h: 54 },
            { x: 310, h: 38 },
            { x: 330, h: 58 },
            { x: 350, h: 42 },
            { x: 370, h: 30 },
            { x: 390, h: 20 },
          ].map((bar, i) => (
            <React.Fragment key={bar.x}>
              <line
                x1={bar.x}
                y1={195}
                x2={bar.x}
                y2={195 - bar.h * 0.75}
                stroke={i === 9 ? "var(--color-accent)" : "var(--color-ink)"}
                strokeWidth={i === 9 ? "2" : "1"}
              />
              {i === 9 && (
                <circle
                  cx={bar.x}
                  cy={195 - bar.h * 0.75}
                  r="2.5"
                  fill="var(--color-accent-bright)"
                />
              )}
            </React.Fragment>
          ))}
        </svg>

        <div className={styles.schematicFooter}>
          <span>STACK: PHP · RELATIONAL SQL</span>
          <span className={styles.schematicCoord}>FREQ: 440.0 HZ [TUNED]</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.schematicWrapper} aria-hidden="true">
      <div className={styles.schematicHeader}>
        <div className={styles.schematicTag}>
          <span className={styles.schematicTagDot} />
          <span>ROUTE GRAPH // KOTAU</span>
        </div>
        <span className={styles.schematicId}>FIG. 03C — WAYPOINTS & BUDGET</span>
      </div>

      <svg
        className={styles.svgCanvas}
        viewBox="0 0 440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 36 150 C 90 60, 160 170, 240 80 S 340 160, 404 60"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 36 150 C 90 60, 160 170, 240 80 S 340 160, 404 60"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
          className={styles.pulseLine}
        />

        <circle cx="36" cy="150" r="5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.5" />
        <circle cx="36" cy="150" r="2" fill="var(--color-ink)" />
        <text x="36" y="172" fill="var(--color-ink)" fontSize="8" fontWeight="700" textAnchor="middle">
          WP_01 DEP
        </text>

        <circle cx="150" cy="138" r="4" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.2" />
        <text x="150" y="125" fill="var(--color-muted)" fontSize="7.5" textAnchor="middle">
          WP_02
        </text>

        <circle cx="240" cy="80" r="6" fill="var(--color-paper)" stroke="var(--color-accent)" strokeWidth="1.5" />
        <circle cx="240" cy="80" r="3" fill="var(--color-accent-bright)" />
        <text x="240" y="65" fill="var(--color-accent)" fontSize="8.5" fontWeight="700" textAnchor="middle">
          WP_03 SUMMIT
        </text>

        <circle cx="404" cy="60" r="5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.5" />
        <circle cx="404" cy="60" r="2" fill="var(--color-ink)" />
        <text x="404" y="82" fill="var(--color-ink)" fontSize="8" fontWeight="700" textAnchor="middle">
          WP_04 ARR
        </text>

        <line x1="24" y1="184" x2="416" y2="184" stroke="var(--color-line)" strokeWidth="1" />
        <text x="24" y="202" fill="var(--color-muted)" fontSize="8" fontFamily="monospace">
          TOTAL DIST: 428.6 KM
        </text>
        <text x="160" y="202" fill="var(--color-muted)" fontSize="8" fontFamily="monospace">
          BUDGET: IDR 2,450,000
        </text>
        <text x="310" y="202" fill="var(--color-ink)" fontSize="8" fontWeight="700" fontFamily="monospace">
          ALLOC: 42% ACC / 30% TR / 28% ACT
        </text>
      </svg>

      <div className={styles.schematicFooter}>
        <span>STACK: REACT · SUPABASE · LEAFLET</span>
        <span className={styles.schematicCoord}>TELEMETRY ACTIVE // 100%</span>
      </div>
    </div>
  );
}
