import React from "react";
import styles from "./EyebrowText.module.css";

export type EyebrowWeight = "regular" | "semibold" | "bold";
export type EyebrowTone = "ink" | "muted" | "paper";
export type EyebrowLineHeight = "normal" | "18";

export interface EyebrowTextProps {
  as?: "p" | "span" | "div" | "th" | "dt" | "h3";
  weight?: EyebrowWeight;
  tone?: EyebrowTone;
  lineHeight?: EyebrowLineHeight;
  className?: string;
  children: React.ReactNode;
  "aria-hidden"?: boolean;
}

export function EyebrowText({
  as: Component = "p",
  weight = "semibold",
  tone = "ink",
  lineHeight = "normal",
  className,
  children,
  "aria-hidden": ariaHidden,
}: EyebrowTextProps) {
  const weightClass = {
    regular: styles.weightRegular,
    semibold: styles.weightSemibold,
    bold: styles.weightBold,
  }[weight];

  const toneClass = {
    ink: styles.toneInk,
    muted: styles.toneMuted,
    paper: styles.tonePaper,
  }[tone];

  const lineHeightClass =
    lineHeight === "18" ? styles.lineHeight18 : styles.lineHeightNormal;

  return (
    <Component
      className={`${styles.eyebrow} ${weightClass} ${toneClass} ${lineHeightClass} ${className || ""}`}
      aria-hidden={ariaHidden}
    >
      {children}
    </Component>
  );
}
