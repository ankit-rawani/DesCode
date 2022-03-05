import React from 'react'
import classes from './Home.module.css'

import SellerCard from '../SellerCard/SellerCard.js'
import NFTCard from '../NFTCard/NFTCard.js'
import getUsers from '../../data/getUsers'
import getProfileItems from '../../data/getProfileItems'
import { Link } from 'react-router-dom'

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
    const sellerArray = getUsers('')

    return (
        <div className={classes.sellers}>
            <div className={classes.sellerTitle}>Top Sellers</div>
            <div className={classes.sellerCont}>
                {sellerArray.map((seller) => (
                    <Link to={`/profile/${seller.id}`} key={seller.id}>
                        <SellerCard
                            className={classes.sellerCard}
                            num={seller.num}
                            img={seller.img}
                            eth={seller.eths}
                            name={seller.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

const HotBids = () => {
    const bidsArray = getProfileItems('')

    return (
        <div className={classes.sellers}>
            <div className={classes.sellerTitle}>Hot Bids</div>
            <div className={classes.hotCont}>
                {bidsArray.map(({ liked, likes, imgURL, amount, name }) => (
                    <div key={name} className={classes.cardWrapper}>
                        <NFTCard
                            liked={liked}
                            likes={likes}
                            imgURL={imgURL}
                            amount={amount}
                            name={name}
                        />
                    </div>
                ))}
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
