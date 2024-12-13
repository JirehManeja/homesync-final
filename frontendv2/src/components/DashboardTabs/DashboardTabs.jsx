import './DashboardTabs.css'
import Button from '../Button/Button'
import { useState, useEffect } from 'react'

function DashboardTabs({ buttonNames, onButtonClick, activeIndex }) { // Accept activeIndex as a prop
    const [currentActiveIndex, setCurrentActiveIndex] = useState(activeIndex);

    useEffect(() => {
        setCurrentActiveIndex(activeIndex); // Update local state when activeIndex changes
    }, [activeIndex]);

    const handleButtonClick = (index) => {
        setCurrentActiveIndex(index);
        onButtonClick(index === 0 ? 'allPresets' : 'createPreset');
    }

    return(
        <div className='dash-tabs'>
            {buttonNames.map((name, index) => (
                <Button 
                    key={index} 
                    buttonName={name} 
                    onClick={() => handleButtonClick(index)} 
                    bgColor={currentActiveIndex === index ? '#467DB2' : '#0D5FAD'}
                    textColor='white' 
                />
            ))}
        </div>
    )
}

export default DashboardTabs;