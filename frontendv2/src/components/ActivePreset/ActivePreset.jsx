import './ActivePreset.css'
import Switch from '../Switch/Switch'

function ActivePreset() {
    return(
        <div className="active-preset-component-container">
            <div className="active-preset-switch-container">
                <img src="./src/assets/presets-green-icon.png" alt="" className="presets-green-img" />
                <span className="active-preset-component-text-title">Actice Preset</span>
                <Switch bgColor='#262A2F'/>
            </div>

            <div className="act-preset-details-container">
                <div className="act-preset-img-container">
                    <img src="./src/assets/active-preset.png" alt="" className="act-preset-img" />
                </div>

                <div className="act-preset-texts-container">
                    <span className="active-preset-name">Coding</span>
                    <span className="activated-by">Activated By Pelayow</span>
                    <span className="active-preset-time-text">00 : 00 : 00</span>
                </div>
            </div>
        </div>
    )
}

export default ActivePreset