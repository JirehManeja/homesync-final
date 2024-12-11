import Input from '../Input/Input'
import Button from '../Button/Button'
import RepeatingComponent from '../RepeatingComponent/RepeatingComponent'
import TimeComponent from '../TimeComponent/TimeComponent'
import Searchbar from '../Searchbar/Searchbar'
import './PresetDetailsOverlayEdit.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

function PresetDetailsOverlayEdit() {
    const options = ["All", "Lighting", "Security", "Temperature"];

    return(
        <div className="preset-details-overlay-wrapper">
            <div className="preset-details-overlay-container">
                <div className="preset-details-overlay-left-contents">
                    <div className="preset-name-section">
                        <div className="preset-name-section-img-contianer">
                            <img src="./src/assets/active-preset.png" alt="" className="preset-name-section-img" />
                        </div>

                        <div className="preset-name-section-details-container">
                            <span className="preset-name-section-name-text">Preset Name</span>
                            <Input type={'text'} placeholder={'Text'}/>
                        </div>
                    </div>

                    <div className="start-date-section">
                        <span className="start-date-section-text">Start Date</span>
                        <Input type={'date'}/>
                    </div>

                    <div className="end-date-section">
                        <span className="end-date-section-text">End Date</span>
                        <Input type={'date'}/>
                    </div>

                    <RepeatingComponent/>
                    <TimeComponent/>
                </div>

                <div className="preset-details-overlay-right-contents">
                    <span className="included-devices-text">Included Devices</span>

                    <div className="preset-details-overlay-dropdown-search">
                        <span className="spacer">??</span>
                        <DropdownMenu options={options} defaultOption={'All'}/>
                        <Searchbar/>
                    </div>
                </div>
            </div>

            <div className="preset-details-overlay-button-container">
                <Button buttonName={'Save Edit'} bgColor='#013A71' textColor='white'/>
            </div>
        </div>
    )
}

export default PresetDetailsOverlayEdit