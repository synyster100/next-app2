import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentChild} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group-6.svg" />
      </div>
      <img className={styles.footerChild} alt="" src="/frame-1171.svg" />
      <img
        className={styles.footerSpacingIcon}
        loading="lazy"
        alt=""
        src="/frame-268.svg"
      />
      <div className={styles.footerContent1}>
        <div className={styles.footerColumns}>
          <div className={styles.columnLeft}>
            <div className={styles.textParent}>
              <a className={styles.text}>Quick Link</a>
              <div className={styles.leftColumnLinks}>
                <a className={styles.text1}>Home</a>
                <div className={styles.textWrapper}>
                  <a className={styles.text2}>About</a>
                </div>
                <a className={styles.text3}>Services</a>
                <div className={styles.moreLinks}>
                  <a className={styles.text4}>Partnership</a>
                </div>
                <div className={styles.contactLinks}>
                  <a className={styles.text5}>Packages</a>
                </div>
                <div className={styles.addressLinks}>
                  <div className={styles.text6}>Meet Our Team</div>
                </div>
                <div className={styles.emailLinks}>
                  <a className={styles.text7}>Contact US</a>
                </div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <a className={styles.text8}>Services</a>
              <div className={styles.textContainer}>
                <div className={styles.text9}>5-Day Intensive</div>
                <div className={styles.textFrame}>
                  <div className={styles.text10}>Test Prep</div>
                </div>
                <div className={styles.text11}>Admissions Service</div>
                <div className={styles.frameDiv}>
                  <div className={styles.text12}>Scholarships</div>
                </div>
                <div className={styles.textWrapper1}>
                  <a className={styles.text13}>internship</a>
                </div>
                <div className={styles.textWrapper2}>
                  <a className={styles.text14}>Events</a>
                </div>
                <div className={styles.textWrapper3}>
                  <div className={styles.text15}>FAQs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnRight}>
            <a className={styles.rightColumnTitle}>Countries</a>
            <div className={styles.rightColumnLinks}>
              <div className={styles.socialLinks}>
                <div className={styles.socialLinkItems}>Saudi Arabia</div>
                <div className={styles.groupDiv}>
                  <div className={styles.text16}>UAE</div>
                </div>
                <div className={styles.socialLinkItems1}>Qatar</div>
                <div className={styles.socialLinkItems2}>
                  <div className={styles.text17}>Oman</div>
                </div>
                <div className={styles.socialLinkItems3}>
                  <div className={styles.text18}>Kuwait</div>
                </div>
                <div className={styles.socialLinkItems4}>
                  <div className={styles.text19}>Bahrain</div>
                </div>
              </div>
              <div className={styles.moreRightLinks}>
                <div className={styles.rightBottomLinks}>
                  <a className={styles.text20}>China</a>
                </div>
                <div className={styles.rightBottomLinks1}>
                  <a className={styles.text21}>India</a>
                </div>
                <div className={styles.rightBottomLinks2}>
                  <div className={styles.text22}>South Korea</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.emailSignup}>
            <div className={styles.emailSignupForm}>
              <div className={styles.emailInput}>
                <div className={styles.emailLabel}>
                  Subscribe Our Newsletter
                </div>
                <div className={styles.emailField}>
                  <div className={styles.emailIcon}>
                    <input className={styles.email} type="text" />
                    <div className={styles.inputIcon}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.emailFieldChild} />
                </div>
              </div>
              <div className={styles.socialIcons}>
                <img
                  className={styles.socialIcons1}
                  loading="lazy"
                  alt=""
                  src="/social-icons.svg"
                />
                <img
                  className={styles.socialIcons2}
                  alt=""
                  src="/social-icons-1.svg"
                />
                <div className={styles.socialIconItems}>
                  <img className={styles.bgIcon} alt="" src="/bg.svg" />
                  <img
                    className={styles.socialIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.socialIconItems1}>
                  <img className={styles.bgIcon1} alt="" src="/bg.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightChild} />
          <div className={styles.copyrightContentParent}>
            <a className={styles.copyrightContent}>Privacy Policy</a>
            <div className={styles.copyrightContent1}>Legal Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
