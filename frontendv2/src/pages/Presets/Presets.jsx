import AllPresetsContainer from '../../components/AllPresetsContainer/AllPresetsContainer'
import CreatePresetContainer from '../../components/CreatePresetContainer/CreatePresetContainer'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Presets.css'
import { useState } from 'react';

function Presets() {
    const [activeComponent, setActiveComponent] = useState('allPresets'); // Default component

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="presets-wrapper">
            <div className="sidebar-section-presets">
                <Sidebar />
            </div>

            <div className="content-section-presets">
                <div className="header-section-presets">
                    <DashboardHeader 
                        buttonNames={['All Presets', 'Create Preset']} 
                        onButtonClick={handleButtonClick} // Pass the click handler
                    />
                </div>

                <div className="components-section-presets">
                    {activeComponent === 'allPresets' && <AllPresetsContainer />}
                    {activeComponent === 'createPreset' && <CreatePresetContainer />}
                </div>
            </div>
        </div>
    )
}

export default Presets;