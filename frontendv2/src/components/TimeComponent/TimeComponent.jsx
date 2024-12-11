import './TimeComponent.css'
import Switch from '../Switch/Switch'
import Input from '../Input/Input'

function TimeComponent() {
    return(
        <div className="time-component-container">
            <div className="all-day-switch-container">
                <span className="all-day-text">All Day</span>
                <Switch bgColor='black'/>
            </div>

            <div className="start-time-container">
                <span className="start-time-text">Start Time</span>
                    <Input type={'time'} placeholder={'00 : 00'}/>
            </div>

            <div className="end-time-container">
                <span className="end-time-text">End Time</span>
                <Input type={'time'} placeholder={'00 : 00'}/>
            </div>
        </div>
    )
}

export default TimeComponent