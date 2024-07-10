import type { NextPage } from "next";
import styles from "./g-p-a.module.css";

export type GPAType = {
  className?: string;
};

const GPA: NextPage<GPAType> = ({ className = "" }) => {
  return (
    <section className={[styles.gPA, className].join(" ")}>
      <div className={styles.gPAContent}>
        <div className={styles.whileHavingA}>
          While having a GPA and SAT/ACT score that falls within or above the
          typical applicant pool for a university is an important foundation and
          gives you a better chance of gaining admission, the value you bring to
          the university and how you articulate that value sets our students
          apart from those who just have the GPA and SAT/ACT scores of the
          students who are typically admitted.
        </div>
        <div className={styles.firstStep}>
          <div className={styles.stepContent}>
            <h1 className={styles.itsAlsoOnly}>
              It’s also only the FIRST STEP in admissions
            </h1>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPA;
