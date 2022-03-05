import React from 'react'
import classes from './Home.module.css'

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
    const bidsArray = [
        {
            amount: '1.25',
            name: 'Abstract Smoke Red Blue',
            img: '/nfts/img1.png',
            liked: true,
            likes: '92',
        },
        {
            amount: '0.20',
            name: 'Mountain Landscape',
            img: '/nfts/img1.png',
            liked: false,
            likes: '25',
        },
        {
            amount: '0.00',
            name: 'Paint Color on Wall',
            img: '/nfts/img1.png',
            liked: true,
            likes: '55',
        },
        {
            amount: '0.87',
            name: 'Abstract Patern',
            img: '/nfts/img1.png',
            liked: true,
            likes: '82',
        },
        {
            amount: '0.09',
            name: 'White Line Grafiti',
            img: '/nfts/img1.png',
            liked: false,
            likes: '22',
        },
        {
            amount: '0.90',
            name: 'Abstract Triangle',
            img: '/nfts/img1.png',
            liked: true,
            likes: '71',
        },
        {
            amount: '0.52',
            name: 'Lake Landscape',
            img: '/nfts/img1.png',
            liked: true,
            likes: '63',
        },
        {
            amount: '0.85',
            name: 'Blue Red Art',
            img: '/nfts/img1.png',
            liked: false,
            likes: '66',
        },
    ]

    return (
        <div className={classes.sellers}>
            <div className={classes.sellerTitle}>Hot Bids</div>
            <div className={classes.hotCont}>
                {bidsArray.map(({ liked, likes, img, amount, name }) => (
                    <NFTCard
                        key={name}
                        liked={liked}
                        likes={likes}
                        imgURL={img}
                        amount={amount}
                        name={name}
                    />
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
