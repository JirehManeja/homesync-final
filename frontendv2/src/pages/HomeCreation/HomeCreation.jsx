import './HomeCreation.css'
import PreDashboardHeader from '../../components/PreDashboradHeader/PreDashboradHeader'
import HomeItem from '../../components/HomeItem/HomeItem'
import Homes from '../../components/Homes/Homes'
import HomeRegistrationForm from '../../components/HomeRegistrationForm/HomeRegistrationForm'
import { useState } from 'react';

function HomeCreation() {
    const [activeComponent, setActiveComponent] = useState("homes");

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="home-creation-wrapper">
            <PreDashboardHeader onButtonClick={handleButtonClick} />
            {activeComponent === "homes" && <Homes />}
            {activeComponent === "register" && <HomeRegistrationForm />}
        </div>
    )
}

export default HomeCreation