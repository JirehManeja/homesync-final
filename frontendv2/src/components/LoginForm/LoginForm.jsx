import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './LoginForm.css'

function LoginForm({ onSignupClick }) {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/home-creation'); // Navigate to the Home Creation page
    };

    return (
        <div className="login-form-wrapper">
            <form action="#" className="login-form-container">
                <span className="Login">Login</span>

                <div className="no-account-yet-register">
                    <span className="no-account-yet">No account yet?</span>
                    <span className="Register" onClick={onSignupClick}>Register</span>
                </div>

                <Input type={'email'} placeholder={'Email'} />
                <Input type={'password'} placeholder={'Password'} />

                <div className="forgot-password-container">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <Button buttonName={'Login'} bgColor={'#013A71'} textColor={'white'} onClick={handleLoginClick} />

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
    )
}

export default LoginForm