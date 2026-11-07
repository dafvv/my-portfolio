import React from "react";
import Image from "next/image";
import styles from "./WorkSection.module.css";
import { PROJECTS_DATA, MORE_WORK_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ActionButton } from "@/components/ui/ActionButton";
import { EyebrowText } from "@/components/ui/EyebrowText";
import { ProjectSchematicPlate } from "@/components/ui/ProjectSchematicPlate";

export function WorkSection() {
  return (
    <SectionWrapper
      id="work"
      label="Selected Projects"
      counter={`${String(PROJECTS_DATA.length).padStart(2, "0")} featured works`}
      theme="paper"
      hasEndRule={true}
      aria-labelledby="work-heading"
    >
      <div className={styles.titleBlock} data-animate="mask-up">
        <DisplayHeading
          as="h2"
          id="work-heading"
          variant="xl"
          tone="ink"
          aria-label="Work"
        >
          WORK
        </DisplayHeading>
      </div>

      <div className={styles.titleRuleWrapper}>
        <div className={styles.titleRule} data-animate="rule-draw" aria-hidden="true" />
      </div>

      {PROJECTS_DATA.map((project, idx) => (
        <React.Fragment key={project.name}>
          <article
            className={styles.projectRow}
            data-animate="fade-up"
            data-delay={String((idx + 1) * 75)}
          >
            <div className={styles.metaCol}>
              <DisplayHeading as="span" variant="index" tone="ink">
                {String(project.index).padStart(2, "0")}
              </DisplayHeading>
              <EyebrowText weight="regular" tone="muted" lineHeight="18">
                {project.category}
              </EyebrowText>
            </div>

            <div className={styles.imageCol}>
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className={styles.projectImage}
                />
              ) : (
                <ProjectSchematicPlate
                  projectId={project.index}
                  projectName={project.name}
                />
              )}
            </div>

            <div className={styles.contentCol}>
              <div className={styles.topBlock}>
                <h3 className={styles.projectTitle}>{project.name}</h3>

                <dl className={styles.detailsList}>
                  <div className={styles.detailRow}>
                    <dt className={styles.detailLabel}>Problem</dt>
                    <dd className={styles.detailValue}>{project.problem}</dd>
                  </div>
                  <div className={styles.detailRow}>
                    <dt className={styles.detailLabel}>Delivery</dt>
                    <dd className={styles.detailValue}>{project.delivery}</dd>
                  </div>
                  <div className={styles.detailRow}>
                    <dt className={styles.detailLabel}>Role</dt>
                    <dd className={styles.detailValue}>{project.role}</dd>
                  </div>
                  <div className={styles.detailRow}>
                    <dt className={styles.detailLabel}>Project Stack</dt>
                    <dd className={styles.detailValue}>{project.stack}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.actionSlot}>
                {project.liveUrl ? (
                  <ActionButton
                    variant="cta-badge"
                    href={project.liveUrl}
                    external
                    iconSrc="/assets/icons/launch.svg"
                    aria-label={`Visit live site: ${project.name}`}
                  >
                    VISIT LIVE SITE
                  </ActionButton>
                ) : (
                  <ActionButton variant="status-badge">
                    <span className={styles.amberPulse} aria-hidden="true" />
                    {project.status || "IN PROGRESS"}
                  </ActionButton>
                )}
              </div>
            </div>
          </article>

          <div className={styles.projectDivider} data-animate="rule-draw" aria-hidden="true" />
        </React.Fragment>
      ))}

      <div className={styles.moreWorkContainer}>
        <EyebrowText weight="semibold" tone="muted">
          More work
        </EyebrowText>

        <div className={styles.moreWorkList}>
          {MORE_WORK_DATA.map((item) => (
            <div key={item.name} className={styles.moreWorkRow}>
              <p className={styles.moreWorkName}>{item.name}</p>
              <p className={styles.moreWorkDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
