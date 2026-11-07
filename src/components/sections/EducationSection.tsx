import React from "react";
import styles from "./EducationSection.module.css";
import { EDUCATION_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      label="Education"
      counter={`${String(EDUCATION_DATA.length).padStart(2, "0")} qualifications`}
      theme="paper"
      layout="stacked"
      hasEndRule={true}
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading" className="sr-only">
        Education
      </h2>
      {EDUCATION_DATA.map((item, idx) => (
        <React.Fragment key={item.degree}>
          <article
            className={styles.item}
            data-animate="fade-up"
            data-delay={String((idx + 1) * 100)}
          >
            <div className={styles.leftCol}>
              <h3 className={styles.degree}>{item.degree}</h3>
            </div>
            <p className={styles.period}>{item.period}</p>
            <p className={styles.institution}>{item.institution}</p>
          </article>

          {idx < EDUCATION_DATA.length - 1 && (
            <div className={styles.midRuleWrapper}>
              <div
                className={styles.midRule}
                data-animate="rule-draw"
                aria-hidden="true"
              />
            </div>
          )}
        </React.Fragment>
      ))}
      <div className={styles.bottomSpacer} aria-hidden="true" />
    </SectionWrapper>
  );
}
