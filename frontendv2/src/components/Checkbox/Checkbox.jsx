import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container" onClick={toggleCheckbox}>
      <div className={`checkbox ${isChecked ? "checked" : "unchecked"}`}>
        {isChecked && <span className="checkmark">✔</span>}
      </div>
    </div>
  );
};

export default Checkbox;