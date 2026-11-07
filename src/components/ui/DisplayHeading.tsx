import React from "react";
import styles from "./DisplayHeading.module.css";

export type HeadingVariant = "xl" | "l" | "l-tight" | "hero" | "index" | "project";
export type HeadingTone = "ink" | "paper" | "accent-bright";

export interface DisplayHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  variant: HeadingVariant;
  tone?: HeadingTone;
  id?: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}

export function DisplayHeading({
  as: Component = "h2",
  variant,
  tone = "ink",
  id,
  className,
  children,
  "aria-label": ariaLabel,
}: DisplayHeadingProps) {
  const variantClass = {
    xl: styles.variantXl,
    l: styles.variantL,
    "l-tight": styles.variantLTight,
    hero: styles.variantHero,
    index: styles.variantIndex,
    project: styles.variantProject,
  }[variant];

  const toneClass = {
    ink: styles.toneInk,
    paper: styles.tonePaper,
    "accent-bright": styles.toneAccentBright,
  }[tone];

  return (
    <Component
      id={id}
      className={`${styles.heading} ${variantClass} ${toneClass} ${className || ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}
