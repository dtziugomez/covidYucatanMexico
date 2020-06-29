import React, { useState } from "react";
import { useAsync } from "react-async";
//components
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
// api, utils, styles, ...
import { getMunicipios } from "./api";

import styles from "./App.module.scss";

export default function App() {
  const { data } = useAsync({ promiseFn: getMunicipios });
  const [selectedCountry, setSelectedCountry] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1080);

  const handleSelectedCountry = country => {
    setSelectedCountry(country);

    // in small devices close sidebar after country selection
    if (window.innerWidth < 480) {
      setSidebarOpen(false);
    }
  };

  if (data) {
    const { State = [] } = data;

    return (
      <div
        className={`${styles.app} ${
          sidebarOpen ? styles.sideOpen : styles.sideClose
        }`}
      >
        <div className={styles.side}>
          <Sidebar
            open={sidebarOpen}
            onToggleButtonClick={() => setSidebarOpen(!sidebarOpen)}
            countries={State}
            onSelectedCountryChanged={handleSelectedCountry}
          />
        </div>
        <div className={styles.main}>
          <MainContent selectedCountry={selectedCountry} />
        </div>
      </div>
    );
  }
  return null;
}
