"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollTelemetrySync() {
  useLenis((lenis) => {
    const root = document.documentElement;
    const progress = lenis.progress || 0;
    const scroll = lenis.scroll || 0;

    root.style.setProperty("--scroll-progress", progress.toFixed(4));
    root.style.setProperty("--scroll-y", `${Math.round(scroll)}px`);

    const viewportMid = scroll + 160;
    const trackedSections = document.querySelectorAll<HTMLElement>("section[id], footer[id]");
    let currentSection = "";
    for (let i = trackedSections.length - 1; i >= 0; i--) {
      const sec = trackedSections[i];
      if (sec.offsetTop <= viewportMid) {
        currentSection = sec.id;
        break;
      }
    }
    if (currentSection && root.dataset.activeSection !== currentSection) {
      root.dataset.activeSection = currentSection;
      window.dispatchEvent(
        new CustomEvent("section-change", { detail: { activeId: currentSection } })
      );
    }
  });

  return null;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        anchors: {
          offset: -72,
        },
      }}
    >
      <ScrollTelemetrySync />
      {children}
    </ReactLenis>
  );
}
