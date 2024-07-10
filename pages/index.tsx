import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import FrameComponent2 from "../components/frame-component2";
import FileUploadContent from "../components/file-upload-content";
import ApplicantPool from "../components/applicant-pool";
import GPA from "../components/g-p-a";
import Parents from "../components/parents";
import ProgramFit from "../components/program-fit";
import Commitment from "../components/commitment";
import Footer from "../components/footer";
import styles from "./index.module.css";

const TypicalApplicantPoolPage: NextPage = () => {
  return (
    <div className={styles.typicalApplicantPoolPage}>
      <a className={styles.text}>Services</a>
      <section className={styles.headerParent}>
        <Header />
        <Content />
      </section>
      <FrameComponent2 />
      <section className={styles.statsContentWrapper}>
        <div className={styles.statsContent}>
          <div className={styles.statsContentChild} />
          <div className={styles.statsContentItem} />
          <FileUploadContent
            prop="100%"
            ofOurHighAchieversGotInto="of our high achievers got into a top 30 university and 85% of them got into a top 20 university in 2024."
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
      <section className={styles.reportSetInput}>
        <div className={styles.reportSetInputChild} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group-1.svg" />
      </section>
      <Parents />
      <ProgramFit />
      <Commitment />
      <Footer />
    </div>
  );
};

export default TypicalApplicantPoolPage;
