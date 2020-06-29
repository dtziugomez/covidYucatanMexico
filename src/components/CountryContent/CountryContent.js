import React from "react";
// components
import ContentTitle from "./../ContentTitle";
import LatestSection from "./LatestSection";

export default ({ country }) => (
  <>
    <ContentTitle>{country.nombre}</ContentTitle>
    <div>
      <LatestSection country={country} />
    </div>
  </>
);
