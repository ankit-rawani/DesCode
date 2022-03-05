import React from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'

import logo from '../../images/Light2.png'
import menu from '../../images/icons/Menu.png'

export default function Nav() {
    const navigate = useNavigate()
    return (
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
                className={styles.navLink}
                onClick={() => {
                    navigate('/explore')
                }}
            >
                Explore
            </div>
            <div
                className={styles.navLink}
                onClick={() => {
                    navigate('/my-items')
                }}
            >
                My Items
            </div>
            <div
                className={styles.navLink}
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
                <img src={menu} className={styles.menu} alt="menu" />
            </div>
        </div>
    )
}
