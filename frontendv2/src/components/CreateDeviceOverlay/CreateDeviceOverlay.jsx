import './CreateDeviceOverlay.css'
import Input from '../Input/Input'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Button from '../Button/Button'

function CreateDeviceOverlay() {
    const options = ["Lighting", "Temperature", "Security"];

    return(
        <div className="create-device-overlay-container">
            <div className="create-device-overlay-title-container">
                <span className="create-device-overlay-title">Create Device</span>
            </div>

            <div className="create-device-overlay-device-name-container">
                <span className="create-device-overlay-device-text">Device Name</span>
                <Input type={'text'} placeholder={'Text'}/>
            </div>

            <div className="create-device-overlay-device-category-container">
                <span className="create-device-overlay-category-text">Device Category</span>
                <DropdownMenu options={options} defaultOption="Select Category" bgColor='#F3F4F6' arrowColor={'black'} selectedTextColor={'black'} borderColor='#939393'/>
            </div>

            <div className="create-device-overlay-features-category-container">
                <span className="create-device-overlay-features-text">Device Features</span>
                <DropdownMenu options={options} defaultOption="Select Category" bgColor='#F3F4F6' arrowColor={'black'} selectedTextColor={'black'} borderColor='#939393'/>
            </div>

            <div className="create-device-overlay-features-button-container">
                <Button buttonName={'Save Device'} bgColor='#013A71' textColor='white'/>
            </div>
        </div>
    )
}

export default CreateDeviceOverlay