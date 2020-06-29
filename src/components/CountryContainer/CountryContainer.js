import React from "react";

// components
import CountryContent from "./../CountryContent";

export default ({ country }) => {
  if (country) {
    return <CountryContent country={country} />;
  }

  return null;
};
