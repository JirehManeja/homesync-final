import AllPresetsContainer from '../../components/AllPresetsContainer/AllPresetsContainer'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Presets.css'

function Presets() {
    return (
        <div className="presets-wrapper">
            <div className="sidebar-section-presets">
                <Sidebar />
            </div>

            <div className="content-section-presets">
                <div className="header-section-presets">
                    <DashboardHeader buttonNames={['All Presets', 'Create Preset']} />
                </div>

                <div className="components-section-presets">
                    <AllPresetsContainer/>
                </div>
            </div>
        </div>
    )
}

export default Presets