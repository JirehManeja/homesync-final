import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import './Devices.css'
import Searchbar from '../../components/Searchbar/Searchbar'
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import Button from '../../components/Button/Button'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import CreateDeviceOverlay from '../../components/CreateDeviceOverlay/CreateDeviceOverlay';

function Devices() {
    const options = ["All", "Daily", "Weekly", "Monthly"];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddDeviceClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="devices-page-wrapper">
            <div className="sidebar-section-devices">
                <Sidebar/>
            </div>

            <div className="content-section-devices">
                <div className="header-section-devices">
                    <DashboardHeader />
                </div>

                <div className="component-section-devices">
                    <div className="add-search-filter-container">
                        <div className="empty-space-for-left">??</div>
                        <div className="space-for-right">
                            <div className="searchbar-holder">
                                <Searchbar placeholdder='Text'/>
                            </div>
                            <div className="divider-chuchu"></div>
                            <div className="dropdown-holder">
                                <DropdownMenu options={options} onSelect={'All'} bgColor={'white'} arrowColor={'black'} selectedTextColor={'black'}/>
                            </div>
                            <div className="button-holder">
                                <Button 
                                    buttonName={'Add Device'} 
                                    bgColor='#013A71' 
                                    textColor='white' 
                                    onClick={handleAddDeviceClick}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="devices-components-holder-section">

                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <CreateDeviceOverlay />
            </Modal>
        </div>
    )
}

export default Devices