import './RecentActivityItem.css'

function RecentActivityItem() {
    return(
        <div className="rec-act-item-container">
            <div className="rec-act-img-wrapper">
                    <img src="./src/assets/pelayow.png" alt="" className="rec-act-profile-img" />
            </div>

            <div className="rec-act-details-container">
                <span className="recent-activity">User logged in.</span>
                <span className="recent-activity-time">21 : 45</span>
            </div>
        </div>
    )
}

export default RecentActivityItem