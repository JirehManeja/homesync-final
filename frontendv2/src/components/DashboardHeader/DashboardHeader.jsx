import DashboardTabs from '../DashboardTabs/DashboardTabs'
import './DashboardHeader.css'
import { Link } from 'react-router-dom'

function DashboardHeader({ buttonNames, onButtonClick, activeIndex }) {
    return(
        <div className="dash-head-wrapper">
            <div className="dash-head-container">
                <div className="dash-homename">Home Name</div>
                {buttonNames && buttonNames.length > 0 && (
                    <DashboardTabs 
                        buttonNames={buttonNames} 
                        onButtonClick={onButtonClick} // Pass the click handler
                        activeIndex={activeIndex} // Pass the active index to DashboardTabs
                    />
                )}
                <div className="circles-container">
                    <div className="bell-icon">
                        <img src="./src/assets/bell.png" alt="" className="dash-bell" />
                    </div>
                    <Link to="/profile" className="dash-profile-icon">
                        <img src="./src/assets/pelayow.png" alt="" className="dash-profile" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;