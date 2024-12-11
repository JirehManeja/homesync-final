import './MemberCard.css'
import Button from '../Button/Button'

function MemberCard() {
    return (
        <div className="member-card-container">
            <div className="member-img-wrapper">
                <div className="member-img-container">
                    <img src="./src/assets/pelayow.png" alt="" className="member-img" />
                </div>
            </div>

            <div className="details-member">
                <div className="names-member">
                    <div className="left-side">
                        <span className="member-label">Username</span>
                        <span className="member-info">KarlOwns</span>
                    </div>

                    <div className="right-side">
                        <span className="member-label">Full Name</span>
                        <span className="member-info">Pelayo, Karl Owen</span>
                    </div>
                </div>

                <div className="additionals-member">
                    <div className="left-side">
                        <span className="member-label">Role</span>
                        <span className="member-info">Owner</span>
                    </div>

                    <div className="right-side">
                        <span className="member-label">Added By</span>
                        <span className="member-info">JM</span>
                    </div>
                </div>

                <Button buttonName={'Remove member'} bgColor='#F97979' textColor='white' />
            </div>
        </div>
    )
}

export default MemberCard