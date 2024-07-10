import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.middleContentWrapper, className].join(" ")}>
      <div className={styles.middleContent}>
        <img
          className={styles.middleContentChild}
          loading="lazy"
          alt=""
          src="/frame-266.svg"
        />
        <div className={styles.middleContentInner}>
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
            <button className={styles.textWrapper}>
              <div className={styles.text}>Yes! Get Me Registered Now!</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
