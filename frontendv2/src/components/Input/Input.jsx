import './Input.css'

function Input({ type, placeholder }) {
    return(
        <input type={type} placeholder={placeholder} className='input-tag'/>
    )
}

export default Input