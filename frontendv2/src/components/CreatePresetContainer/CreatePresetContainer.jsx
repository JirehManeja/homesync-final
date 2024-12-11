import Input from '../Input/Input'
import './CreatePresetContainer.css'
import RepeatingComponent from '../RepeatingComponent/RepeatingComponent'
import TimeComponent from '../TimeComponent/TimeComponent'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Searchbar from '../Searchbar/Searchbar'

function CreatePresetContainer() {
    const options = ["All", "Lighting", "Security", "Temperature"];

    return(
        <div className="cpc-container">
            <div className="cpc-left-container">
                <div className="cpc-preset-name-container">
                    <div className="cpc-preset-img-container">
                        <img src="./src/assets/active-preset.png" alt="" className="cpc-preset-img" />
                    </div>

                    <div className="cpc-preset-name-text-section">
                        <span className="cpc-preset-name-text">Preset Name</span>
                        <Input type={'text'} placeholder={'Text'}/>
                    </div>
                </div>

                <div className="cpc-preset-start-date-container">
                    <span className="cpc-preset-start-date-text">Start Date</span>
                    <Input type={'date'}/>
                </div>

                <div className="cpc-preset-end-date-container">
                    <span className="cpc-preset-end-date-text">End Date</span>
                    <Input type={'date'}/>
                </div>

                <RepeatingComponent/>
                <TimeComponent/>
            </div>

            <div className="cpc-right-wrapper">
                <div className="cpc-right-container">
                    <span className="cpc-included-devices">Included Devices</span>

                    <div className="dropdown-search-wrapper">
                        <div className="dropdown-search-container">
                            <span className="shrinker-chuchu">??</span>
                            <DropdownMenu options={options} defaultOption="All"/>
                            <Searchbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePresetContainer