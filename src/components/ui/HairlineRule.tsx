import React from "react";
import styles from "./HairlineRule.module.css";

export interface HairlineRuleProps {
  tone?: "line" | "ink";
  scope?: "full" | "inset" | "column";
  className?: string;
}

export function HairlineRule({
  tone = "line",
  scope = "full",
  className,
}: HairlineRuleProps) {
  const toneClass = tone === "ink" ? styles.toneInk : styles.toneLine;
  const scopeClass = {
    full: styles.scopeFull,
    inset: styles.scopeInset,
    column: styles.scopeColumn,
  }[scope];

  return (
    <div
      aria-hidden="true"
      className={`${styles.rule} ${toneClass} ${scopeClass} ${className || ""}`}
    />
  );
}
