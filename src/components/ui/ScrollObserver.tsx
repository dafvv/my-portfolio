"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReduced) {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        el.setAttribute("data-in-view", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight || el.closest("#hero") !== null;

        if (isAboveFold) {
          el.setAttribute("data-in-view", "true");
        } else {
          observer.observe(el);
        }
      });
    });

    let rafId: number | null = null;
    const trackedSections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]")
    );

    const onScroll = () => {
      if (root.classList.contains("lenis-smooth")) return;
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const scrollTop = window.scrollY || root.scrollTop;
        const scrollHeight = root.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;

        root.style.setProperty("--scroll-progress", progress.toFixed(4));
        root.style.setProperty("--scroll-y", `${scrollTop}px`);

        const viewportMid = scrollTop + 160;
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
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
