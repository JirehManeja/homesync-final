import './HomeItem.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom' // Import useNavigate hook

function HomeItem({ homename, municipalityCity, barangay, role }) {
    const navigate = useNavigate(); // Initialize the navigate function

    // Determine text color based on the role
    const roleColor = role === 'Owner' ? '#4C8FE7' : role === 'Shared' ? '#EA9700' : 'black';

    // Handle Manage button click
    const handleManageClick = () => {
        navigate('/home-overview'); // Navigate to /home-overview
    };

    return (
        <div className="homeitem-wrapper">
            <div className="leftbar">..</div>
            <div className="homeitem-container">
                <div className="homename">{homename}</div>
                <div className="municipality-city">{municipalityCity}</div>
                <div className="barangay">{barangay}</div>
                <div className="role" style={{ color: roleColor }}>{role}</div>
                <div className="action-buttons">
                    <Button buttonName={'Manage'} bgColor='#6EB45C' textColor='white' onClick={handleManageClick} />
                    <Button buttonName={'Remove'} bgColor='#F97979' textColor='white' />
                </div>
            </div>
        </div>
    )
}

export default HomeItem
