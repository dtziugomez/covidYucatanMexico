import React from "react";
import PropTypes from "prop-types";

import CounterItem from "./CounterItem";
import "./Counter.scss";

const Counter = ({ type, latest }) => {
  console.log(latest);
  let confirmados = Number(latest.confirmados);
  let sospechosos = Number(latest.sospechosos);
  let defunciones = Number(latest.defunciones);

  return (
    <div className={type === "world" ? "world-counter" : "country-counter"}>
      <CounterItem type="confirmed" value={confirmados} />
      <CounterItem type="recovered" value={sospechosos} />
      <CounterItem type="deaths" value={defunciones} />
    </div>
  );
};

export default Counter;
