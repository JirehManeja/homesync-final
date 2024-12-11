import './AllPresetsContainer.css'
import PresetItemBig from '../PresetItemBig/PresetItemBig'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

function AllPresetsContainer() {
    return(
        <div className="all-preset-container-wrapper">
            <div className="search-create-container">
                <Button buttonName={'Create Preset'} bgColor='#013A71' textColor='white'/>
                <Searchbar placeholdder='Search'/>
            </div>
            
            <div className="preset-big-items-holder">
                <PresetItemBig presetName={'Gaming'} presetCreator={'Armenion'}/>
                <PresetItemBig presetName={'Haom'} presetCreator={'Maneja'}/>
                <PresetItemBig presetName={'Lulu Session'} presetCreator={'Pelayo'}/>
                <PresetItemBig presetName={'Totoy Session'} presetCreator={'Jireh'}/>
                <PresetItemBig presetName={'Totoy Session'} presetCreator={'Jireh'}/>
                <PresetItemBig presetName={'Totoy Session'} presetCreator={'Jireh'}/>
            </div>
        </div>
    )
}

export default AllPresetsContainer