import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./percentages.module.css";

export type PercentagesType = {
  className?: string;
  wantToKnowYourPercentages?: string;
  text?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const Percentages: NextPage<PercentagesType> = ({
  className = "",
  wantToKnowYourPercentages,
  text,
  propAlignSelf,
  propFlex,
}) => {
  const percentagesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.percentages, className].join(" ")}
      style={percentagesStyle}
    >
      <img
        className={styles.percentagesContentIcon}
        loading="lazy"
        alt=""
        src="/frame-257@2x.png"
      />
      <h1 className={styles.wantToKnow}>{wantToKnowYourPercentages}</h1>
      <div className={styles.button}>
        <div className={styles.buttonContent}>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Percentages;
