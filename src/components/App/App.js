// import styles from './App.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'

import Nav from '../navbar'
import Home from '../home/Home'
import Checkout from '../checkout/Checkout'
import Footer from '../footer/Footer'
import Profile from '../Profile/Profile'
import AllProfileItems from '../../data/AllProfileItems'
import CreateItem from '../createItem/CreateItem'
import ItemPage from '../ItemPage/Item'

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Navigate replace to="/home" />}
                    />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/create" element={<CreateItem />} />
                    <Route exact path="/item/:id" element={<ItemPage />} />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                dpURL="/img/profile-pic.png"
                                name="Mia Ayana"
                                bannerImg="/img/profile-banner.png"
                                items={AllProfileItems}
                            />
                        }
                    />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App
