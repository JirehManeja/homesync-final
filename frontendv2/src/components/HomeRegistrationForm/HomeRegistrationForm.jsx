import './HomeRegistrationForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

function HomeRegistrationForm() {
    return (
        <div className="hrf-container">
            <div className="hrf-heading">
                <span className="hrf-title">Home Registration Form</span>
                <span className="hrf-subtitle">Please fill up the requested information below.</span>
            </div>

            <div className="hrf-body">
                <form action="#" className="hrf-register-form">
                    <div className="hrf-homename-field">
                        <div className="label-section">
                            <span className="input-label">Home Name</span>
                            <span className="input-hint">Specify the name of your home.</span>
                        </div>
                        <div className="input-field-container">
                            <Input type={'text'} placeholder={'Home Name'} />
                        </div>
                    </div>

                    <div className="hrf-address-field">
                        <div className="label-section">
                            <span className="input-label">Address</span>
                            <span className="input-hint">Please provide the address of your home.</span>
                        </div>
                        <div className="input-field-container">
                            <Input type={'text'} placeholder={'City / Municipality'} />
                        </div>
                    </div>

                    <div className="brgy-zipcode-field">
                        <div className="empty-ragud"></div>
                        <div className="input-container-ragud">
                            <Input type={'text'} placeholder={'Barangay'} />
                            <Input type={'text'} placeholder={'Zip Code'} />
                        </div>
                    </div>

                    <div className="hrf-button-container">
                        <Button buttonName={'Register Home'} bgColor={'#013A71'} textColor={'white'} />
                    </div>
                </form>

                <form action="#" className="referral-form-container">
                    <div className="referral-heading">Want to have access to another home?</div>
                    <div className="referral-code-field">
                        <div className="ref-label-section">
                            <span className="input-label">Referral Code</span>
                            <span className="input-hint">Gain access to another home through referral code.</span>
                        </div>
                        <div className="referral-input-field">
                            <div className="hahaha">
                                <Input type={'text'} placeholder={'Referral Code'} />
                                <Button buttonName={'Join'} bgColor={'#013A71'} textColor={'white'} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeRegistrationForm