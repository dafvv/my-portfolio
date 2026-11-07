"use client";

import React, { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import styles from "./BackToTopButton.module.css";
import { ActionButton } from "./ActionButton";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      const threshold = heroEl
        ? heroEl.offsetTop + heroEl.offsetHeight * 0.5
        : 500;
      setVisible(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (lenis && !prefersReducedMotion) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }

    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <div
      className={`${styles.floatingWrapper} ${visible ? styles.visible : ""}`}
      data-visible={visible}
    >
      <ActionButton
        variant="icon-square"
        href="#top"
        iconSrc="/assets/icons/arrow-up.svg"
        aria-label="Back to top"
        onClick={handleScrollTop}
      />
    </div>
  );
}
