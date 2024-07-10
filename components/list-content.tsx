import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./list-content.module.css";

export type ListContentType = {
  className?: string;
  testScores?: string;
  unlikeGPATestScoresAreCom?: string;
  afterUtilizingOurTestPrep?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ListContent: NextPage<ListContentType> = ({
  className = "",
  testScores,
  unlikeGPATestScoresAreCom,
  afterUtilizingOurTestPrep,
  propTop,
}) => {
  const listContent2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.listContent, className].join(" ")}
      style={listContent2Style}
    >
      <div className={styles.listContentChild} />
      <h1 className={styles.testScores}>{testScores}</h1>
      <div className={styles.unlikeGpaTestContainer}>
        <p className={styles.unlikeGpaTest}>{unlikeGPATestScoresAreCom}</p>
        <p className={styles.afterUtilizingOur}>{afterUtilizingOurTestPrep}</p>
      </div>
    </div>
  );
};

export default ListContent;
