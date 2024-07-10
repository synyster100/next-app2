import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerBackground} />
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-117.svg" />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/frame-117.svg"
        />
        <div className={styles.admissionsStats}>
          <a className={styles.stats}>Home</a>
          <Form.Select className={styles.statsFormselect} />
          <select className={styles.stats1} />
          <select className={styles.stats2} />
          <a className={styles.stats3}>Partnership</a>
          <a className={styles.stats4}>Events</a>
          <a className={styles.stats5}>Contact Us</a>
        </div>
        <div className={styles.universityLabelParent}>
          <a className={styles.universityLabel}>Register</a>
          <button className={styles.universityNameWrapper}>
            <a className={styles.universityName}>Log in</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
