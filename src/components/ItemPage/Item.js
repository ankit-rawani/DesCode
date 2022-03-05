import React, { useState } from 'react'
import classes from './item.module.css'

import { useParams } from 'react-router-dom'
import getProfileItems from '../../data/getProfileItems'
import Icon from '../Icon/Icon'
import Checkout from '../checkout/Checkout'

const Content = ({ active, amount, setCheckout }) => {
    switch (active) {
        case 1: {
            return (
                <div className={classes.case1}>
                    <div className={classes.case1content}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                    </div>
                    <button onClick={setCheckout} className={classes.button}>
                        Buy for {amount} ETH
                    </button>
                    <button className={classes.buttonOutline}>
                        Make Offer
                    </button>
                </div>
            )
        }
        case 2: {
            return <div className={classes.italics}>No offers found.</div>
        }
        case 3: {
            return <div className={classes.italics}>No history found.</div>
        }
        default: {
            return <>hi</>
        }
    }
}

const RightColumn = ({ pageData, setCheckout }) => {
    const { name, amount, liked, likes } = pageData
    const [active, setActive] = useState(1)

    return (
        <div>
            <div className={classes.title}>
                <span>{name}</span>
                <span className={classes.likes}>
                    <span className={classes.icon}>
                        {liked ? (
                            <Icon name="heart-filled" size="12" />
                        ) : (
                            <Icon name="heart" size="12" />
                        )}
                    </span>
                    <span>{likes}</span>
                </span>
            </div>
            <div className={classes.subtitle}>
                From <span className={classes.strong}>{amount} ETH</span> ∙ 20
                of 25 available
            </div>

            <div>
                <div className={classes.creator}>Creator</div>

                <div className={classes.creatorWrapper}>
                    <img
                        className={classes.creatorImg}
                        src="/img/sellers/img1.png"
                        alt="creator"
                    ></img>
                    <div className={classes.creatorName}>Mia Ayana</div>
                </div>
            </div>

            <div>
                <div className={classes.nav}>
                    <div
                        className={`${classes.navItem} ${
                            active === 1 ? classes.navActive : null
                        }`}
                        onClick={() => {
                            setActive(1)
                        }}
                    >
                        Details
                    </div>
                    <div
                        className={`${classes.navItem} ${
                            active === 2 ? classes.navActive : null
                        }`}
                        onClick={() => {
                            setActive(2)
                        }}
                    >
                        Offers
                    </div>
                    <div
                        className={`${classes.navItem} ${
                            active === 3 ? classes.navActive : null
                        }`}
                        onClick={() => {
                            setActive(3)
                        }}
                    >
                        History
                    </div>
                </div>
                <Content
                    active={active}
                    amount={amount}
                    setCheckout={setCheckout}
                />
            </div>

            <div></div>
        </div>
    )
}

const ItemPage = () => {
    let { id } = useParams()
    const pageData = getProfileItems("").filter(item => (item.id.toString() === id))[0]
    const [isCheckout, setCheckout] = useState(false)

    return (
        <div className={classes.container}>
            {isCheckout ? <Checkout className={classes.checkout} /> : null}
            <div className={classes.gridCont}>
                <div className={classes.col1}>
                    <div className={classes.imgWrapper}>
                        <img
                            className={classes.img}
                            src={pageData.imgURL}
                            alt="nft"
                        ></img>
                    </div>
                </div>
                <div className={classes.col2}>
                    <RightColumn
                        pageData={pageData}
                        isCheckout={isCheckout}
                        setCheckout={setCheckout}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemPage
