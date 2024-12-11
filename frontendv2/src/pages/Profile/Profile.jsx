import './Profile.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'

function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="sidebar-section">
                <Sidebar />
            </div>

            <div className="content-section-profile">
                <div className="header-section-profile">
                    <DashboardHeader />
                </div>

                <div className="components-section-profile">
                    
                </div>
            </div>
        </div>
    )
}

export default Profile