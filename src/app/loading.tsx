import React from "react";
import styles from "@/components/ui/AppPreloader.module.css";

export default function Loading() {
  return (
    <div className={styles.preloader} aria-label="Loading portfolio">
      <div className={styles.topBar}>
        <span className={styles.brand}>PORTFOLIO</span>
        <span className={styles.brand}>1440 × 4822</span>
      </div>

      <div className={styles.centerContent}>
        <h1 className={styles.name}>DAFFA BISMA RUDIDHARMA</h1>
        <p className={styles.status}>Rendering server components...</p>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} style={{ width: "60%" }} />
        </div>
      </div>

      <div className={styles.topBar}>
        <span className={styles.brand}>STREAMING SSR</span>
        <span className={styles.brand}>...</span>
      </div>
    </div>
  );
}
