"use client";

import React, { useEffect, useState } from "react";
import styles from "./AppPreloader.module.css";

export function AppPreloader() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let isMounted = true;

    async function checkAssets() {
      setProgress(50);
      if (typeof document !== "undefined" && "fonts" in document) {
        try {
          await Promise.race([
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 1500)),
          ]);
        } catch {}
      }

      if (!isMounted) return;
      setProgress(75);

      const criticalImages = Array.from(
        document.querySelectorAll<HTMLImageElement>("img[data-critical='true']")
      );

      const decodePromises = criticalImages.map((img) => {
        if (img.complete) return Promise.resolve();
        return typeof img.decode === "function"
          ? img.decode().catch(() => Promise.resolve())
          : Promise.resolve();
      });

      await Promise.all(decodePromises);

      if (!isMounted) return;
      setProgress(100);

      const isReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReducedMotion) {
        setIsDismissed(true);
        return;
      }

      const timer = setTimeout(() => {
        if (isMounted) {
          setIsDismissed(true);
        }
      }, 150);

      return () => clearTimeout(timer);
    }

    checkAssets();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className={`${styles.preloader} ${isDismissed ? styles.dismissed : ""}`}
      aria-hidden={isDismissed}
    >
      <div className={styles.topBar}>
        <span className={styles.brand}>PORTFOLIO</span>
        <span className={styles.brand}>FULL-STACK · DEVOPS</span>
      </div>

      <div className={styles.centerContent}>
        <p className={styles.name}>DAFFA BISMA RUDIDHARMA</p>
        <p className={styles.status}>Loading typography and media assets...</p>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={styles.topBar}>
        <span className={styles.brand}>INITIALIZING</span>
        <span className={styles.brand}>{progress}%</span>
      </div>
    </div>
  );
}
