import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ options, defaultOption, onSelect, bgColor, arrowColor, selectedTextColor, borderColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // Notify parent of the selection
  };

  return (
    <div className="dropdown-menu" style={{ borderColor: borderColor, borderStyle: 'solid', borderWidth: '1px' }}>
      <div className="dropdown-header" onClick={toggleDropdown} style={{ backgroundColor: bgColor }}>
        <span style={{ color: selectedTextColor }}>{selectedOption}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`} style={{ color: arrowColor }}>﹀</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;