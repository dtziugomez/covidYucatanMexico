import React from "react";

// components
import World from "./../WorldContainer";
import Country from "./../CountryContainer";
//
import styles from "./MainContent.module.scss";

export default ({ selectedCountry }) => {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>COVID19 IN YUCATAN MÉXICO</h1>
      {typeof selectedCountry.clave === "undefined" ? (
        <World />
      ) : (
        <Country key={selectedCountry.clave} country={selectedCountry} />
      )}
    </main>
  );
};
