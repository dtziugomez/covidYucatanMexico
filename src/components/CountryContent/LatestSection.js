import React from "react";
// components
import { Counter } from "./../Counter";

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
