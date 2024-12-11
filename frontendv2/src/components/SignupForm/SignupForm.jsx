import './SignupForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

function SignupForm({ onLoginClick }) {
    return (
        <div className="signup-form-wrapper">
            <form action="#" className="signup-form-container">
                <span className="CreateAccount">Create Account</span>

                <div className="already-have-an-account-login">
                    <span className="already-have-an-account">Already have an account?</span>
                    <span className="Loginn" onClick={onLoginClick}>Login</span>
                </div>

                <div className="fullname-input-container">
                    <Input type={'text'} placeholder={'Last Name'} />
                    <Input type={'text'} placeholder={'First Name'} />
                </div>

                <Input type={'email'} placeholder={'Email'} />
                <Input type={'text'} placeholder={'Username'} />
                <Input type={'tel'} placeholder={'+63'} />
                <Input type={'password'} placeholder={'Password'} />
                <Input type={'password'} placeholder={'Confirm Password'} />

                <div className="i-agree-container">
                    <Checkbox/>
                    <span className="i-agree-to-the">I agree to the</span>
                    <span className="terms-and-conditions">Terms and Conditions</span>
                </div>

                <Button buttonName={'Create Account'} bgColor='#013A71' textColor='white' />

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
    )
}

export default SignupForm