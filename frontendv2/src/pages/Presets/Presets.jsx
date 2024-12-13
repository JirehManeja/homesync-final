import AllPresetsContainer from '../../components/AllPresetsContainer/AllPresetsContainer'
import CreatePresetContainer from '../../components/CreatePresetContainer/CreatePresetContainer'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Presets.css'
import { useState } from 'react';

function Presets() {
    const [activeComponent, setActiveComponent] = useState('allPresets'); // Default component
    const [activeTabIndex, setActiveTabIndex] = useState(0); // State for active tab index

    const handleButtonClick = (component) => {
        setActiveComponent(component);
        if (component === 'createPreset') {
            setActiveTabIndex(1); // Set active tab index to 1 for Create Preset
        } else {
            setActiveTabIndex(0); // Set active tab index to 0 for All Presets
        }
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
                        activeIndex={activeTabIndex} // Pass the active index to DashboardHeader
                    />
                </div>

                <div className="components-section-presets">
                    {activeComponent === 'allPresets' && 
                        <AllPresetsContainer onCreatePreset={() => handleButtonClick('createPreset')} />
                    }
                    {activeComponent === 'createPreset' && <CreatePresetContainer />}
                </div>
            </div>
        </div>
    )
}

export default Presets;