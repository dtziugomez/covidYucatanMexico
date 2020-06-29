import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
// components
import SidebarButton from "./SidebarButton";
import SearchBox from "./../SearchBox";
import CountriesList from "./../CountriesList";
// utils, styles, ...
import { filterCountriesByName } from "./../../utils";
import styles from "./Sidebar.module.scss";

export default ({
  open,
  onToggleButtonClick,
  countries,
  onSelectedCountryChanged
}) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);

  const [selectedCountry, setSelectedCountry] = useState({});

  const handleFilterValueChange = value => {
    if (value.trim() === "") {
      setFiltredCountries(countries);
      setSelectedCountry({});
      onSelectedCountryChanged({});
    } else {
      const municipio = filterCountriesByName(countries, value);

      setFiltredCountries(municipio);
    }
  };

  const handleCountryItemClick = country => {
    const newSelectedCountry =
      country.clave === selectedCountry.clave ? {} : country;
    setSelectedCountry(newSelectedCountry);
    onSelectedCountryChanged(newSelectedCountry);
  };

  const handlePressEnter = () => {
    // on enter press select first element
    const newSelectedCountry = filtredCountries[0];
    if (newSelectedCountry) {
      setSelectedCountry(newSelectedCountry);
      onSelectedCountryChanged(newSelectedCountry);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <SidebarButton open={open} onClick={onToggleButtonClick} />

      <div className={styles.search}>
        <SearchBox
          selectedCountry={selectedCountry}
          onFilterChange={handleFilterValueChange}
          onEnterPress={handlePressEnter}
        />
      </div>

      <div className={styles.list}>
        <PerfectScrollbar>
          <CountriesList
            items={filtredCountries}
            activeItem={selectedCountry}
            onItemClick={handleCountryItemClick}
          />
        </PerfectScrollbar>
      </div>
    </aside>
  );
};
