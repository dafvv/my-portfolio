"use client";

import React, { useEffect, useState } from "react";
import styles from "./HeaderSection.module.css";

export function HeaderSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ activeId: string }>;
      if (customEvent.detail?.activeId) {
        setActiveSection(customEvent.detail.activeId);
      }
    };

    window.addEventListener("section-change", handleSectionChange);
    return () => {
      window.removeEventListener("section-change", handleSectionChange);
    };
  }, []);

  const navItems = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <nav aria-label="Primary" className={styles.nav}>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <React.Fragment key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </a>
                {idx < navItems.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">
                    /
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
        <a href="#top" className={styles.brand} aria-label="Portfolio top">
          Portfolio
        </a>
      </div>
      <div className={styles.progressBar} aria-hidden="true" />
    </header>
  );
}
