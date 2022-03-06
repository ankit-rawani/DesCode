import React, { useState, useEffect } from 'react'
import classes from './item.module.css'

import { useParams, Link } from 'react-router-dom'
import getProfileItems from '../../data/getProfileItems'
import getUsers from '../../data/getUsers'
import Icon from '../Icon/Icon'
import Checkout from '../checkout/Checkout'
// import { getByDisplayValue } from '@testing-library/react'
import PaymentSuccess from '../paymentSuccess/paymentSuccess'

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
                    <button
                        onClick={() => {
                            if (document.getElementById('modal')) {
                                document.getElementById(
                                    'modalBg'
                                ).style.display = 'block'
                                document.getElementById('modal').style.display =
                                    'block'
                            }
                            setCheckout(true)
                        }}
                        className={classes.button}
                    >
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
    const { name, amount, liked, likes, author } = pageData
    const [active, setActive] = useState(1)
    const user = getUsers(author)[0]

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

                <Link to={`/profile/${user.id}`}>
                    <div className={classes.creatorWrapper}>
                        <img
                            className={classes.creatorImg}
                            src={user.img}
                            alt="creator"
                        ></img>
                        <div className={classes.creatorName}>{user.name}</div>
                    </div>
                </Link>
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
    const pageData = getProfileItems('').filter(
        (item) => item.id.toString() === id
    )[0]
    const [isCheckout, setCheckout] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState(false)
    const user = getUsers(pageData.author)[0]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return pageData ? (
        <div className={classes.container}>
            {isCheckout && !paymentStatus ? (
                <Checkout
                    className={classes.checkout}
                    setPaymentStatus={(e) => setPaymentStatus(e)}
                    amount={pageData.amount}
                    imageURL={pageData.imgURL}
                    author={user.name}
                    name={pageData.name}
                />
            ) : null}
            {paymentStatus && (
                <PaymentSuccess
                    setCheckout={(e) => setCheckout(e)}
                    setPaymentStatus={(e) => setPaymentStatus(e)}
                    imageURL={pageData.imgURL}
                    author={user.name}
                    name={pageData.name}
                />
            )}
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
    ) : (
        <div className={classes.errContainer}>
            <div className={classes.errHeading}>Error</div>
            <div>Item not found.</div>
        </div>
    )
}

export default ItemPage
