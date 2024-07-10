import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./file-upload-content.module.css";

export type FileUploadContentType = {
  className?: string;
  prop?: string;
  ofOurHighAchieversGotInto?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const FileUploadContent: NextPage<FileUploadContentType> = ({
  className = "",
  prop,
  ofOurHighAchieversGotInto,
  propGap,
}) => {
  const fileUploadContentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.fileUploadContent, className].join(" ")}
      style={fileUploadContentStyle}
    >
      <div className={styles.fileUploadContentChild} />
      <div className={styles.wrapper}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.ofOurHigh}>{ofOurHighAchieversGotInto}</div>
    </div>
  );
};

export default FileUploadContent;
