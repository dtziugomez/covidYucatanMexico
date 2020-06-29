import React from "react";
import CountUp from "react-countup";
// icons
import { IoIosCloseCircleOutline as DeathsIcon } from "react-icons/io";
import { IoIosCheckmarkCircleOutline as RecoveredIcon } from "react-icons/io";
import { IoIosRemoveCircleOutline as ConfirmedIcon } from "react-icons/io";

const CounterItem = ({ type, value }) => {
  let Icon = null;
  let label = "";

  if (type === "confirmed") {
    Icon = ConfirmedIcon;
    label = "Confirmados";
  } else if (type === "recovered") {
    Icon = RecoveredIcon;
    label = "Sospechosos";
  } else if (type === "deaths") {
    Icon = DeathsIcon;
    label = "Defunciones";
  }

  return (
    <div className={`counter-item ${type}`}>
      <div className="counter-item-icon">
        <Icon />
      </div>
      <div className="counter-item-label">{label}</div>
      <div className="counter-item-value">
        {value ? <CountUp end={value} separator=" " /> : "0"}
      </div>
    </div>
  );
};



export default CounterItem;
