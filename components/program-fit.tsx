import type { NextPage } from "next";
import styles from "./program-fit.module.css";

export type ProgramFitType = {
  className?: string;
};

const ProgramFit: NextPage<ProgramFitType> = ({ className = "" }) => {
  return (
    <section className={[styles.programFit, className].join(" ")}>
      <div className={styles.programCriteria}>
        <div className={styles.reportSetInput}>
          <div className={styles.reportSetInputChild} />
          <div className={styles.ourProgramsAre}>
            Our programs are for families that…
          </div>
          <div className={styles.criteriaItems}>
            <div className={styles.fitItems}>
              <img
                className={styles.checkIconTick}
                alt=""
                src="/check-icon-tick-4.svg"
              />
              <div className={styles.wantAPredictable}>
                Want a predictable college admissions model.
              </div>
            </div>
            <div className={styles.approachItems}>
              <img
                className={styles.checkIconTick1}
                alt=""
                src="/check-icon-tick-4.svg"
              />
              <div className={styles.understandThatAdmissions}>
                Understand that admissions is more than just academics, scores,
                and extracurriculars.
              </div>
            </div>
            <div className={styles.outcomeItems}>
              <img
                className={styles.checkIconTick2}
                alt=""
                src="/check-icon-tick-4.svg"
              />
              <div className={styles.knowTheyCan}>
                Know they CAN get acceptances from their top choices if they are
                willing to do what it takes.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reportSetInput1}>
          <div className={styles.reportSetInputItem} />
          <div className={styles.ourProgramsAre1}>
            Our programs are not for families that…
          </div>
          <div className={styles.minimumItemParent}>
            <div className={styles.minimumItem}>
              <img
                className={styles.minimumItemChild}
                loading="lazy"
                alt=""
                src="/frame-183.svg"
              />
              <div className={styles.wantToLeave}>
                Want to leave college admissions to chance.
              </div>
            </div>
            <div className={styles.minimumItem1}>
              <img
                className={styles.minimumItemItem}
                alt=""
                src="/frame-183.svg"
              />
              <div className={styles.justWantHelp}>
                Just want help with essays.
              </div>
            </div>
            <div className={styles.minimumItem2}>
              <img
                className={styles.minimumItemInner}
                alt=""
                src="/frame-183.svg"
              />
              <div className={styles.areStuckLooping}>
                Are stuck looping about what additional extracurriculars to pad
                the resume.
              </div>
            </div>
            <div className={styles.minimumItem3}>
              <img className={styles.minimumIcon} alt="" src="/frame-183.svg" />
              <div className={styles.wantToDo}>
                Want to do the minimum and expect maximum results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFit;
