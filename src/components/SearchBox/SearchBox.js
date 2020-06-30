import React, { useState, useEffect } from "react";
// components
import FilterField from "./FilterField";

// styles, utils, ...
import { capitalize } from "./../../utils";
import styles from "./SearchBox.module.scss";

const SearchBox = ({
  selectedCountry,
  onFilterChange,
  sortValue,
  onSortChange,
  onEnterPress
}) => {
  const { name: selectedCountryName } = selectedCountry;
  const [filterValue, setFilterValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);

  // Listen to selectedCountry changes (select / unselect)
  useEffect(() => {
    if (selectedCountryName === undefined) {
      //handleClearFilterValue();
    } else if (typeof selectedCountryName === "string") {
      setFilterValue(selectedCountryName);
    }
  }, [selectedCountryName]);

  const handleFilterValueChange = e => {
    const value = capitalize(e.target.value.trimLeft());
    setFilterValue(value);

    // try to run filter only when user ends typing
    // https://stackoverflow.com/a/42223871/2432219
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        onFilterChange(value);
      }, 500)
    );
  };

  const handleClearFilterValue = () => {
    setFilterValue("");
    onFilterChange("");
  };

  return (
    <div className={styles.box}>
      <div className={styles.filterBox}>
        <FilterField
          autoFocus
          value={filterValue}
          onChange={handleFilterValueChange}
          onClear={handleClearFilterValue}
          onEnterPress={onEnterPress}
        />
      </div>
    </div>
  );
};

export default SearchBox;
