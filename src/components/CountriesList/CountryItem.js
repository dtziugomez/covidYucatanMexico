import React from "react";
import { FaAngleDoubleRight as SelectedIcon } from "react-icons/fa";

import styles from "./CountryItem.module.scss";

const CountryItem = ({ country, isActive, onClick }) => {
  return (
    <li 
      onClick={onClick}
    className={`${styles.item} ${isActive ? styles.active : ""}`}>
      <span className={styles.activeIcon}>
        <SelectedIcon />
      </span>
      <span className={styles.countryName}>{country.nombre}</span>
      <span className={styles.countryCases}>{country.confirmados}</span>
    </li>
  );
};

export default CountryItem;
