import HomeItem from '../HomeItem/HomeItem'
import './Homes.css'

function Homes() {
    return (
        <>
            <div className="column-names">
                <div className="homename-col">Home Name</div>
                <div className="municipality-city-col">Municipality/City</div>
                <div className="barangay-col">Barangay</div>
                <div className="role-col">Role</div>
                <div className="actions-col">Actions</div>
            </div>

            <div className="homeitem-component-wrapper">
                <HomeItem homename={'Main Home'} municipalityCity={'Consolacion'} barangay={'Casili'} role={'Owner'} />
                <HomeItem homename={'Dorm'} municipalityCity={'Cebu'} barangay={'Colon'} role={'Owner'} />
                <HomeItem homename={'Beach House'} municipalityCity={'Medellin'} barangay={'Dagat'} role={'Shared'} />
                <HomeItem homename={'Temporary House'} municipalityCity={'Mandaue'} barangay={'Subangdaku'} role={'Naur'} />
            </div>
        </>
    )
}

export default Homes