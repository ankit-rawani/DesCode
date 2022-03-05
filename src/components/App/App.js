// import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from '../navbar'
import Home from '../home/Home'
import Checkout from '../checkout/Checkout'
import Footer from "../footer/Footer";
import Profile from '../Profile/Profile';

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} >
                        <Route path=":id" element={<Profile />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App
