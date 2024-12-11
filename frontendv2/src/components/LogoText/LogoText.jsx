import './LogoText.css'

function LogoText() {
    return(
        <div className="logo-text-container">
            <img src="./src/assets/logo.png" alt="HomeSync Logo" className="logo-pic" />
            <span className="logo-text">HomeSync</span>
        </div>
    )
}

export default LogoText