import React, { useState } from 'react'
import styles from './style.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

import logo from '../../images/Light2.png'
import menu from '../../images/icons/Menu.png'
import MobileMenu from '../mobileMenu/index.js'

export default function Nav() {
    const navigate = useNavigate()
    const [mobileMenu, setMobile] = useState(false)
    const { pathname } = useLocation()

    return (
        <div>
            {mobileMenu ? (
                <MobileMenu
                    setMobile={setMobile}
                    className={styles.mobileMenu}
                />
            ) : null}
            <div className={styles.container}>
                <div>
                    <img
                        src={logo}
                        alt="Main Logo"
                        className={styles.img}
                        onClick={() => {
                            navigate('/')
                        }}
                    />
                </div>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchBar}
                        type="text"
                        placeholder="Search item here"
                    />
                </div>
                <div
                    className={`${styles.navLink} ${
                        pathname === '/explore' ? styles.navLinkActive : null
                    }`}
                    onClick={() => {
                        navigate('/explore')
                    }}
                >
                    Explore
                </div>
                <div
                    className={`${styles.navLink} ${
                        pathname === '/my-items' ? styles.navLinkActive : null
                    }`}
                    onClick={() => {
                        navigate('/my-items')
                    }}
                >
                    My Items
                </div>
                <div
                    className={`${styles.navLink} ${
                        pathname === '/following' ? styles.navLinkActive : null
                    }`}
                    onClick={() => {
                        navigate('/following')
                    }}
                >
                    Following
                </div>
                <div>
                    <button
                        className={styles.button}
                        onClick={() => {
                            navigate('/create')
                        }}
                    >
                        Create
                    </button>
                </div>
                <div>
                    <button
                        className={styles.buttonOutline}
                        onClick={() => {
                            navigate('/connect')
                        }}
                    >
                        Connect
                    </button>
                </div>
                <div>
                    <img
                        src={menu}
                        onClick={() => {
                            setMobile(true)
                        }}
                        className={styles.menu}
                        alt="menu"
                    />
                </div>
            </div>
        </div>
    )
}
