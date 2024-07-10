import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  group103?: string;
  highAchiever?: string;
  thisTypeOfStudentIsAtTheT?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  group103,
  highAchiever,
  thisTypeOfStudentIsAtTheT,
}) => {
  return (
    <div className={[styles.cardContainersParent, className].join(" ")}>
      <div className={styles.cardContainers}>
        <div className={styles.backgrounds} />
        <div className={styles.wrapperMaskGroup}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group-2.svg"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group103}
        />
      </div>
      <div className={styles.personaDetails}>
        <div className={styles.personaTitles}>
          <div className={styles.highAchiever}>{highAchiever}</div>
        </div>
        <div className={styles.thisTypeOf}>{thisTypeOfStudentIsAtTheT}</div>
      </div>
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>learn more</div>
        <div className={styles.div}>{`->`}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
