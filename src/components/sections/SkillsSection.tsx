import React from "react";
import styles from "./SkillsSection.module.css";
import { SKILL_CATEGORIES, SKILLS_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function SkillsSection() {
  const maxRows = Math.max(
    ...SKILL_CATEGORIES.map((cat) => SKILLS_DATA[cat]?.length || 0)
  );

  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      counter={`${String(SKILL_CATEGORIES.length).padStart(2, "0")} categories`}
      theme="paper"
      layout="split"
      splitSpacing="skills"
      hasEndRule={true}
      aria-labelledby="skills-heading"
      leftSlot={
        <div className={styles.leftTitle} data-animate="mask-up">
          <DisplayHeading
            as="h2"
            id="skills-heading"
            variant="l-tight"
            tone="ink"
            aria-label="Skill set"
          >
            SKILL
          </DisplayHeading>
          <DisplayHeading
            as="span"
            variant="l-tight"
            tone="ink"
            aria-hidden="true"
          >
            SET.
          </DisplayHeading>
        </div>
      }
    >
      <div className={styles.tableWrapper} data-animate="fade-up">
        <table className={styles.table}>
          <thead>
            <tr>
              {SKILL_CATEGORIES.map((category) => (
                <th key={category} scope="col" className={styles.th}>
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {SKILL_CATEGORIES.map((category) => {
                  const cellValue = SKILLS_DATA[category]?.[rowIndex] || "";
                  return (
                    <td key={category} className={styles.td}>
                      {cellValue || null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
