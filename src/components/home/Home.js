import React from 'react'
import classes from './Home.module.css'

import AllProfileItems from '../../data/AllProfileItems'
import SellerCard from '../SellerCard/SellerCard.js'
import NFTCard from '../NFTCard/NFTCard.js'

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

const TopSellers = () => {
    const sellerArray = [
        {
            num: '1',
            name: 'Mia Ayana',
            img: 'img1.png',
            eth: '5.250',
        },
        {
            num: '2',
            name: 'Rian Leon',
            img: 'img1.png',
            eth: '4.932',
        },
        {
            num: '3',
            name: 'Lady Young',
            img: 'img1.png',
            eth: '4.620',
        },
        {
            num: '4',
            name: 'Black glass',
            img: 'img1.png',
            eth: '4.125',
        },
        {
            num: '5',
            name: 'Budhiman',
            img: 'img1.png',
            eth: '3.921',
        },
    ]

    return (
        <div className={classes.sellers}>
            <div className={classes.sellerTitle}>Top Sellers</div>
            <div className={classes.sellerCont}>
                {sellerArray.map(({ num, img, eth, name }) => (
                    <SellerCard
                        className={classes.sellerCard}
                        key={num}
                        num={num}
                        img={img}
                        eth={eth}
                        name={name}
                    />
                ))}
            </div>
        </div>
    )
}

const HotBids = () => {
    return (
        <div className={classes.sellers}>
            <div className={classes.sellerTitle}>Hot Bids</div>
            <div className={classes.hotCont}>
                {AllProfileItems.map(
                    ({ liked, likes, imgURL, amount, name }) => (
                        <NFTCard
                            key={name}
                            liked={liked}
                            likes={likes}
                            imgURL={imgURL}
                            amount={amount}
                            name={name}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className={classes.container}>
            <Banner />
            <TopSellers />
            <HotBids />
            <div className={classes.hotCont}>
                <button className={classes.buttonOutline}>Load More</button>
            </div>
        </div>
    )
}
