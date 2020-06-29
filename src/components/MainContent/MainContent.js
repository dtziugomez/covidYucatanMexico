import React from "react";
//import { FaGithub } from "react-icons/fa";
// components
import World from "./../WorldContainer";
import Country from "./../CountryContainer";
//
import styles from "./MainContent.module.scss";

export default ({ selectedCountry }) => {
  return (
    <main className={styles.mainContent}>
      {typeof selectedCountry.clave === "undefined" ? (
        <World />
      ) : (
        <Country key={selectedCountry.clave} country={selectedCountry} />
      )}
    </main>
  );
};
