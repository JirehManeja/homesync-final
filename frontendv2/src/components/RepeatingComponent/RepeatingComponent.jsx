import './RepeatingComponent.css'
import Switch from '../Switch/Switch'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

function RepeatingComponent() {
    const options = ["Daily", "Weekly", "Monthly"];

    return(
        <div className="repeating-container">
            <div className="isRepeating-container">
                <span className="isRepeating-text">Is Repeating</span>
                <Switch bgColor='black'/>
            </div>

            <div className="repeating-child-container">
                <span className="repeating-text">Repeating</span>
                <DropdownMenu options={options} defaultOption="Weekly"/>
            </div>
        </div>
    )
}

export default RepeatingComponent