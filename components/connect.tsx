import type { NextPage } from "next";
import styles from "./connect.module.css";

export type ConnectType = {
  className?: string;
};

const Connect: NextPage<ConnectType> = ({ className = "" }) => {
  return (
    <div className={[styles.connect, className].join(" ")}>
      <div className={styles.connectContentParent}>
        <img
          className={styles.connectContentIcon}
          alt=""
          src="/frame-257-1@2x.png"
        />
        <div className={styles.connectPrompt}>
          <div className={styles.connectHeading}>
            <h1 className={styles.weWantTo}>
              We want to connect with you if you are...
            </h1>
            <div className={styles.investmentCriteria}>
              <div className={styles.criteriaCheckboxes}>
                <img
                  className={styles.checkIconTick}
                  alt=""
                  src="/check-icon-tick.svg"
                />
                <div className={styles.readyToInvest}>
                  Ready to invest in the guidance and support of a luxury
                  service.
                </div>
              </div>
              <div className={styles.criteriaCheckboxes1}>
                <img
                  className={styles.checkIconTick1}
                  alt=""
                  src="/check-icon-tick.svg"
                />
                <div className={styles.willingToTrust}>
                  Willing to trust in our ability to strategize effectively,
                  point your child in the right direction, and break the process
                  into manageable, stress-free steps.
                </div>
              </div>
              <div className={styles.criteriaCheckboxes2}>
                <img
                  className={styles.checkIconTick2}
                  alt=""
                  src="/check-icon-tick.svg"
                />
                <div className={styles.ableToSurrender}>
                  Able to surrender to the process to allow us to do our job and
                  give your child a clear direction and the tools necessary to
                  achieve their college admissions goals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.opportunity}>
        <div className={styles.opportunityContentParent}>
          <div className={styles.opportunityContent}>
            <div className={styles.opportunityMessage}>
              <h1 className={styles.moreOpportunitiesAt}>
                More opportunities at top universities with more predictable
                results!
              </h1>
              <div className={styles.resultsInvestment}>
                <div className={styles.weGetResults}>
                  We get results. We're not cheap, but the undeniable benefits
                  of working with a support team during this process outweigh
                  the costs for most families.
                </div>
                <div className={styles.ifYoureGoing}>
                  If you’re going to invest, get a results-driven approach that
                  will give you confidence and reduce your stress.
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.placeholderContainerIcon}
            loading="lazy"
            alt=""
            src="/frame-252@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
