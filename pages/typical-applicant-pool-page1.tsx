import type { NextPage } from "next";
import Header1 from "../components/header1";
import Body from "../components/body";
import LowerContent from "../components/lower-content";
import FileUploadContent from "../components/file-upload-content";
import ApplicantPool from "../components/applicant-pool";
import GPA from "../components/g-p-a";
import ParentFocus from "../components/parent-focus";
import ProgramFit from "../components/program-fit";
import Commitment1 from "../components/commitment1";
import Footer1 from "../components/footer1";
import styles from "./typical-applicant-pool-page1.module.css";

const TypicalApplicantPoolPage1: NextPage = () => {
  return (
    <div className={styles.typicalApplicantPoolPage}>
      <div className={styles.text}>Services</div>
      <section className={styles.headerParent}>
        <Header1 />
        <Body />
      </section>
      <LowerContent />
      <section className={styles.statistics}>
        <div className={styles.statisticsContent}>
          <div className={styles.statisticsContentChild} />
          <div className={styles.statisticsBackground} />
          <FileUploadContent
            prop="100%"
            ofOurHighAchieversGotInto="of our high achievers got into a top 30 university and 85% of them got into a top 20 university in 2024."
            propGap="4px"
          />
          <FileUploadContent
            prop="94%"
            ofOurHighAchieversGotInto="of our private clients got into one of their top 3 choices the past 2 years."
            propGap="16px"
          />
          <FileUploadContent
            prop="86%"
            ofOurHighAchieversGotInto="of our test prep clients had a final score in the top 5 percentile of all test takers globally the past year."
            propGap="4px"
          />
        </div>
      </section>
      <ApplicantPool />
      <GPA />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group-1.svg" />
      </section>
      <ParentFocus />
      <ProgramFit />
      <Commitment1 />
      <Footer1 />
    </div>
  );
};

export default TypicalApplicantPoolPage1;
