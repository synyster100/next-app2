import type { NextPage } from "next";
import styles from "./gap-description.module.css";

export type GapDescriptionType = {
  className?: string;
};

const GapDescription: NextPage<GapDescriptionType> = ({ className = "" }) => {
  return (
    <div className={[styles.gapDescription, className].join(" ")}>
      <div className={styles.gapParagraph}>
        <div className={styles.gapSentence}>
          <div className={styles.thisGapVariesContainer}>
            <p className={styles.thisGapVaries}>
              This gap varies in size among applicants and the size of the gap
              depends on GPA, test scores, etc. The larger your gap, the more
              value you will need to demonstrate to the university to get
              accepted.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.eachUniversityAlso}>
              Each university also values different things. We can help you draw
              out the value you would add to universities and determine which
              universities would value what you have to offer.
            </p>
          </div>
          <div className={styles.gapNote}>
            <div className={styles.gapInfo}>
              <div className={styles.subtleDetail}>
                Want to learn if you’re in the Typical Applicant Pool for a
                University?
              </div>
            </div>
          </div>
        </div>
        <div className={styles.studentTypes}>
          <h1 className={styles.typesOfStudents}>
            Types of Students We Work with Often!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GapDescription;
