// import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../home/Home'
import Nav from '../navbar'

function App() {
    return (
        <>
            <Nav />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
