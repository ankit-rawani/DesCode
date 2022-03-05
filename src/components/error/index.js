import React from 'react'
import classes from './styles.module.css'

const ErrorPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.heading}>404</div>
            <div className={classes.subtitle}>
                This page does not exist.
            </div>
        </div>
    )
}

export default ErrorPage
