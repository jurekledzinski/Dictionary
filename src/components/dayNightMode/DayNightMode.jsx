import React, { useContext } from "react";

import "./DayNightMode.scss";

import { StoreContext } from "../../store/StoreProvider";

const DayNightMode = () => {
  const { flagToggle, setFlagToggle } = useContext(StoreContext);

  const handleToggleDayNight = () => {
    setFlagToggle((prevValue) => !prevValue);
  };

  return (
    <div
      className={
        flagToggle ? "toggler toggler--night" : " toggler toggler--day"
      }
      onClick={handleToggleDayNight}
    >
      <span
        className={
          flagToggle
            ? "toggler__button toggler__button--night"
            : "toggler__button toggler__button--day"
        }
      >
        {flagToggle ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </span>
    </div>
  );
};

export default DayNightMode;
