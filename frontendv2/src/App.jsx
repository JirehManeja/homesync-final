import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import LoginRegisterPage from './pages/LoginRegisterPage/LoginRegisterPage'
import HomeCreation from './pages/HomeCreation/HomeCreation'
import HomeOverview from './pages/HomeOverview/HomeOverview'
import Presets from './pages/Presets/Presets'
import Members from './pages/Members/Members'
import Profile from './pages/Profile/Profile'
import Devices from './pages/Devices/Devices'
import CreatePresetContainer from './components/CreatePresetContainer/CreatePresetContainer'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<LoginRegisterPage />} />
                <Route path="/home-creation" element={<HomeCreation />} />
                <Route path="/home-overview" element={<HomeOverview />} />
                <Route path="/presets" element={<Presets />} />
                <Route path="/members" element={<Members />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/test" element={<CreatePresetContainer />} />
            </Routes>
        </Router>
    )
}

export default App