import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./percentages-prompt.module.css";

export type PercentagesPromptType = {
  className?: string;
  wantToKnowYourPercentages?: string;
  blank?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const PercentagesPrompt: NextPage<PercentagesPromptType> = ({
  className = "",
  wantToKnowYourPercentages,
  blank,
  propAlignSelf,
  propFlex,
}) => {
  const percentagesPromptStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.percentagesPrompt, className].join(" ")}
      style={percentagesPromptStyle}
    >
      <img
        className={styles.placeholderIcon}
        loading="lazy"
        alt=""
        src="/frame-257@2x.png"
      />
      <h1 className={styles.wantToKnow}>{wantToKnowYourPercentages}</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonPlaceholder}>
          <div className={styles.blank}>{blank}</div>
        </button>
      </div>
    </div>
  );
};

export default PercentagesPrompt;
