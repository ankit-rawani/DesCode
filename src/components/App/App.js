// import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from '../navbar'
import Checkout from '../checkout/Checkout';

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Nav />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </>
    )
}


export default App;
