import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./list-content1.module.css";

export type ListContent1Type = {
  className?: string;
  frame275?: string;
  evenJuniorsWhoShowAmazing?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propMinHeight?: CSSProperties["minHeight"];
};

const ListContent1: NextPage<ListContent1Type> = ({
  className = "",
  frame275,
  evenJuniorsWhoShowAmazing,
  propTop,
  propMinHeight,
}) => {
  const listContent1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      minHeight: propMinHeight,
    };
  }, [propTop, propMinHeight]);

  return (
    <div
      className={[styles.listContent, className].join(" ")}
      style={listContent1Style}
    >
      <div className={styles.listContentChild} />
      <div className={styles.listTipsParent}>
        <div className={styles.listTips}>
          <h1 className={styles.tip}>Tip</h1>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame275}
        />
      </div>
      <div className={styles.evenJuniorsWho}>{evenJuniorsWhoShowAmazing}</div>
    </div>
  );
};

export default ListContent1;
