import type { NextPage } from "next";
import ListContent2 from "./list-content2";
import ListContent1 from "./list-content1";
import ListContent from "./list-content";
import GapDescription from "./gap-description";
import FrameComponent1 from "./frame-component1";
import FrameComponent from "./frame-component";
import PercentagesPrompt from "./percentages-prompt";
import styles from "./parents.module.css";

export type ParentsType = {
  className?: string;
};

const Parents: NextPage<ParentsType> = ({ className = "" }) => {
  return (
    <section className={[styles.parents, className].join(" ")}>
      <div className={styles.parentsContent}>
        <div className={styles.soManyParentsFocusMainlyOWrapper}>
          <h1
            className={styles.soManyParents}
          >{`So many parents focus mainly on The Typical Applicant Pool in college admissions.  `}</h1>
        </div>
        <div className={styles.gPAFocus}>
          <div className={styles.gPAFocusContent}>
            <div className={styles.gPAList}>
              <ListContent2
                gPA="GPA"
                havingTheHighestGPAPossib="Having the highest GPA possible increases your potential to meet colleges’ academic expectations. Tutoring, study skills, and accountability mentoring can go a long way for any student who is struggling to keep their grades up."
              />
              <ListContent1
                frame275="/frame-275@2x.png"
                evenJuniorsWhoShowAmazing="Even juniors who show amazing academic progress can overcome a previously lower GPA. It is about the trajectory of your academics."
              />
              <ListContent
                testScores="Test Scores"
                unlikeGPATestScoresAreCom="Unlike GPA, test scores are completely within your control."
                afterUtilizingOurTestPrep="After utilizing our test prep services, 100% of our high-achieving students from the class of 2024 increased their scores to achieve a score within the top 2%."
              />
              <ListContent1
                frame275="/frame-276@2x.png"
                evenJuniorsWhoShowAmazing="If your grades are lower, you want to get your test scores in the top 25% for that university.. "
                propTop="452px"
                propMinHeight="398px"
              />
              <ListContent2
                gPA="Extracurriculars"
                havingTheHighestGPAPossib="Having baseline involvement in something is important for admissions.  You need to have spent your time engaging in something helpful, enriching, or productive."
                propTop="904px"
              />
              <ListContent1
                frame275="/frame-275@2x.png"
                evenJuniorsWhoShowAmazing="Do not try to stuff your resume with too many things. Quality over quantity will always be most effective. "
                propTop="904px"
                propMinHeight="398px"
              />
              <ListContent
                testScores="Class Rigor"
                unlikeGPATestScoresAreCom="The difficulty level of your 5 core classes compared to other students at your school is important to colleges.  5 core classes:"
                afterUtilizingOurTestPrep="Math, History, Science, English, Foreign Language"
                propTop="1356px"
              />
              <ListContent1
                frame275="/frame-278@2x.png"
                evenJuniorsWhoShowAmazing="To be competitive at top universities, take the most difficult levels of all 5 core subjects that your school offers ALL FOUR YEARS!"
                propTop="1356px"
                propMinHeight="unset"
              />
            </div>
            <div className={styles.ahead}>
              <div className={styles.aheadContent}>
                <div className={styles.aheadContentInner}>
                  <button className={styles.textWrapper}>
                    <div className={styles.text}>
                      I’m Ready to Achieve My College Admissions Goals
                    </div>
                  </button>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                      <div className={styles.theFurtherAheadInTheTypicParent}>
                        <h1 className={styles.theFurtherAhead}>
                          The further ahead in the Typical Applicant Pool you
                          are, the better your chances of acceptance.
                        </h1>
                        <div
                          className={styles.soManyParents1}
                        >{`So many parents focus mainly on The Typical Applicant Pool in college admissions.  `}</div>
                      </div>
                      <button className={styles.textContainer}>
                        <div className={styles.text1}>Learn More</div>
                      </button>
                    </div>
                  </div>
                  <img
                    className={styles.containerIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-263@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseValueHeaderParent}>
          <div className={styles.caseValueHeader}>
            <h1 className={styles.caseValueGap}>Case Value Gap</h1>
          </div>
          <div className={styles.horseIllustration}>
            <div className={styles.blueHorse}>
              <div className={styles.blueHorseChild} />
              <img
                className={styles.cmHorseBlue11}
                loading="lazy"
                alt=""
                src="/cm-horse-blue-1-1@2x.png"
              />
              <div className={styles.academicsDescription}>
                <div className={styles.academicsCaption}>
                  <div className={styles.universitiesAreNot}>
                    Universities are not only looking for top academic achievers
                    anymore! They are looking for students who offer the most
                    value beyond academics.
                  </div>
                  <div className={styles.theLowerYou}>
                    The lower you are in the Typical Applicant Pool, the more
                    value you need to bring to be accepted. We refer to the
                    amount of value you need to bring in order to be accepted at
                    a university as the ‘Value Gap.’
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GapDescription />
          <div className={styles.studentTypeCategories}>
            <div className={styles.typeLabels}>
              <h1 className={styles.coreTypes}>Core Types</h1>
              <h1 className={styles.subTypes}>Sub-Types</h1>
            </div>
          </div>
          <div className={styles.studentPersonas}>
            <FrameComponent1
              group103="/group-103@2x.png"
              highAchiever="High Achiever"
              thisTypeOfStudentIsAtTheT="This type of student is at the top of their academic and achievement game"
            />
            <FrameComponent />
            <FrameComponent1
              group103="/group-117@2x.png"
              highAchiever="First Generation"
              thisTypeOfStudentIsAtTheT="This type of student was raised by parents born outside of the United States"
            />
            <FrameComponent1
              group103="/group-98@2x.png"
              highAchiever="Extra Support "
              thisTypeOfStudentIsAtTheT="This student type has academic or emotional factors that can affect college admissions"
            />
          </div>
        </div>
        <PercentagesPrompt
          wantToKnowYourPercentages="Want to know your percentages of each of these profile types? "
          blank="Take the Quiz Here"
        />
      </div>
    </section>
  );
};

export default Parents;
