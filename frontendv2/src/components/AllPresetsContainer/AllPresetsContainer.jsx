import './AllPresetsContainer.css'
import PresetItemBig from '../PresetItemBig/PresetItemBig'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

function AllPresetsContainer({ onCreatePreset }) {
    return (
        <div className="all-preset-container-wrapper">
            <div className="search-create-container">
                <div className="search-create-button">
                    <Button 
                        buttonName={'Create Preset'} 
                        bgColor='#013A71' 
                        textColor='white' 
                        onClick={onCreatePreset} // Call the function when clicked
                    />
                </div>
                <div className="search-create-searchbar">
                    <Searchbar placeholdder='Search' />
                </div>
            </div>

            <div className="preset-big-items-holder">
                <PresetItemBig presetName={'Gaming'} presetCreator={'Armenion'} />
                <PresetItemBig presetName={'Coding'} presetCreator={'Maneja'} />
                <PresetItemBig presetName={'Chill'} presetCreator={'Lee'} />
                <PresetItemBig presetName={'Sleep'} presetCreator={'Rey'} />
                <PresetItemBig presetName={'Barbie Mood'} presetCreator={'Pelayo'} />
            </div>
        </div>
    )
}

export default AllPresetsContainer;