import type { NextPage } from "next";
import styles from "./header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: NextPage<Header1Type> = ({ className = "" }) => {
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
        <div className={styles.headerIcons}>
          <a className={styles.text}>Home</a>
          <div className={styles.textParent}>
            <a className={styles.text1}>About</a>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
          <div className={styles.textGroup}>
            <a className={styles.text2}>Services</a>
            <img className={styles.icon1} alt="" src="/icon.svg" />
          </div>
          <div className={styles.textContainer}>
            <a className={styles.text3}>Countries</a>
            <img className={styles.icon2} alt="" src="/icon.svg" />
          </div>
          <a className={styles.text4}>Partnership</a>
          <a className={styles.text5}>Events</a>
          <a className={styles.text6}>Contact Us</a>
        </div>
        <div className={styles.headerSubheading}>
          <a className={styles.text7}>Register</a>
          <div className={styles.textWrapper}>
            <a className={styles.text8}>Log in</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
