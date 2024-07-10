import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.eachUniversityIsDifferentParent}>
              <h1 className={styles.eachUniversityIs}>
                Each University is Different!
              </h1>
              <h3 className={styles.beingInThe}>
                Being in the Typical Applicant Pool for your top choices is the
                foundation of your success.
              </h3>
            </div>
            <button className={styles.avatarWrapper}>
              <div className={styles.avatar}>BOOK YOUR STRATEGY SESSION!</div>
            </button>
          </div>
        </div>
        <div className={styles.introImage}>
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

export default Content;
