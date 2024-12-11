import React, { useState } from 'react';
import './CardButton.css';

const CardButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`card-button ${isActive ? 'active' : ''}`}
            onClick={toggleButton}
        >
            <span className={`arrow ${isActive ? 'active' : ''}`}>&gt;</span>
        </div>
    );
};

export default CardButton;
