// ToggleSwitch.jsx
import React, { useState } from "react";
import "./Switch.css";

const Switch = ({ bgColor = "white" }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className="switch"
      style={{ backgroundColor: bgColor }}
      onClick={toggleSwitch}
    >
      <div
        className={`switch-handle ${isOn ? "switch-on" : "switch-off"}`}
        style={{ backgroundColor: isOn ? "#6EB45C" : "#F97979" }}
      ></div>
    </div>
  );
};

export default Switch;