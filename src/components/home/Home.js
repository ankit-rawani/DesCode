import React from 'react'
import classes from './Home.module.css'

const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
            <div className={classes.bannerContent}>
                Discover, collect, and sell <br />
                extraordinary NFTs
            </div>
        </div>
    )
}

const HotBids = () => {
    return <></>
}

export default function Home() {
    return (
        <div className={classes.container}>
            <Banner />
            <HotBids />
        </div>
    )
}
