import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Check localStorage for the collapsed state
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState === 'true'; // Return true if saved state is 'true'
  });

  // Effect to update localStorage whenever isCollapsed changes
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', isCollapsed);
  }, [isCollapsed]);

  // Determine the active item based on the current route
  const getActiveItem = () => {
    switch (location.pathname) {
      case '/home-overview':
        return "overview";
      case '/presets':
        return "presets";
      case '/members':
        return "members";
      case '/devices':
        return "devices";
      case '/profile':
        return null; // No active state for this route
      default:
        return "overview"; // Default active item
    }
  };

  const activeItem = getActiveItem(); // Get the active item based on the current route

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo-container-sb">
        <img src="./src/assets/logo.png" alt="Logo" className="logo-icon" />
        {!isCollapsed && <span className="logo-spans">HomeSync</span>}
      </div>

      <div className="pages-text">
        <span className="pages-span">Pages</span>
      </div>

      <div className="menu">
        <Link to="/home-overview" className={`menu-item ${activeItem === "overview" ? "active" : ""}`}>
          <img src="./src/assets/overview-icon.png" alt="Overview" className="overview-icon" />
          {!isCollapsed && <span className="spans">Overview</span>}
        </Link>

        <Link to="/presets" className={`menu-item ${activeItem === "presets" ? "active" : ""}`}>
          <img src="./src/assets/presets-icon.png" alt="Presets" className="presets-icon" />
          {!isCollapsed && <span className="spans">Presets</span>}
        </Link>

        <Link to="/members" className={`menu-item ${activeItem === "members" ? "active" : ""}`}>
          <img src="./src/assets/members-icon.png" alt="Members" className="members-icon" />
          {!isCollapsed && <span className="spans">Members</span>}
        </Link>

        <Link to="/devices" className={`menu-item ${activeItem === "devices" ? "active" : ""}`}>
          <img src="./src/assets/devices-icon.png" alt="Devices" className="devices-icon" />
          {!isCollapsed && <span className="spans">Devices</span>}
        </Link>
      </div>

      <div className="toggle" onClick={toggleSidebar}>
        <img src="./src/assets/hide-icon.png" alt="Toggle" className="hide-icon" />
        {!isCollapsed && <span className="spans">Hide</span>}
      </div>
    </div>
  );
};

export default Sidebar;