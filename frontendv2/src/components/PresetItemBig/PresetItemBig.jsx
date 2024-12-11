import './PresetItemBig.css'
import Button from '../Button/Button'
import React, { useState } from 'react'

function PresetItemBig({presetName, presetCreator}) {
    const [isActive, setIsActive] = useState(false)

    const handleButtonClick = () => {
        setIsActive(!isActive)
    }

    return(
        <div className="preset-item-big-wrapper">
            <div className="preset-item-big-container">
                <div className="preset-item-big-name-wrapper">
                    <div className="preset-item-big-name-container">
                        <div className="preset-item-big-name-img-container">
                            <div className="preset-item-big-img-container">
                                <img src="./src/assets/active-preset.png" alt="" className="preset-item-big-img" />
                            </div>

                            <div className="preset-item-big-text-container">
                                <span className="preset-item-big-presetName">{presetName}</span>
                                <span className="preset-big-item-presetCreator">{presetCreator}</span>
                            </div>
                        </div>

                        <div className="dot-container">
                            <img src="./src/assets/dots.png" alt="" className="dot-img" />
                        </div>
                    </div>
                </div>

                <div className="preset-item-big-lower-wrapper">
                    <div className="preset-item-big-time-container">
                        <div className="time-range-container">
                            <img src="./src/assets/clear-clock.png" alt="" className="clear-clock-img" />
                            <span className="time-range">7:30 AM - 10:30 PM</span>
                        </div>

                        <div className="preset-item-big-repeat-container">
                            <img src="./src/assets/repeat-icon.png" alt="" className="repeat-icon-img" />
                            <span className="repeat-times">Weekly</span>
                        </div>
                    </div>

                    <div className="preset-item-big-date-container">
                        <div className="date-range-container">
                            <img src="./src/assets/x.png" alt="" className="x-img" />
                            <span className="preset-item-big-date">December 31</span>
                        </div>

                        <div className="some-empty-container"></div>
                    </div>

                    <div className="three-buttons-container">
                        <Button 
                            buttonName={isActive ? 'Deactivate' : 'Activate'}
                            bgColor={isActive ? '#F97979' : '#6EB45C'}
                            textColor='white'
                            onClick={handleButtonClick}
                        />
                        <Button buttonName={'Edit'}/>
                        <Button buttonName={'Delete'} bgColor='#F97979' textColor='white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresetItemBig