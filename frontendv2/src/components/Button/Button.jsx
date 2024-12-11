import './Button.css'

function Button({ buttonName, onClick, bgColor = 'white', textColor = 'black' }) {
    return (
        <button className='buttonComponent' onClick={onClick} style={{ backgroundColor: bgColor, color: textColor, border: bgColor === 'white' ? '1px solid #D2CECE' : 'none' }} >
            {buttonName}
        </button>
    );
}

export default Button