import './DashboardTabs.css'
import Button from '../Button/Button'
import { useState } from 'react'

function DashboardTabs({ buttonNames }) {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleButtonClick = (index) => {
        setActiveIndex(index)
    }

    return(
        <div className='dash-tabs'>
            {buttonNames.map((name, index) => (
                <Button 
                    key={index} 
                    buttonName={name} 
                    onClick={() => handleButtonClick(index)} 
                    bgColor={activeIndex === index ? '#467DB2' : '#0D5FAD'}
                    textColor='white' 
                />
            ))}
        </div>
    )
}

export default DashboardTabs