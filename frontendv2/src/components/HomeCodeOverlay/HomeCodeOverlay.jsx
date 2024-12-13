import './HomeCodeOverlay.css'
import Button from '../Button/Button'

function HomeCodeOverlay() {
    return(
        <div className="home-code-overlay-container">
            <div className="homecode-title-container">
                <span className="homecode-title">Share Home Code</span>
            </div>

            <div className="homecode-note-wrapper">
                <div className="homecode-note-container">
                    <span className="homecode-NOTE">NOTE</span>
                    <span className="homecode-detail1">Please do not expose this code unless you want a</span>
                    <span className="homecode-detail2">user to be a member to this home.</span>
                </div>
            </div>

            <div className="homecode-code-contianer">
                <span className="homecode-code">69vBA</span>
            </div>

            <div className="homecode-button-container">
                <Button buttonName={'Generate New Home Code'} bgColor='#013A71' textColor='white'/>
            </div>
        </div>
    )
}

export default HomeCodeOverlay