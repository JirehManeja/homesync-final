import './LoginRegisterPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import Overlay from '../../components/Overlay/Overlay'
import SignupForm from '../../components/SignupForm/SignupForm'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

function LoginRegisterPage() {
    const [searchParams] = useSearchParams();
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const isLogin = !isRightPanelActive;

    useEffect(() => {
        const mode = searchParams.get('mode');
        setIsRightPanelActive(mode === 'signup');
    }, [searchParams]);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleLoginClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="log-reg-wrapper">
            <div className={`log-reg-container ${isLogin ? 'login' : 'signup'}`}>
                {isLogin ? (
                    <>
                        <LoginForm onSignupClick={handleSignUpClick} />
                        <Overlay />
                    </>
                ) : (
                    <>
                        <Overlay />
                        <SignupForm onLoginClick={handleLoginClick} />
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginRegisterPage;