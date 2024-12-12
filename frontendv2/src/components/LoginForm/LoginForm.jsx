import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';

function LoginForm({ onSignupClick }) {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
        setErrors({ ...errors, [name]: '', general: '' }); // Clear specific errors and general error on input change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formState.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async () => {
        try {
            const result = await axios.post('http://localhost:8001/auth/login', {
                email: formState.email,
                password: formState.password,
            });

            if (result.data.success) {
                navigate('/home-creation'); // Navigate on success
            } else {
                // Map backend validation errors to the `errors` state
                const newErrors = {};
                result.data.errors.forEach((error) => {
                    if (error.field) {
                        newErrors[error.field] = error.message; // Map field-specific errors
                    } else {
                        newErrors.general = error.message; // Handle general errors without a field
                    }
                });
                setErrors(newErrors);
            }
        } catch (error) {
            if (error.response?.data?.context) {
                // Custom error with context from the backend
                setErrors({ general: error.response.data.message });
            } else {
                // Handle unexpected errors
                setErrors({ general: 'An unexpected error occurred. Please try again.' });
            }
        }
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleLogin();
        }
    };

    return (
        <div className="login-form-wrapper">
            <form className="login-form-container" onSubmit={handleLoginClick}>
                <span className="Login">Login</span>

                <div className="no-account-yet-register">
                    <span className="no-account-yet">No account yet?</span>
                    <span className="Register" onClick={onSignupClick}>Register</span>
                </div>

                <Input
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    name="email"
                    hasError={!!errors.email || errors.general}
                    errorMessage={errors.email}
                    className={errors.email || errors.general ? 'input-error' : ''} // Add error class if email has error
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleInputChange}
                    name="password"
                    hasError={!!errors.password || errors.general}
                    errorMessage={errors.password}
                    className={errors.password || errors.general ? 'input-error' : ''} // Add error class if password has error
                />

                <div className="forgot-password-container">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <Button
                    buttonName="Login"
                    bgColor="#013A71"
                    textColor="white"
                    type="submit"
                />
                    
                {errors.general && <div className="error-message general-error">{errors.general}</div>} {/* General error */}

                <div className="or">OR</div>

                <div className="google">
                    <img src="./src/assets/google.png" alt="" className="google-icon" />
                    <span className="Google">Google</span>
                </div>

                <div className="facebook">
                    <img src="./src/assets/facebook2.png" alt="" className="facebook-icon" />
                    <span className="Facebook">Facebook</span>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
