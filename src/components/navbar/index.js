import React from 'react'
import styles from './style.module.css'

import logo from '../../images/Light2.png'
import searchIcon from '../../images/icons/Search.png'

export default function Nav() {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="Main Logo" />
            </div>
            <div className={styles.searchContainer}>
                <input
                    className={styles.searchBar}
                    type="text"
                    placeholder="Search item here"
                />
            </div>
            <div className={styles.navLink}>Explore</div>
            <div className={styles.navLink}>My Items</div>
            <div className={styles.navLink}>Following</div>
            <div>
                <button className={styles.button}>Create</button>
            </div>
            <div>
                <button className={styles.buttonOutline}>Connect</button>
            </div>
        </div>
    )
}
