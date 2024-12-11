import Button from "../../components/Button/Button"
import LogoText from "../../components/LogoText/LogoText"
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/auth');
    }

    const handleRegisterClick = () => {
        navigate('/auth?mode=signup');
    }

    return (
        <>
            <div className="lp-wrapper">
                <div className="lp-header">
                    <LogoText />
                    <div className="trans-buttons">
                        <Button buttonName={'About'} bgColor="transparent" />
                        <Button buttonName={'Contact'} bgColor="transparent" />
                    </div>

                    <div className="button-sec">
                        <Button buttonName={'Login'} onClick={handleLoginClick} />
                        <Button buttonName={'Create Account'} bgColor="#013A71" textColor="white" onClick={handleRegisterClick} />
                    </div>
                </div>

                {/* section1 */}
                <div className="sec-1">
                    <span className="sec-1-text">Sync.</span>
                    <span className="sec-1-text">Live.</span>
                    <span className="sec-1-text">Simplify.</span>
                </div>

                {/* section2 */}
                <div className="sec-2">
                    <div className="text-section">
                        <span className="sec-title">Your Home, Your Rules</span>
                        <span className="sec-subtitle">Effortless Control at Your Fingertips</span>
                        <span className="sec-description">Streamline Your Smart Home Experience with One Powerful App.</span>
                        <span className="sec-description">Manage, Automate, and Monitor – Anytime, Anywhere.</span>
                    </div>
                    <div className="img-section2">
                        <img src="./src/assets/sec-2.png" alt="" className="sec-2-pic" />
                    </div>
                </div>

                {/* section3 */}
                <div className="sec-3">
                    <div className="img-section3">
                        <img src="./src/assets/sec-3.png" alt="" className="sec-3-pic" />
                    </div>
                    <div className="text-section">
                        <span className="sec-title">Customize your comfort with Presets</span>
                        <span className="sec-subtitle">Single Tap Automation</span>
                        <span className="sec-description">Create personalized presets to control devices with a single tap.</span>
                        <span className="sec-description">Set the mood, automate routines, and enjoy effortless living -</span>
                        <span className="sec-description">your home, your way.</span>
                    </div>
                </div>

                {/* section4 */}
                <div className="sec-4">
                    <div className="text-section">
                        <span className="sec-title">Control Multiple Homes with Ease</span>
                        <span className="sec-subtitle">Centralized Home Management</span>
                        <span className="sec-description">Manage all your homes each with its own devices and </span>
                        <span className="sec-description">personalized presets. Stay connected and in </span>
                        <span className="sec-description">control of every space effortlessly</span>
                    </div>
                    <div className="img-section4">
                        <img src="./src/assets/sec-2.png" alt="" className="sec-4-pic" />
                    </div>
                </div>

                {/* section5 */}
                <div className="sec-5">
                    <div className="img-section5">
                        <img src="./src/assets/sec-5.png" alt="" className="sec-5-pic" />
                    </div>
                    <div className="text-section">
                        <span className="sec-title">Share Control, Stay Connected</span>
                        <span className="sec-subtitle">Manage who can access and control each home. </span>
                        <span className="sec-description">As the main owner, you can give family members, </span>
                        <span className="sec-description">relatives, or trusted individuals access to devices and presets </span>
                        <span className="sec-description">– all on your terms.</span>
                    </div>
                </div>

                {/* extra */}
                <div className="extra-container">
                    <img src="./src/assets/logo.png" alt="" className="logo-extra" />
                    <span className="tagline">Make your home smart.</span>
                    <Button buttonName={"Register Now"} bgColor="#013A71" textColor="white" onClick={handleRegisterClick} />
                </div>
            </div>

            <footer className="footer-container">
                <div className="copyright-container">
                    <div className="links">
                        <a href="" className="linker">
                            <img src="./src/assets/github.png" alt="" className="link-icon" />
                        </a>
                        <a href="" className="linker">
                            <img src="./src/assets/linkedin.png" alt="" className="link-icon" />
                        </a>
                        <a href="" className="linker">
                            <img src="./src/assets/facebook.png" alt="" className="link-icon" />
                        </a>
                    </div>

                    <span className="copyright-text">Copyright. All Rights Reserved</span>
                </div>

                <div className="company-container">
                    <span className="company-title">Company</span>
                    <div className="companies">
                        <a href="#" className="company-link">About</a>
                        <a href="#" className="company-link">News</a>
                        <a href="#" className="company-link">Updates</a>
                        <a href="#" className="company-link">Address</a>
                    </div>
                </div>
                <div className="resources-container">
                    <span className="resources-title">Resources</span>
                    <div className="resources">
                        <a href="#" className="resources-link">College</a>
                        <a href="#" className="resources-link">Support</a>
                        <a href="#" className="resources-link">Community</a>
                        <a href="#" className="resources-link">Creators</a>
                        <a href="#" className="resources-link">Safety</a>
                    </div>
                </div>
                <div className="policies-container">
                    <span className="policies-title">Policies</span>
                    <div className="policies">
                        <a href="#" className="policies-link">Terms</a>
                        <a href="#" className="policies-link">Privacy</a>
                        <a href="#" className="policies-link">Guidelines</a>
                        <a href="#" className="policies-link">Acknowledgement</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LandingPage