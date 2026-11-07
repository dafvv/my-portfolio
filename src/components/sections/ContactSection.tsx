import React from "react";
import styles from "./ContactSection.module.css";
import { CONTACT_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      as="footer"
      label="Contact"
      theme="ink"
      hasEndRule={false}
      aria-labelledby="contact-heading"
    >
      <div className={styles.contactInner}>
        <div className={styles.titleBlock} data-animate="mask-up">
          <DisplayHeading
            as="h2"
            id="contact-heading"
            variant="l"
            tone="paper"
            aria-label="Let's talk"
          >
            {CONTACT_DATA.headingLine1}
          </DisplayHeading>
          <DisplayHeading
            as="span"
            variant="l"
            tone="accent-bright"
            aria-hidden="true"
          >
            {CONTACT_DATA.headingLine2}
            <span className={styles.cursorBlink}>_</span>
          </DisplayHeading>
        </div>

        <div className={styles.bodyBlock} data-animate="fade-up">
          <div className={styles.textCol}>
            <div className={styles.availBadge}>
              <span className={styles.availDot} aria-hidden="true" />
              AVAILABLE FOR FULL-STACK & DEVOPS ROLES
            </div>
            <p className={styles.paragraph}>{CONTACT_DATA.intro}</p>
          </div>

          <div className={styles.linksCol}>
            <a href={CONTACT_DATA.emailHref} className={styles.contactLink}>
              {CONTACT_DATA.email}
            </a>
            <a href={CONTACT_DATA.phoneHref} className={styles.contactLink}>
              {CONTACT_DATA.phone}
            </a>
            <a
              href={CONTACT_DATA.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {CONTACT_DATA.linkedin}
            </a>
            <a
              href={CONTACT_DATA.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {CONTACT_DATA.github}
            </a>
          </div>
        </div>

        <div className={styles.backToTopWrapper}>
          <BackToTopButton />
        </div>
      </div>
    </SectionWrapper>
  );
}
