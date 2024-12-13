import './Members.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Button from '../../components/Button/Button'
import MemberCard from '../../components/MemberCard/MemberCard'
import Modal from '../../components/Modal/Modal'
import HomeCodeOverlay from '../../components/HomeCodeOverlay/HomeCodeOverlay'
import { useState } from 'react'

function Members() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleShareHomeCodeClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="members-wrapper">
            <div className="sidebar-section-members">
                <Sidebar />
            </div>

            <div className="content-section-members">
                <div className="header-section-members">
                    <DashboardHeader />
                </div>

                <div className="share-code-section">
                    <Button 
                        buttonName={'Share Home Code'} 
                        bgColor='#6EB45C' 
                        textColor='white' 
                        onClick={handleShareHomeCodeClick}
                    />
                </div>

                <div className="components-section-members">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <HomeCodeOverlay />
            </Modal>
        </div>
    )
}

export default Members