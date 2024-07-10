import type { NextPage } from "next";
import styles from "./body.module.css";

export type BodyType = {
  className?: string;
};

const Body: NextPage<BodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.topParagraphWrapper}>
          <div className={styles.topParagraph}>
            <div className={styles.paragraphContent}>
              <h1 className={styles.eachUniversityIs}>
                Each University is Different!
              </h1>
              <h3 className={styles.beingInThe}>
                Being in the Typical Applicant Pool for your top choices is the
                foundation of your success.
              </h3>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text}>BOOK YOUR STRATEGY SESSION!</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContentWrapper}>
          <div className={styles.imageContent}>
            <div className={styles.imageContentChild} />
            <img
              className={styles.imageContentItem}
              alt=""
              src="/rectangle-4@2x.png"
            />
            <img
              className={styles.imageContentInner}
              loading="lazy"
              alt=""
              src="/group-15.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
