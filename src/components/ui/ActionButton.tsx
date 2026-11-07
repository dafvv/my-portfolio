import React from "react";
import styles from "./ActionButton.module.css";

export type ActionButtonVariant =
  | "primary"
  | "secondary"
  | "cta-badge"
  | "status-badge"
  | "icon-square";

export interface ActionButtonProps {
  variant: ActionButtonVariant;
  href?: string;
  external?: boolean;
  download?: boolean | string;
  iconSrc?: string;
  iconHoverSrc?: string;
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export function ActionButton({
  variant,
  href,
  external,
  download,
  iconSrc,
  iconHoverSrc,
  className,
  children,
  "aria-label": ariaLabel,
  onClick,
}: ActionButtonProps) {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    "cta-badge": styles.ctaBadge,
    "status-badge": styles.statusBadge,
    "icon-square": styles.iconSquare,
  }[variant];

  const fullClassName = `${styles.base} ${variantClass} ${className || ""}`;

  if (variant === "status-badge") {
    return (
      <span className={fullClassName} role="status">
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={fullClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download ? (typeof download === "string" ? download : true) : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children && <span>{children}</span>}
        {iconHoverSrc ? (
          <div className={styles.iconSlot}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconSrc}
              alt=""
              aria-hidden="true"
              className={`${styles.icon} ${styles.iconDefault}`}
              width={20}
              height={20}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconHoverSrc}
              alt=""
              aria-hidden="true"
              className={`${styles.icon} ${styles.iconHover}`}
              width={20}
              height={20}
            />
          </div>
        ) : (
          iconSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={iconSrc}
              alt=""
              aria-hidden="true"
              className={styles.icon}
              width={20}
              height={20}
            />
          )
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={fullClassName}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children && <span>{children}</span>}
      {iconHoverSrc ? (
        <div className={styles.iconSlot}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className={`${styles.icon} ${styles.iconDefault}`}
            width={20}
            height={20}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconHoverSrc}
            alt=""
            aria-hidden="true"
            className={`${styles.icon} ${styles.iconHover}`}
            width={20}
            height={20}
          />
        </div>
      ) : (
        iconSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className={styles.icon}
            width={20}
            height={20}
          />
        )
      )}
    </button>
  );
}
