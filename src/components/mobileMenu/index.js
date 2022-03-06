import React from 'react'
import classes from './style.module.css'
import { useNavigate } from 'react-router-dom'

import logo from '../../images/Light.png'
import cross from '../../images/icons/Cross.png'

const MobileMenu = ({ setMobile }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={classes.cont}>
                <div className={classes.container}>
                    <img
                        src={logo}
                        alt="Main Logo"
                        className={classes.img}
                        onClick={() => {
                            navigate('/')
                        }}
                    />
                    <img
                        src={cross}
                        alt="Cross"
                        className={classes.img+" "+classes.closeButton}
                        onClick={() => {
                            setMobile(false)
                        }}
                    />
                </div>

                <div className={classes.navWrapper}>
                    <div
                        className={classes.navLink}
                        onClick={() => {
                            setMobile(false)
                            navigate('/explore')
                        }}
                    >
                        Explore
                    </div>
                    <div
                        className={classes.navLink}
                        onClick={() => {
                            navigate('/my-items')
                            setMobile(false)
                        }}
                    >
                        My Items
                    </div>
                    <div
                        className={classes.navLink}
                        onClick={() => {
                            navigate('/following')
                            setMobile(false)
                        }}
                    >
                        Following
                    </div>
                </div>

                <div className={classes.navFooter}>
                    <div className={classes.footerWrapper}>
                        <div>
                            <button
                                className={classes.button}
                                onClick={() => {
                                    navigate('/create')
                                    setMobile(false)
                                }}
                            >
                                Create
                            </button>
                        </div>
                        <div>
                            <button
                                className={classes.buttonOutline}
                                onClick={() => {
                                    navigate('/connect')
                                    setMobile(false)
                                }}
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
