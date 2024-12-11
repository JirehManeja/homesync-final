import './PresetListItem.css'
import Switch from '../Switch/Switch'

function PresetListItem({presetName}) {
    return(
        <div className="p-list-item-container">
            <div className="p-list-item-border">..</div>
            <div className="p-list-item-img-container">
                <img src="./src/assets/active-preset.png" alt="" className="p-list-img" />
            </div>

            <div className="p-list-item-details-container">
                <span className="p-list-name">{presetName}</span>
                <span className="p-list-creator">Created by Manlosa</span>
            </div>

            <div className="p-list-item-switch-container">
                <Switch bgColor='black'/>
            </div>
        </div>
    )
}

export default PresetListItem