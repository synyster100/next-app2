import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./list-content2.module.css";

export type ListContent2Type = {
  className?: string;
  gPA?: string;
  havingTheHighestGPAPossib?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ListContent2: NextPage<ListContent2Type> = ({
  className = "",
  gPA,
  havingTheHighestGPAPossib,
  propTop,
}) => {
  const listContentStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.listContent, className].join(" ")}
      style={listContentStyle}
    >
      <div className={styles.listBackgrounds} />
      <h1 className={styles.gpa}>{gPA}</h1>
      <div className={styles.havingTheHighest}>{havingTheHighestGPAPossib}</div>
    </div>
  );
};

export default ListContent2;
