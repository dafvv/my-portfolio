import React from "react";
import styles from "./SectionWrapper.module.css";

export interface SectionWrapperProps {
  id?: string;
  as?: "section" | "footer" | "div";
  label?: string;
  counter?: string;
  theme?: "paper" | "ink";
  layout?: "stacked" | "split";
  splitSpacing?: "experience" | "skills";
  leftSlot?: React.ReactNode;
  hasEndRule?: boolean;
  className?: string;
  children: React.ReactNode;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

export function SectionWrapper({
  id,
  as: Component = "section",
  label,
  counter,
  theme = "paper",
  layout = "stacked",
  splitSpacing,
  leftSlot,
  hasEndRule = true,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  "aria-label": ariaLabel,
}: SectionWrapperProps) {
  const themeClass = theme === "ink" ? styles.themeInk : styles.themePaper;

  return (
    <Component
      id={id}
      className={`${styles.section} ${themeClass} ${className || ""}`}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
    >
      {label && (
        <div className={styles.labelBar}>
          <div className={styles.labelInner}>
            <span className={styles.labelBarText}>{label}</span>
            {counter && <span className={styles.labelBarCounter}>{counter}</span>}
          </div>
        </div>
      )}

      {layout === "split" ? (
        <div className={styles.container}>
          <div
            className={
              splitSpacing === "experience"
                ? styles.splitExperience
                : styles.splitSkills
            }
          >
            {leftSlot && <div className={styles.splitLeft}>{leftSlot}</div>}
            <div className={styles.splitRight}>{children}</div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>{children}</div>
      )}

      {hasEndRule && <div className={styles.endRule} aria-hidden="true" />}
    </Component>
  );
}
