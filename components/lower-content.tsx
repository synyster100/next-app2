import type { NextPage } from "next";
import styles from "./lower-content.module.css";

export type LowerContentType = {
  className?: string;
};

const LowerContent: NextPage<LowerContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.lowerContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <img
          className={styles.contentLeftChild}
          loading="lazy"
          alt=""
          src="/frame-266.svg"
        />
        <div className={styles.contentLeftInner}>
          <div className={styles.frameParent}>
            <div className={styles.theTypicalApplicantPoolIsParent}>
              <h1 className={styles.theTypicalApplicant}>
                The Typical Applicant Pool is NOT what you think:
              </h1>
              <div className={styles.over90Of}>
                Over 90% of our clients have gotten accepted to one or more of
                their top 3 choices over the past 2 years, thanks to our proven
                approach. Curious how we did it? Get instant access.
              </div>
              <div className={styles.theFirstStep}>
                The First Step to Acceptance into Your Top Choice!
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text}>Yes! Get Me Registered Now!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerContent;
