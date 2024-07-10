import type { NextPage } from "next";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
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
      <div className={styles.footerLinks}>
        <div className={styles.linksContainer}>
          <div className={styles.linksColumnWrapper}>
            <div className={styles.linksFirstColumn}>
              <div className={styles.firstLinkTitle}>Quick Link</div>
              <div className={styles.firstLinkItems}>
                <a className={styles.text}>Home</a>
                <div className={styles.firstLinkItemNameWrapper}>
                  <a className={styles.firstLinkItem}>About</a>
                </div>
                <div className={styles.firstLinkSpacing}>Services</div>
                <div className={styles.secondLinkItems}>
                  <div className={styles.text1}>Partnership</div>
                </div>
                <div className={styles.thirdLinkItems}>
                  <a className={styles.text2}>Packages</a>
                </div>
                <div className={styles.fourthLinkItems}>
                  <div className={styles.text3}>Meet Our Team</div>
                </div>
                <div className={styles.fifthLinkItems}>
                  <div className={styles.text4}>Contact US</div>
                </div>
              </div>
            </div>
            <div className={styles.linksFirstColumn1}>
              <div className={styles.text5}>Services</div>
              <div className={styles.textParent}>
                <div className={styles.text6}>5-Day Intensive</div>
                <div className={styles.textWrapper}>
                  <div className={styles.text7}>Test Prep</div>
                </div>
                <div className={styles.text8}>Admissions Service</div>
                <div className={styles.textContainer}>
                  <div className={styles.text9}>Scholarships</div>
                </div>
                <div className={styles.textFrame}>
                  <div className={styles.text10}>internship</div>
                </div>
                <div className={styles.frameDiv}>
                  <a className={styles.text11}>Events</a>
                </div>
                <div className={styles.textWrapper1}>
                  <div className={styles.text12}>FAQs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linksSecondColumn}>
            <div className={styles.secondLinkTitle}>Countries</div>
            <div className={styles.secondLinkContent}>
              <div className={styles.secondLinkItemsWrapper}>
                <div className={styles.secondLinkItems1}>Saudi Arabia</div>
                <div className={styles.secondLinkItemNameWrapper}>
                  <div className={styles.secondLinkItem}>UAE</div>
                </div>
                <div className={styles.secondLinkItems2}>Qatar</div>
                <div className={styles.secondLinkItemsContent}>
                  <div className={styles.text13}>Oman</div>
                </div>
                <div className={styles.secondLinkItemsContent1}>
                  <div className={styles.text14}>Kuwait</div>
                </div>
                <div className={styles.secondLinkItemsContent2}>
                  <div className={styles.text15}>Bahrain</div>
                </div>
              </div>
              <div className={styles.contactItems}>
                <div className={styles.contactItemsContent}>
                  <div className={styles.contactItemName}>China</div>
                </div>
                <div className={styles.contactItemsContent1}>
                  <div className={styles.text16}>India</div>
                </div>
                <div className={styles.contactItemsContent2}>
                  <div className={styles.text17}>South Korea</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.emailContainer}>
            <div className={styles.emailContent}>
              <div className={styles.emailInput}>
                <div className={styles.emailLabel}>
                  Subscribe Our Newsletter
                </div>
                <div className={styles.emailInputWrapper}>
                  <div className={styles.emailBox}>
                    <div className={styles.email}>Email</div>
                    <div className={styles.emailIcon}>
                      <img
                        className={styles.emailIconShape}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.emailInputWrapperChild} />
                </div>
              </div>
              <div className={styles.socialMedia}>
                <img
                  className={styles.socialIcons}
                  loading="lazy"
                  alt=""
                  src="/social-icons.svg"
                />
                <img
                  className={styles.socialIcons1}
                  alt=""
                  src="/social-icons-1.svg"
                />
                <div className={styles.socialIcons2}>
                  <img className={styles.bgIcon} alt="" src="/bg.svg" />
                  <img
                    className={styles.socialIconShape}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.socialIcons3}>
                  <img className={styles.bgIcon1} alt="" src="/bg.svg" />
                  <img
                    className={styles.vectorIcon}
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
            <div className={styles.copyrightContent}>Privacy Policy</div>
            <div className={styles.copyrightContent1}>Legal Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
