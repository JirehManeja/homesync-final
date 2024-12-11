import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import './Devices.css'

function Devices() {
    return(
        <div className="devices-page-wrapper">
            <div className="sidebar-section-devices">
                <Sidebar/>
            </div>

            <div className="content-section-devices">
                <div className="header-section-devices">
                    <DashboardHeader />
                </div>
            </div>
        </div>
    )
}

export default Devices