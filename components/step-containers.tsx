import type { NextPage } from "next";
import styles from "./step-containers.module.css";

export type StepContainersType = {
  className?: string;
  step1?: string;
  bookA45MinuteStrategySess?: string;
  gainClarityOnYourChildsCu?: string;
};

const StepContainers: NextPage<StepContainersType> = ({
  className = "",
  step1,
  bookA45MinuteStrategySess,
  gainClarityOnYourChildsCu,
}) => {
  return (
    <div className={[styles.stepContainers, className].join(" ")}>
      <div className={styles.stepContainersChild} />
      <div className={styles.stepElements}>
        <div className={styles.stepLabels}>
          <h1 className={styles.step1}>{step1}</h1>
        </div>
        <div className={styles.bookA45Minute}>{bookA45MinuteStrategySess}</div>
      </div>
      <div className={styles.stepDetails}>
        <div className={styles.gainClarityOn}>{gainClarityOnYourChildsCu}</div>
      </div>
    </div>
  );
};

export default StepContainers;
