import React from "react";
import styles from "./ExperienceSection.module.css";
import { EXPERIENCE_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      counter={`${String(EXPERIENCE_DATA.length).padStart(2, "0")} entries`}
      theme="paper"
      layout="split"
      splitSpacing="experience"
      hasEndRule={true}
      aria-labelledby="experience-heading"
      leftSlot={
        <div data-animate="mask-up">
          <DisplayHeading
            as="h2"
            id="experience-heading"
            variant="l"
            tone="ink"
            aria-label="Experience"
          >
            EXP.
          </DisplayHeading>
        </div>
      }
    >
      <div className={styles.list}>
        {EXPERIENCE_DATA.map((item, idx) => (
          <React.Fragment key={`${item.title}-${item.period}`}>
            <article
              className={styles.item}
              data-animate="fade-up"
              data-delay={String((idx + 1) * 75)}
            >
              <div className={styles.itemHeadingCol}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.organization}>{item.organization}</p>
              </div>
              <p className={styles.period}>{item.period}</p>
              <p className={styles.description}>{item.description}</p>
            </article>

            <div className={styles.itemDivider} data-animate="rule-draw" aria-hidden="true" />
          </React.Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
}
