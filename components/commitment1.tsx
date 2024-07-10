import type { NextPage } from "next";
import Connect from "./connect";
import Percentages from "./percentages";
import StepContainers from "./step-containers";
import styles from "./commitment1.module.css";

export type Commitment1Type = {
  className?: string;
};

const Commitment1: NextPage<Commitment1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.commitment, className].join(" ")}>
      <div className={styles.commitmentContentParent}>
        <div className={styles.commitmentContent}>
          <div className={styles.commitmentDescription}>
            <div className={styles.paragraphOne}>
              <div className={styles.weAreResultsDrivenContainer}>
                <span>
                  We are results-driven, so we would like the whole family on
                  board.
                </span>
                <b>
                  {" "}
                  That's why the first step is to book a strategy session when
                  the whole family can attend
                </b>
                <span>. </span>
              </div>
            </div>
            <div className={styles.paragraphTwo}>
              <div className={styles.weDoNot}>
                We do not take on thousands of students per year, and we care
                about our reputation, so we need to make sure that you are going
                to trust us to know this process and help you get results!
              </div>
            </div>
            <b className={styles.onceWeAssess}>
              Once we assess your student’s current profile, we create a
              customized plan to get your child into one of their top 3 choices!
            </b>
          </div>
        </div>
        <Connect />
        <div className={styles.contactContentWrapper}>
          <Percentages
            wantToKnowYourPercentages="If you’re serious about reaching your college admissions goals..."
            text=" BOOK YOUR STRATEGY SESSION NOW!"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
        <div className={styles.steps}>
          <div className={styles.stepsContainer}>
            <StepContainers
              step1="Step 1"
              bookA45MinuteStrategySess="Book a 45-minute Strategy Session"
              gainClarityOnYourChildsCu="Gain clarity on your child’s current college admissions profile and learn what will be necessary for them to gain acceptance at the current universities on their list."
            />
            <StepContainers
              step1="Step 2"
              bookA45MinuteStrategySess="Join the College Mastermind Family"
              gainClarityOnYourChildsCu="If we’re a good fit for your family and if we can help, we’ll invite your child to join us! Then the fun begins, and we’ll get right to work on developing their profile."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment1;
