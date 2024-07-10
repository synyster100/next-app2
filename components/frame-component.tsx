import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
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
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-102@2x.png"
        />
      </div>
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>learn more</div>
        <div className={styles.div}>{`->`}</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.easygoingWrapper}>
          <div className={styles.easygoing}>Easygoing</div>
        </div>
        <div className={styles.thisTypeOf}>
          This type of student is typically at the top of their social or
          leisure game.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
