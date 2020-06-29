import React from "react";
// components
import { Counter } from "./../Counter";
// import TotalCasesPieChart from "./../TotalCasesPieChart";
// import { extractLatestCasesChartData } from "./../../utils";
import styles from "./LatestSection.module.scss";

const LatestSection = ({ country }) => {
  return (
    <div className={styles.section}>
      <div className={styles.counter}>
        <Counter type="country" latest={country} />
      </div>
    </div>
  );
};

export default LatestSection;
