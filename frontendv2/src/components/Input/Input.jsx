import './Input.css';

function Input({ type, placeholder, errorMessage, hasError, value, onChange, name }) {
    return (
        <div className="input-container">
            <input 
                type={type} 
                placeholder={placeholder} 
                className={`input-tag ${hasError ? 'input-error' : ''}`} 
                onChange={onChange}
                value={value}
                name={name} // Ensure the name is passed
            />
            {hasError && <label className="error-message">{errorMessage}</label>}
        </div>
    );
}

export default Input;
