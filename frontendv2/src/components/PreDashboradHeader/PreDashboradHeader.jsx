import LogoText from '../LogoText/LogoText'
import './PreDashboradHeader.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function PreDashboradHeader({ onButtonClick }) {
    const [activeButton, setActiveButton] = useState("home");

    return (
        <div className="pre-dash-header-container">
            <LogoText />

            <div className="navigation-buttons">
                <button
                    className={`nav-button ${activeButton === "home" ? "active" : ""}`}
                    onClick={() => { setActiveButton("home"); onButtonClick("homes"); }}
                >
                    Homes
                </button>
                <button
                    className={`nav-button ${activeButton === "register" ? "active" : ""}`}
                    onClick={() => { setActiveButton("register"); onButtonClick("register"); }}
                >
                    Register Home
                </button>
            </div>

            <Link to="/profile" className="profile-pic">
                <img src="./src/assets/pelayow.png" alt="" className="profile-img" />
            </Link>
        </div>
    )
}

export default PreDashboradHeader