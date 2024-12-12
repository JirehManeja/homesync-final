import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import './SignupForm.css';

function SignupForm({ onLoginClick }) {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        general: ''
    });

    const [successMessage, setSuccessMessage] = useState(''); // Add state for success message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
        setErrors({ ...errors, [name]: '', general: '' }); // Clear specific error and general error
    };

    const validateForm = () => {
        const newErrors = {};

        // Required field validations
        if (!formState.firstname) newErrors.firstname = 'First name is required';
        if (!formState.lastname) newErrors.lastname = 'Last name is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.username) newErrors.username = 'Username is required';
        
        // Phone number validation (should only contain digits)
        if (!formState.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d+$/.test(formState.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must contain only digits';
        }
        
        // Password and confirm password validation
        if (!formState.password) newErrors.password = 'Password is required';
        if (formState.password !== formState.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // If form validation fails, do not proceed with the request
        }

        try {
            const result = await axios.post('http://localhost:8001/auth/register', formState);

            if (result.data.success) {
                setSuccessMessage('Successfully registered! You can now log in.');
            } else {
                // If backend returns a general message (e.g., email already in use)
                const newErrors = {};

                if (result.data.message) {
                    newErrors.general = result.data.message; // Assign the message to the general error
                }

                // Handle field-specific errors (if any)
                if (result.data.errors) {
                    result.data.errors.forEach((error) => {
                        if (error.field) {
                            newErrors[error.field] = error.message;
                        }
                    });
                }

                setErrors(newErrors); // Update state with the error messages
            }
        } catch (error) {
            // In case of network or other errors
            if (error.response?.data?.context) {
                setErrors({ general: error.response.data.message });
            } else {
                setErrors({ general: 'An unexpected error occurred. Please try again.' });
            }
        }
    };

    return (
        <div className="signup-form-wrapper">
            <form onSubmit={handleFormSubmit} className="signup-form-container">
                <span className="CreateAccount">Create Account</span>

                <div className="already-have-an-account-login">
                    <span className="already-have-an-account">Already have an account?</span>
                    <span className="Loginn" onClick={onLoginClick}>Login</span>
                </div>

                <div className="fullname-input-container">
                    <Input
                        type={'text'}
                        placeholder={'Last Name'}
                        value={formState.lastname}
                        onChange={handleInputChange}
                        name="lastname"
                        hasError={!!errors.lastname}
                        errorMessage={errors.lastname}
                    />
                    <Input
                        type={'text'}
                        placeholder={'First Name'}
                        value={formState.firstname}
                        onChange={handleInputChange}
                        name="firstname"
                        hasError={!!errors.firstname}
                        errorMessage={errors.firstname}
                    />
                </div>

                <Input
                    type={'email'}
                    placeholder={'Email'}
                    value={formState.email}
                    onChange={handleInputChange}
                    name="email"
                    hasError={!!errors.email}
                    errorMessage={errors.email}
                />

                <Input
                    type={'text'}
                    placeholder={'Username'}
                    value={formState.username}
                    onChange={handleInputChange}
                    name="username"
                    hasError={!!errors.username}
                    errorMessage={errors.username}
                />

                <Input
                    type={'tel'}
                    placeholder={'+63'}
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    name="phoneNumber"
                    hasError={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber}
                />

                <Input
                    type={'password'}
                    placeholder={'Password'}
                    value={formState.password}
                    onChange={handleInputChange}
                    name="password"
                    hasError={!!errors.password}
                    errorMessage={errors.password}
                />

                <Input
                    type={'password'}
                    placeholder={'Confirm Password'}
                    value={formState.confirmPassword}
                    onChange={handleInputChange}
                    name="confirmPassword"
                    hasError={!!errors.confirmPassword}
                    errorMessage={errors.confirmPassword}
                />

                <div className="i-agree-container">
                    <Checkbox />
                    <span className="i-agree-to-the">I agree to the</span>
                    <span className="terms-and-conditions">Terms and Conditions</span>
                </div>

                <Button buttonName={'Create Account'} bgColor="#013A71" textColor="white" type="submit" />

                {successMessage && (
                    <div className="success-message">
                        <span>{successMessage}</span>
                    </div>
                )}

                {errors.general && (
                    <div className="error-message">
                        <span>{errors.general}</span>
                    </div>
                )}

                <div className="or">OR</div>

                <div className="social-login">
                    <div className="google">
                        <img src="./src/assets/google.png" alt="" className="google-icon" />
                        <span className="Google">Google</span>
                    </div>

                    <div className="facebook">
                        <img src="./src/assets/facebook2.png" alt="" className="facebook-icon" />
                        <span className="Facebook">Facebook</span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
