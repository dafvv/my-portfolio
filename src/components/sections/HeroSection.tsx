"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { HERO_DATA, EXTERNAL_LINKS } from "@/data/portfolio";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ActionButton } from "@/components/ui/ActionButton";
import { EyebrowText } from "@/components/ui/EyebrowText";
import { CuttingMatBackground } from "@/components/ui/CuttingMatBackground";

export function HeroSection() {
  const [wibTime, setWibTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setWibTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.cuttingMatFrame}>
        <CuttingMatBackground />
      </div>

      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <div className={styles.introHeader}>
            <div className={styles.metaStrip} data-animate="fade-in">
              <span className={styles.statusIndicator}>
                <span className={styles.statusDot} aria-hidden="true" />
                SYSTEM READY
              </span>
              <span className={styles.timeBadge}>
                BOGOR UTC+7 [{wibTime || "08:45:00"}]
              </span>
            </div>

            <div data-animate="mask-up">
              <DisplayHeading
                as="h1"
                variant="hero"
                tone="ink"
                className={styles.nameHeading}
              >
                {HERO_DATA.name}
              </DisplayHeading>
            </div>
            <p className={styles.role} data-animate="fade-up" data-delay="75">
              {HERO_DATA.role}
            </p>
            <p className={styles.tagline} data-animate="fade-up" data-delay="150">
              {HERO_DATA.tagline}
            </p>
          </div>

          <div className={styles.introBody} data-animate="fade-up" data-delay="225">
            <p className={styles.paragraph}>{HERO_DATA.introParagraph1}</p>
            <p className={styles.paragraph}>{HERO_DATA.introParagraph2}</p>
          </div>

          <div className={styles.introActions} data-animate="fade-up" data-delay="300">
            <ActionButton
              variant="primary"
              href="#work"
              iconSrc="/assets/icons/arrow-up-right.svg"
            >
              View my projects
            </ActionButton>
            <ActionButton
              variant="secondary"
              href={EXTERNAL_LINKS.cvUrl}
              download="Daffa_Bisma_Rudidharma_CV.pdf"
              iconSrc="/assets/icons/download.svg"
              iconHoverSrc="/assets/icons/download-paper.svg"
            >
              Download CV
            </ActionButton>
          </div>
        </div>

        <div className={styles.rightColumn} data-animate="fade-in" data-delay="150">
          <div className={styles.portraitFrame}>
            <div className={styles.azimuthRing} aria-hidden="true">
              <span className={styles.azimuthPip} />
            </div>
            <div className={styles.portraitWrapper}>
              <Image
                src={HERO_DATA.portraitSrc}
                alt={HERO_DATA.portraitAlt}
                width={520}
                height={520}
                priority
                fetchPriority="high"
                data-critical="true"
                className={styles.portrait}
              />
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={EXTERNAL_LINKS.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <EyebrowText as="span" tone="ink">LinkedIn</EyebrowText>
            </a>
            <a
              href={EXTERNAL_LINKS.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <EyebrowText as="span" tone="ink">GitHub</EyebrowText>
            </a>
            <a href={EXTERNAL_LINKS.emailHref} className={styles.socialLink}>
              <EyebrowText as="span" tone="ink">Email</EyebrowText>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.telemetryTape} aria-label="Candidate availability">
        <div className={styles.tapeTrack}>
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={styles.tapeCluster}
              aria-hidden={idx > 0 ? "true" : undefined}
            >
              <span className={styles.tapeItem}>
                <span className={styles.tapeDot} aria-hidden="true" />
                AVAILABLE TO WORK
              </span>
              <span className={styles.tapeSep}>///</span>
              <span className={styles.tapeItem}>FULL-STACK WEB SYSTEMS</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>DEVOPS PIPELINES & RELIABILITY</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>SPATIAL & RELATIONAL ARCHITECTURE</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>
                <span className={styles.tapeDot} aria-hidden="true" />
                AVAILABLE TO WORK
              </span>
              <span className={styles.tapeSep}>///</span>
              <span className={styles.tapeItem}>BOGOR, ID · UTC+7</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>DAFFA BISMA RUDIDHARMA</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>
                <span className={styles.tapeDot} aria-hidden="true" />
                AVAILABLE TO WORK
              </span>
              <span className={styles.tapeSep}>///</span>
              <span className={styles.tapeItem}>CLOUD & CONTAINER INFRASTRUCTURE</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>HUMAN-DIRECTED AI ACCELERATION</span>
              <span className={styles.tapeSep}>//</span>
              <span className={styles.tapeItem}>SOFTWARE ENGINEERING TECHNOLOGY</span>
              <span className={styles.tapeSep}>///</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
