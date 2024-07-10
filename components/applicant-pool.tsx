import type { NextPage } from "next";
import styles from "./applicant-pool.module.css";

export type ApplicantPoolType = {
  className?: string;
};

const ApplicantPool: NextPage<ApplicantPoolType> = ({ className = "" }) => {
  return (
    <section className={[styles.applicantPool, className].join(" ")}>
      <div className={styles.poolContent}>
        <div className={styles.poolDefinition}>
          <div className={styles.whatIsTheTypicalApplicantParent}>
            <h2 className={styles.whatIsThe}>
              What is the Typical Applicant Pool?
            </h2>
            <div className={styles.theTypicalApplicant}>
              The Typical Applicant Pool refers to the objective measures that
              the majority of students who are accepted into each university
              have.
            </div>
          </div>
          <div className={styles.poolParts}>
            <div className={styles.partsContent}>
              <h2 className={styles.partsOfThe}>
                Parts of the Typical Applicant Pool:
              </h2>
              <div className={styles.frameParent}>
                <div className={styles.checkIconTickParent}>
                  <img
                    className={styles.checkIconTick}
                    loading="lazy"
                    alt=""
                    src="/check-icon-tick.svg"
                  />
                  <div className={styles.gpa}>GPA</div>
                </div>
                <div className={styles.checkIconTickGroup}>
                  <img
                    className={styles.checkIconTick1}
                    alt=""
                    src="/check-icon-tick.svg"
                  />
                  <div className={styles.testScores}>Test Scores </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.checkIconTickContainer}>
                  <img
                    className={styles.checkIconTick2}
                    alt=""
                    src="/check-icon-tick.svg"
                  />
                  <div className={styles.classRigor}>Class Rigor</div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.checkIconTick3}
                    alt=""
                    src="/check-icon-tick.svg"
                  />
                  <div className={styles.involvementInExtracurricular}>
                    Involvement in extracurricular activities
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.amIInTheTypicalApplicantParent}>
            <h2 className={styles.amIIn}>
              Am I in the Typical Applicant Pool for My Top Choices?
            </h2>
            <div className={styles.thisDataIs}>
              This data is public knowledge, and we can help you see exactly
              where you fall on a free strategy call.
            </div>
          </div>
        </div>
        <div className={styles.fileUploadWrapper}>
          <img
            className={styles.fileUploadIcon}
            loading="lazy"
            alt=""
            src="/frame-507.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicantPool;
