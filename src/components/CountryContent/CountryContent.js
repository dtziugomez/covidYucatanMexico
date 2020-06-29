import React from "react";
// components
import ContentTitle from "./../ContentTitle";
import LatestSection from "./LatestSection";
//import TimelinesSection from "./TimelinesSection";
// styles, libs, ...
import { extractTimelinesChartData } from "./../../utils";

export default ({ country }) => (
  <>
    <ContentTitle>{country.nombre}</ContentTitle>
    <div>
      <LatestSection country={country} />
    </div>
  </>
);
